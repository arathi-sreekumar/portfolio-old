define(
[
    'tab-acc-full'
],
function( 
    Tabs 
){
    describe('Tabs Section', function () {
        //For all tabs with default behaviour
        var tabObj;
        $('.js-tab-block').each(function (i, el) {
            tabObj = new Tabs(el);
        });
        var key = {
            left: 37,
            up: 38,
            right: 39,
            down: 40
        };
        var currentTab = $('.' + tabObj.opts.selected.tab);
        var currentIndex = tabObj.listItems.index(currentTab);
        var totalTabs = tabObj.listItems.length;

        beforeEach(function () {
            tabObj.hideTabs();
            tabObj.showSelectedTab(currentTab);
        });

        it('tab should exist', function() {
            expect(tabObj.el).not.toBeUndefined();
        });
        it('tab options should exist', function() {
            expect(tabObj.opts).not.toBeUndefined();
        });
        it('tab list should exist', function() {
            expect(tabObj.listItems).not.toBeUndefined();
        });
        it('tab contents should exist', function() {
            expect(tabObj.contents).not.toBeUndefined();
        });
        if (tabObj.opts.toggle.hasToggle) {
            it('hasToggle so should hide the current tab', function() {
                tabObj.hideCurrentTab(currentTab);
                var findSelectedTab = tabObj.el.find('.' + tabObj.opts.selected.tab).length;
                expect(findSelectedTab).not.toBeGreaterThan(0);
            });
        } else {
            it('hasToggle is false so should not hide the current tab', function() {
                tabObj.hideCurrentTab(currentTab);
                var findSelectedTab = tabObj.el.find('.' + tabObj.opts.selected.tab).length;
                expect(findSelectedTab).toEqual(1);
            });
        }
        describe('show tab ' + (currentIndex + 1) + ' when show function is called',function (){
            tabObj.showSelectedTab(currentTab);
            var content = $(currentTab.attr('data-tab'));
      
            it('Selected tab should have a selected class', function() {
                var isSelected = currentTab.hasClass(tabObj.opts.selected.tab);
                expect(isSelected).toBeTruthy();
            });
            it('Selected tab should have tabindex 0', function() {
                var tabindexValue = currentTab.attr('tabindex');
                expect(tabindexValue).toEqual(0);
            });
            it('Selected tab should have aria-selected attribute as true', function() {
                var ariaSelected = currentTab.attr('aria-selected');
                expect(ariaSelected).toBeTruthy();
            });
            it('Selected tabs content should have selected class', function() {
                var isContentSelected = content.hasClass(tabObj.opts.selected.content);
                expect(isContentSelected).toBeTruthy();
            });
            it('Selected tab content should have aria-hidden as false', function() {
                var isContentHidden = content.attr('aria-hidden');
                expect(isContentHidden).toEqual('false');
            });
        });

    });
});