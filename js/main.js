require([
    'jquery',
    'tab-acc-min',
    'toggle-section'
], function (
    //utils,
    $,
    Tabs,
    ToggleSection
) {

    'use strict';

    //rename this variable to project
    var MyProject = {

        tabs: function () {

            //For all tabs with default behaviour
            $('.js-tab-block').each(function (i, el) {
                new Tabs(el);
            });

            var tabConf = {
                selectors: {
                    list: '.sub-tab',
                    content: '.sub-tab-content'
                },
                classes: {
                    list: 'sub-tab-selected',
                    content: 'sub-tab-content-selected'
                }
            };

            //For all tabs with default behaviour
            $('.js-sub-tab-block').each(function (i, el) {
                new Tabs(el, tabConf);
            });
        },

        toggleSections: function () {
            new ToggleSection('.js-toggle-handle');
            var toggleIcon = {
                icon: {
                    classes: 'icon-plus icon-minus',
                    handle: '.icon'
                },
                text: {
                    classes: 'toggle-text-hide',
                    handle: '.toggle-text-handle'
                },
                settings: {
                    hasIconToggle: true,
                    hasTextToggle: true
                }
            };
            new ToggleSection('.js-chapter-toggle', toggleIcon);
            toggleIcon = {
                icon: {
                    classes: 'icon-chevron-right icon-chevron-up',
                    handle: '.icon'
                },
                text: {
                    classes: 'toggle-text-hide',
                    handle: '.toggle-text-handle'
                },
                settings: {
                    hasIconToggle: true,
                    hasTextToggle: true
                }
            };
            new ToggleSection('.js-metadata-show-more', toggleIcon);
        },

        initialize: function () {
            //initialize custom selects
            $('.custom-select').customSelect();
        }
    };

    $(function () {
        MyProject.tabs();
        MyProject.toggleSections();
    });
});
