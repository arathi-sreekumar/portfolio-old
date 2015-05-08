define(['jquery'], function ($) {

    var defaults = {
        selectors: {
            section: '.toggle-section'                           //section that will be hidden/shown
        },
        icon: {
            classes: 'icon-chevron-down icon-chevron-up',         //icons that are going to change on the handle when toggling section
            handle: '.icon'                                //a handle to the element that needs changing of icons
        },
        text: {
            classes: 'toggle-text-hide',                          //text of the handle that will get toggled
            handle: '.toggle-text-handle'
        },
        settings: {
            hasIconToggle: true,
            hasTextToggle: true
        }
    };

    /**
    * Toggle a section
    *
    * @param {Element} input Object thats the handler
    * @param {opts} input json object that lists the custom options 
    * @return {Object ToggleSection} The reversed string
    */
    function ToggleSection (el, opts) {
        this.el = el instanceof $ ? el : $(el);
        this.opts = $.extend({}, defaults, opts);               //set options to defaults plus custom
        this.toggleHandle = this.el;                            // the toggle handle element, this is passed while initializing
        this.section = $(this.opts.selectors.section);          // section thats shown/hidden
        this.el.on('click', { toggleObject: this }, this.handler);  // click event handler which is defined in the prototype
    }

    //Tab behaviour handling
    ToggleSection.prototype.handler = function (event) {    //defining click event handling for a toggle section object
        event.preventDefault();
        var toggleObject = event.data.toggleObject;
        var $this = $(this);

        //Toggle icons for the handle when section is toggled
        toggleObject.toggleIcon($this);
        //Toggle handle text
        toggleObject.toggleText($this);
        //Toggle section
        toggleObject.toggleSection($this);
    };

    /*
     * Function to toggle the icon of the toggle handle if icon has toggle states
     * @param $element represents the toggle section handle
    */
    ToggleSection.prototype.toggleIcon = function ($element) {
        if (this.opts.settings.hasIconToggle) {
            $element.find(this.opts.text.handle).toggleClass(this.opts.text.classes);
        }
    };

    /*
     * Function to toggle the text of the toggle handle if text has toggle states
     * @param $element represents the toggle section handle
    */
    ToggleSection.prototype.toggleText = function ($element) {
        if (this.opts.settings.hasTextToggle) {
            $element.find(this.opts.icon.handle).toggleClass(this.opts.icon.classes);
        }
    };

    /*
     * Function to toggle the section associated with the toggle handle
     * Expected to be present immediately after the handle element as a sibling dom element
     * @param $element represents the toggle section handle
    */
    ToggleSection.prototype.toggleSection = function ($element) {
        $element.next(this.section).slideToggle();
    };

    return ToggleSection;

});


/* ============= How to use, call in javascript ====================
For default toggle behavior you can just include the following code in your javascript:
    new ToggleSection('.toggle-handle');

=====================================

For custom behaviour:
You can set up various configurations to override defaults like so:

var toggleIcon = {
                icon: {
                    classes: 'icon-plus icon-minus',
                    handle: 'icon'
                }
            }

Then create tab for a particular element like so,

new ToggleSection('.chapter-toggle', toggleIcon);

======= HTML markup required ===========
// An element which has a handler class which is used to create the Toggle object
<a href="#" class="js-toggle-handle">
// icon is optional and will have the icon handler name which by default is btn, 
// and which can be customized along with the icon class that needs to be displayed
// which by default can be either icon-chevron-up or icon-chevron down 
// or a custom value instead which is properly configured
    <i class="icon icon-plus"></i> 
    Title of the handle / section
 </a>
// And the section that needs to be hidden/shown - which SHOULD BE A SIBLING of the handler
// should have the class "toggle-section" and can be any html element
// display:none as inline style if you want this section to be hidden by default
 <div class="toggle-section" style="display:none">
    Lorem ipsum ...
 </div>

==================== END of instructions ========================= */
