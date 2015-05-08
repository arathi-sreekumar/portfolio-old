define(
[
    'toggle-section'
],
function( 
    ToggleSection 
){

    beforeEach(function () {
      jasmine.addMatchers({
        toHaveToggled: function () {
          return {
            compare: function (oldClasses, current) {
              var newClasses = current.handle.attr('class').split(' ');
              console.log(newClasses);
              var allClasses = current.allClasses;
              var result = true;
              for(i = 0; i < newClasses.length; i++) {
                if (newClasses[i] != 'icon' && allClasses.indexOf(newClasses[i]) >= 0  && oldClasses.indexOf(newClasses[i]) >= 0) {
                  result = false;
                  break;
                }
              }

              return {
                pass: result
              }

            }
          };
        }
      });
    });

    describe('Toggle Section', function () {

        var project;
        var ts = new ToggleSection('.js-toggle-handle-spec'), 
            textObj = {
                handle: $(ts.opts.text.handle),
                allClasses: ts.opts.text.classes
            },
            textClassesOld = textObj.handle.attr('class'),
            iconObj = {
                handle: $(ts.opts.icon.handle),
                allClasses: ts.opts.icon.classes
            },
            iconClassesOld = iconObj.handle.attr('class'),
            $sectionHandle = ts.section,
            sectionStateOld = $sectionHandle.css('display'),
            sectionStateNew;

            ts.el.trigger('click');

        it('should be able to link to a section', function() {
            expect(ts.el).not.toBeUndefined();
        });

        it('should toggle the icon',function() {
            if (ts.opts.settings.hasIconToggle) {
                expect(iconClassesOld).toHaveToggled(iconObj);
            }
        });

        it('should toggle the text',function() {
            if (ts.opts.settings.hasTextToggle) {
                expect(textClassesOld).toHaveToggled(textObj);
            }
        });

        describe('toggling the section (check after an interval)', function() {
            beforeEach(function(done) {
                setTimeout(function() {
                  done();
                }, 500);
            });
            it('should toggle the section', function(done) {
                sectionStateNew = $sectionHandle.css('display');
                console.log(sectionStateNew, sectionStateOld);
                expect(sectionStateNew).not.toEqual(sectionStateOld);
                done();
            });
        });

    });
});