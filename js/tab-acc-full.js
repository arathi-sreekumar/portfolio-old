// module start
define(['jquery'], function ($) {

    var defaults = {
        selectors: {
            list: '.tab',
            content: '.tab-content'
        },
        classes: {
            list: 'tab-selected',               //class for selected tab header from tab list
            content: 'tab-content-selected'     //class for selected content from tab contents
        },
        toggle: {
            hasToggle: false                    //If set this would toggle a single tab to close and open if clicked on the tab header
        }
    };

    //Constructor function for creating a tab block
    function Tabs (el, opts) {
        this.el = el instanceof $ ? el : $(el);
        this.idSelector = '#' + this.el.attr('id');
        this.opts = $.extend({}, defaults, opts);
        this.listItems = $(this.opts.selectors.list, this.el);
        this.contents = $(this.opts.selectors.content, this.el);
        $(this.idSelector + ' ' + this.opts.selectors.list).attr('tabindex','-1');
        $(this.idSelector + ' .' + this.opts.classes.list).attr('tabindex','0');
        this.el.on('click', this.opts.selectors.list, { tabs: this }, this.clickHandler);
        // Adding Accessibility feature to navigate between tabs using left/right/up/down keys
        this.el.on('keydown', this.opts.selectors.list, { tabs: this }, this.keyPressHandler);
    }

    //Tab behaviour handling
    Tabs.prototype.clickHandler = function (event) {
        event.preventDefault();
        var tabs = event.data.tabs;
        var opts = tabs.opts;
        var $this = $(this);
        //Hide all tabs if a tab is already selected and clicked upon and toggle option is enabled
        if ($this.hasClass(opts.classes.list) && opts.toggle.hasToggle) {
             $this.removeClass(opts.classes.list).attr('aria-selected','false');
             tabs.contents.removeClass(opts.classes.content).attr('aria-hidden', 'true');
        }
        //If a tab other than the one opened is clicked, then hide existing tab and show the new tab
        else {
            tabs.listItems.removeClass(opts.classes.list).attr({'aria-selected':'false','tabindex':'-1'});
            $this.addClass(opts.classes.list).attr({'aria-selected':'true','tabindex':'0'});
            tabs.contents.removeClass(opts.classes.content).attr('aria-hidden', 'true');
            //content selector to be displayed is chosen from the
            //data-tab attribute of tab list element
            var selector = $this.attr('data-tab');
            $(selector).addClass(opts.classes.content).attr('aria-hidden', 'false');
        }
    };

    // Adding Accessibility feature to navigate between tabs using left/right/up/down keys
    Tabs.prototype.keyPressHandler = function (event) {
        if (event.altKey) {
            return;
        }
        var keyPressed = event.key || event.which;
        var keys = {
            left: 37,
            up: 38,
            right: 39,
            down: 40
        };
        //if left or right key is pressed
        if (keyPressed === keys.left || keyPressed === keys.right || keyPressed === keys.up || keyPressed === keys.down) {
            event.preventDefault();
            var tabs = event.data.tabs;
            var opts = tabs.opts;
            var $this = $(this).parent();
            var $selectedTab = tabs.el.find('.' + opts.classes.list);
            var $selectedContent = $('.' + opts.classes.content);
            var currentIndex = tabs.listItems.index($selectedTab);
            var $nextTab, nextContent;
            //left key is pressed go to the previous item
            if (keyPressed === keys.left || keyPressed === keys.up) {
                //if first item cycle to last item
                if (currentIndex === 0) {
                    $nextTab = tabs.listItems.last();
                } else {
                    $nextTab = tabs.listItems.eq(currentIndex - 1);
                }
            }
            //if right key is pressed go to next item
            if (keyPressed === keys.right || keyPressed === keys.down) {
                //if last item cycle over to first item
                if (currentIndex === tabs.listItems.length - 1) {
                    $nextTab = tabs.listItems.first();
                } else {
                    $nextTab = tabs.listItems.eq(currentIndex + 1);
                }
            }
            //hide existing tab and show the new tab
            $selectedTab.removeClass(opts.classes.list).attr({'aria-selected':'false','tabindex':'-1'});
            $selectedContent.removeClass(opts.classes.content).attr('aria-hidden', 'true');
            $nextTab.addClass(opts.classes.list).attr({'aria-selected':'true','tabindex':'0'}).focus();
            nextContent = $nextTab.attr('data-tab');
            $(nextContent).addClass(opts.classes.content).attr('aria-hidden', 'false');
            return;
        }
    };

    return Tabs;

});// module end

/* ============= How to use, call in javascript ====================
For default tab behavior you can just include the following code in your javascript:

$('.tab-block').each(function (i, el) {
    new Tabs(el);
});

=====================================

For custom behaviour:
You can set up various configurations to override defaults like so:
var tabConf = {
    classes: {
        list: 'tab-selected',
        content: 'tab-content-selected'
    }
};

var tabToggle = {
    toggle: {
        hasToggle: true
    }
};

$.extend(tabToggle, tabConf);

Then create tab for a particular element like so,

$('#tab-block-id').each(function (i, el) {
    new Tabs(el, tabToggle);
});
==================== END of instructions ========================= */