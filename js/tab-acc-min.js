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
        this.opts = $.extend({}, defaults, opts);
        this.listItems = $(this.opts.selectors.list, this.el);
        this.contents = $(this.opts.selectors.content, this.el);
        this.el.on('click', this.opts.selectors.list, { tabs: this }, this.clickHandler);
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
            tabs.listItems.removeClass(opts.classes.list).attr({'aria-selected':'false'});
            $this.addClass(opts.classes.list).attr({'aria-selected':'true'});
            tabs.contents.removeClass(opts.classes.content).attr('aria-hidden', 'true');
            //content selector to be displayed is chosen from the 
            //data-tab attribute of tab list element
            var selector = $this.attr('data-tab'); 
            $(selector).addClass(opts.classes.content).attr('aria-hidden', 'false');
        }
    };

    return Tabs;

});

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