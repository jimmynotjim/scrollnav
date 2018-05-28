(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.scrollNav = factory());
}(this, (function () {

function extend(defaults, options) {
    var extended = {};
    var prop;
    for (prop in defaults) {
        if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
            extended[prop] = defaults[prop];
        }
    }
    for (prop in options) {
        if (Object.prototype.hasOwnProperty.call(options, prop)) {
            extended[prop] = options[prop];
        }
    }
    return extended;
}



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVuZC5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsZUFBZSxTQUFTLE9BQU8sUUFBVSxFQUFBLFNBQVM7SUFDaEQsS0FBQSxDQUFNLFdBQVc7SUFDakIsR0FBQSxDQUFJO0lBRUosS0FBSyxRQUFRLFVBQVU7UUFDckIsSUFBSSxNQUFBLENBQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxVQUFVLE9BQU87WUFDeEQsUUFBQSxDQUFTLEtBQVQsQ0FBQSxDQUFBLENBQWlCLFFBQUEsQ0FBUztRQUNoQztJQUNBO0lBRUUsS0FBSyxRQUFRLFNBQVM7UUFDcEIsSUFBSSxNQUFBLENBQU8sU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxTQUFTLE9BQU87WUFDdkQsUUFBQSxDQUFTLEtBQVQsQ0FBQSxDQUFBLENBQWlCLE9BQUEsQ0FBUTtRQUMvQjtJQUNBO0lBRUUsT0FBTztBQUNUOztBQW5CQSIsImZpbGUiOiJleHRlbmQuanMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiLyogQm9ycm93ZWQgZnJvbSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9jZmVyZGluYW5kaS80ZjhhMGUxNzkyMWM1YjQ2ZTZjNCAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpIHtcbiAgY29uc3QgZXh0ZW5kZWQgPSB7fTtcbiAgbGV0IHByb3A7XG5cbiAgZm9yIChwcm9wIGluIGRlZmF1bHRzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkZWZhdWx0cywgcHJvcCkpIHtcbiAgICAgIGV4dGVuZGVkW3Byb3BdID0gZGVmYXVsdHNbcHJvcF07XG4gICAgfVxuICB9XG5cbiAgZm9yIChwcm9wIGluIG9wdGlvbnMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9wdGlvbnMsIHByb3ApKSB7XG4gICAgICBleHRlbmRlZFtwcm9wXSA9IG9wdGlvbnNbcHJvcF07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGV4dGVuZGVkO1xufVxuIl19

function getOrSetID(elem, setID) {
    if (typeof elem !== 'object') {
        return Promise.reject(new Error('First argument must be an object'));
    }
    var id = elem.id;
    if (!id) {
        if (typeof setID !== 'string') {
            return Promise.reject(new Error('Second argument must be a string'));
        }
        id = setID;
        elem.id = id;
    }
    return id;
}



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldE9yU2V0SUQuanMob3JpZ2luYWwpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWUsU0FBUyxXQUFXLElBQU0sRUFBQSxPQUFPO0lBQzlDLElBQUksTUFBQSxDQUFPLElBQVAsQ0FBQSxHQUFBLENBQWdCLFVBQVU7UUFDNUIsT0FBTyxPQUFBLENBQVEsTUFBUixDQUFlLElBQUksS0FBSixDQUFVO0lBQ3BDO0lBRUUsR0FBQSxDQUFJLEtBQUssSUFBQSxDQUFLO0lBRWQsSUFBSSxDQUFDLElBQUk7UUFDUCxJQUFJLE1BQUEsQ0FBTyxLQUFQLENBQUEsR0FBQSxDQUFpQixVQUFVO1lBQzdCLE9BQU8sT0FBQSxDQUFRLE1BQVIsQ0FBZSxJQUFJLEtBQUosQ0FBVTtRQUN0QztRQUVJLEVBQUEsQ0FBQSxDQUFBLENBQUs7UUFDTCxJQUFBLENBQUssRUFBTCxDQUFBLENBQUEsQ0FBVTtJQUNkO0lBQ0UsT0FBTztBQUNUOztBQWhCQSIsImZpbGUiOiJnZXRPclNldElELmpzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9yU2V0SUQoZWxlbSwgc2V0SUQpIHtcbiAgaWYgKHR5cGVvZiBlbGVtICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYW4gb2JqZWN0JykpO1xuICB9XG5cbiAgbGV0IGlkID0gZWxlbS5pZDtcblxuICBpZiAoIWlkKSB7XG4gICAgaWYgKHR5cGVvZiBzZXRJRCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1NlY29uZCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJykpO1xuICAgIH1cblxuICAgIGlkID0gc2V0SUQ7XG4gICAgZWxlbS5pZCA9IGlkO1xuICB9XG4gIHJldHVybiBpZDtcbn1cbiJdfQ==

function getYPosition(elem, parent) {
    if (typeof elem !== 'object') {
        return Promise.reject(new Error('First argument must be an object'));
    }
    parent = parent || document.body;
    if (typeof parent !== 'object') {
        return Promise.reject(new Error('Second argument must be an object'));
    }
    var bodyRect = parent.getBoundingClientRect();
    var elemRect = elem.getBoundingClientRect();
    return elemRect.top - bodyRect.top;
}



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldFlQb3NpdGlvbi5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxTQUFTLGFBQWEsSUFBTSxFQUFBLFFBQVE7SUFDakQsSUFBSSxNQUFBLENBQU8sSUFBUCxDQUFBLEdBQUEsQ0FBZ0IsVUFBVTtRQUM1QixPQUFPLE9BQUEsQ0FBUSxNQUFSLENBQWUsSUFBSSxLQUFKLENBQVU7SUFDcEM7SUFFRSxNQUFBLENBQUEsQ0FBQSxDQUFTLE1BQUEsQ0FBQSxFQUFBLENBQVUsUUFBQSxDQUFTO0lBQzVCLElBQUksTUFBQSxDQUFPLE1BQVAsQ0FBQSxHQUFBLENBQWtCLFVBQVU7UUFDOUIsT0FBTyxPQUFBLENBQVEsTUFBUixDQUFlLElBQUksS0FBSixDQUFVO0lBQ3BDO0lBRUUsS0FBQSxDQUFNLFdBQVcsTUFBQSxDQUFPLHFCQUFQO0lBQ2pCLEtBQUEsQ0FBTSxXQUFXLElBQUEsQ0FBSyxxQkFBTDtJQUVqQixPQUFPLFFBQUEsQ0FBUyxHQUFULENBQUEsQ0FBQSxDQUFlLFFBQUEsQ0FBUztBQUNqQzs7QUFkQSIsImZpbGUiOiJnZXRZUG9zaXRpb24uanMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0WVBvc2l0aW9uKGVsZW0sIHBhcmVudCkge1xuICBpZiAodHlwZW9mIGVsZW0gIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhbiBvYmplY3QnKSk7XG4gIH1cblxuICBwYXJlbnQgPSBwYXJlbnQgfHwgZG9jdW1lbnQuYm9keTtcbiAgaWYgKHR5cGVvZiBwYXJlbnQgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignU2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYW4gb2JqZWN0JykpO1xuICB9XG5cbiAgY29uc3QgYm9keVJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IGVsZW1SZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICByZXR1cm4gZWxlbVJlY3QudG9wIC0gYm9keVJlY3QudG9wO1xufVxuIl19

function nextUntil(elem, selector, filter) {
    var siblings = [];
    elem = elem.nextElementSibling;
    while (elem) {
        if (elem.matches(selector)) 
            { break; }
        if (filter && !elem.matches(filter)) {
            elem = elem.nextElementSibling;
            continue;
        }
        siblings.push(elem);
        elem = elem.nextElementSibling;
    }
    return siblings;
}



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5leHRVbnRpbC5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsZUFBZSxTQUFTLFVBQVUsSUFBTSxFQUFBLFFBQVUsRUFBQSxRQUFRO0lBQ3hELEdBQUEsQ0FBSSxXQUFXO0lBRWYsSUFBQSxDQUFBLENBQUEsQ0FBTyxJQUFBLENBQUs7SUFFWixPQUFPLE1BQU07UUFDWCxJQUFJLElBQUEsQ0FBSyxPQUFMLENBQWE7WUFBVztRQUU1QixJQUFJLE1BQUEsQ0FBQSxFQUFBLENBQVUsQ0FBQyxJQUFBLENBQUssT0FBTCxDQUFhLFNBQVM7WUFDbkMsSUFBQSxDQUFBLENBQUEsQ0FBTyxJQUFBLENBQUs7WUFDWjtRQUNOO1FBRUksUUFBQSxDQUFTLElBQVQsQ0FBYztRQUVkLElBQUEsQ0FBQSxDQUFBLENBQU8sSUFBQSxDQUFLO0lBQ2hCO0lBRUUsT0FBTztBQUNUOztBQXJCQSIsImZpbGUiOiJuZXh0VW50aWwuanMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiLyogQm9ycm93ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vY2ZlcmRpbmFuZGkvbmV4dFVudGlsICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5leHRVbnRpbChlbGVtLCBzZWxlY3RvciwgZmlsdGVyKSB7XG4gIHZhciBzaWJsaW5ncyA9IFtdO1xuXG4gIGVsZW0gPSBlbGVtLm5leHRFbGVtZW50U2libGluZztcblxuICB3aGlsZSAoZWxlbSkge1xuICAgIGlmIChlbGVtLm1hdGNoZXMoc2VsZWN0b3IpKSBicmVhaztcblxuICAgIGlmIChmaWx0ZXIgJiYgIWVsZW0ubWF0Y2hlcyhmaWx0ZXIpKSB7XG4gICAgICBlbGVtID0gZWxlbS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBzaWJsaW5ncy5wdXNoKGVsZW0pO1xuXG4gICAgZWxlbSA9IGVsZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICB9XG5cbiAgcmV0dXJuIHNpYmxpbmdzO1xufVxuIl19

function populateSectionData(sections, settings, prefix) {
    if ( prefix === void 0 ) prefix = 'scroll-nav';

    var sectionData = [];
    prefix = prefix + '__';
    sections.forEach(function (elem, i) {
        var subSectionData = [];
        var id = getOrSetID(elem, prefix + (i + 1));
        if (settings.subSections && elem.matches(settings.sections)) {
            var subSectionDom = nextUntil(elem, settings.sections, settings.subSections);
            subSectionData = populateSectionData(subSectionDom, settings, id);
        }
        sectionData.push({
            id: id,
            text: elem.innerText || elem.textContent,
            offsetTop: getYPosition(elem),
            subSections: subSectionData
        });
    });
    return sectionData;
}



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVsYXRlU2VjdGlvbkRhdGEuanMob3JpZ2luYWwpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sZUFBZTtBQUV0QixlQUFlLFNBQVMsb0JBQ3RCLFFBQ0EsRUFBQSxRQUNBLEVBQUEsTUFBQSxHQUFTLGNBQ1Q7SUFDQSxLQUFBLENBQU0sY0FBYztJQUNwQixNQUFBLENBQUEsQ0FBQSxDQUFTLE1BQUEsQ0FBQSxDQUFBLENBQVM7SUFFbEIsUUFBQSxDQUFTLE9BQVQsRUFBa0IsSUFBTSxFQUFBLEdBQVAsR0FBYTtRQUM1QixHQUFBLENBQUksaUJBQWlCO1FBQ3JCLEtBQUEsQ0FBTSxLQUFLLFVBQUEsQ0FBVyxNQUFNLE1BQUEsQ0FBQSxDQUFBLEVBQVUsQ0FBQSxDQUFBLENBQUEsQ0FBSTtRQUUxQyxJQUFJLFFBQUEsQ0FBUyxXQUFULENBQUEsRUFBQSxDQUF3QixJQUFBLENBQUssT0FBTCxDQUFhLFFBQUEsQ0FBUyxXQUFXO1lBQzNELEtBQUEsQ0FBTSxnQkFBZ0IsU0FBQSxDQUNwQixNQUNBLFFBQUEsQ0FBUyxVQUNULFFBQUEsQ0FBUztZQUVYLGNBQUEsQ0FBQSxDQUFBLENBQWlCLG1CQUFBLENBQW9CLGVBQWUsVUFBVTtRQUNwRTtRQUVJLFdBQUEsQ0FBWSxJQUFaLENBQWlCO1lBQ2YsSUFBSSxFQURXLENBQUE7WUFFZixNQUFNLElBQUEsQ0FBSyxTQUFMLENBQUEsRUFBQSxDQUFrQixJQUFBLENBQUssV0FGZCxDQUFBO1lBR2YsV0FBVyxZQUFBLENBQWEsS0FIVCxDQUFBO1lBSWYsYUFBYTs7SUFFbkI7SUFFRSxPQUFPO0FBQ1Q7O0FBbENBIiwiZmlsZSI6InBvcHVsYXRlU2VjdGlvbkRhdGEuanMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldE9yU2V0SUQgZnJvbSAnLi9nZXRPclNldElEJztcbmltcG9ydCBnZXRZUG9zaXRpb24gZnJvbSAnLi9nZXRZUG9zaXRpb24nO1xuaW1wb3J0IG5leHRVbnRpbCBmcm9tICcuL25leHRVbnRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBvcHVsYXRlU2VjdGlvbkRhdGEoXG4gIHNlY3Rpb25zLFxuICBzZXR0aW5ncyxcbiAgcHJlZml4ID0gJ3Njcm9sbC1uYXYnXG4pIHtcbiAgY29uc3Qgc2VjdGlvbkRhdGEgPSBbXTtcbiAgcHJlZml4ID0gcHJlZml4ICsgJ19fJztcblxuICBzZWN0aW9ucy5mb3JFYWNoKChlbGVtLCBpKSA9PiB7XG4gICAgbGV0IHN1YlNlY3Rpb25EYXRhID0gW107XG4gICAgY29uc3QgaWQgPSBnZXRPclNldElEKGVsZW0sIHByZWZpeCArIChpICsgMSkpO1xuXG4gICAgaWYgKHNldHRpbmdzLnN1YlNlY3Rpb25zICYmIGVsZW0ubWF0Y2hlcyhzZXR0aW5ncy5zZWN0aW9ucykpIHtcbiAgICAgIGNvbnN0IHN1YlNlY3Rpb25Eb20gPSBuZXh0VW50aWwoXG4gICAgICAgIGVsZW0sXG4gICAgICAgIHNldHRpbmdzLnNlY3Rpb25zLFxuICAgICAgICBzZXR0aW5ncy5zdWJTZWN0aW9uc1xuICAgICAgKTtcbiAgICAgIHN1YlNlY3Rpb25EYXRhID0gcG9wdWxhdGVTZWN0aW9uRGF0YShzdWJTZWN0aW9uRG9tLCBzZXR0aW5ncywgaWQpO1xuICAgIH1cblxuICAgIHNlY3Rpb25EYXRhLnB1c2goe1xuICAgICAgaWQ6IGlkLFxuICAgICAgdGV4dDogZWxlbS5pbm5lclRleHQgfHwgZWxlbS50ZXh0Q29udGVudCxcbiAgICAgIG9mZnNldFRvcDogZ2V0WVBvc2l0aW9uKGVsZW0pLFxuICAgICAgc3ViU2VjdGlvbnM6IHN1YlNlY3Rpb25EYXRhXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBzZWN0aW9uRGF0YTtcbn1cbiJdfQ==

function createList(data, isSubList) {
    if ( isSubList === void 0 ) isSubList = false;

    var suffix = isSubList ? '__sub-' : '__';
    var baseClass = 'scroll-nav' + suffix;
    var itemsMarkup = "\n    " + (data.map(function (item) { return ("<li class=\"" + baseClass + "item\" data-sn-section=\"" + (item.id) + "\">\n            <a class=\"" + baseClass + "link\" href=\"#" + (item.id) + "\">" + (item.text) + "</a>\n            " + (item.subSections && item.subSections.length ? ("" + (createList(item.subSections, true))) : '') + "\n          </li>"); }).join('')) + "\n  ";
    var list = "\n    <ol class=\"" + baseClass + "list\">\n      " + itemsMarkup + "\n    </ol>\n  ";
    return list;
}



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZUxpc3QuanMob3JpZ2luYWwpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWUsU0FBUyxXQUFXLElBQU0sRUFBQSxTQUFBLEdBQVksT0FBTztJQUMxRCxLQUFBLENBQU0sU0FBUyxTQUFBLEdBQVksV0FBVztJQUN0QyxLQUFBLENBQU0sWUFBWSxZQUFBLENBQUEsQ0FBQSxDQUFlO0lBRWpDLEtBQUEsQ0FBTSxjQUFjLFFBQ2hCLElBQUEsQ0FDQyxHQURELENBRUUsSUFBQSxJQUNFLGNBQWMsbUNBQW1DLElBQUEsQ0FBSyw4QkFDeEMseUJBQXlCLElBQUEsQ0FBSyxPQUFPLElBQUEsQ0FBSyx3QkFFcEQsSUFBQSxDQUFLLFdBQUwsQ0FBQSxFQUFBLENBQW9CLElBQUEsQ0FBSyxXQUFMLENBQWlCLE1BQXJDLEdBQ0ksR0FBRyxVQUFBLENBQVcsSUFBQSxDQUFLLGFBQWEsTUFBaEMsSUFDQSxtQkFMUixFQUhKLENBWUMsSUFaRCxDQVlNLE9BYlU7SUFnQnBCLEtBQUEsQ0FBTSxPQUFPLG1CQUNFLHlCQUNULHlCQUZPO0lBTWIsT0FBTztBQUNUOztBQTNCQSIsImZpbGUiOiJjcmVhdGVMaXN0LmpzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUxpc3QoZGF0YSwgaXNTdWJMaXN0ID0gZmFsc2UpIHtcbiAgY29uc3Qgc3VmZml4ID0gaXNTdWJMaXN0ID8gJ19fc3ViLScgOiAnX18nO1xuICBjb25zdCBiYXNlQ2xhc3MgPSAnc2Nyb2xsLW5hdicgKyBzdWZmaXg7XG5cbiAgY29uc3QgaXRlbXNNYXJrdXAgPSBgXG4gICAgJHtkYXRhXG4gICAgICAubWFwKFxuICAgICAgICBpdGVtID0+XG4gICAgICAgICAgYDxsaSBjbGFzcz1cIiR7YmFzZUNsYXNzfWl0ZW1cIiBkYXRhLXNuLXNlY3Rpb249XCIke2l0ZW0uaWR9XCI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cIiR7YmFzZUNsYXNzfWxpbmtcIiBocmVmPVwiIyR7aXRlbS5pZH1cIj4ke2l0ZW0udGV4dH08L2E+XG4gICAgICAgICAgICAke1xuICAgICAgICAgICAgICBpdGVtLnN1YlNlY3Rpb25zICYmIGl0ZW0uc3ViU2VjdGlvbnMubGVuZ3RoXG4gICAgICAgICAgICAgICAgPyBgJHtjcmVhdGVMaXN0KGl0ZW0uc3ViU2VjdGlvbnMsIHRydWUpfWBcbiAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9saT5gXG4gICAgICApXG4gICAgICAuam9pbignJyl9XG4gIGA7XG5cbiAgY29uc3QgbGlzdCA9IGBcbiAgICA8b2wgY2xhc3M9XCIke2Jhc2VDbGFzc31saXN0XCI+XG4gICAgICAke2l0ZW1zTWFya3VwfVxuICAgIDwvb2w+XG4gIGA7XG5cbiAgcmV0dXJuIGxpc3Q7XG59XG4iXX0=

function createNav(data) {
    var nav = document.createElement('nav');
    nav.className = 'scroll-nav';
    nav.innerHTML = createList(data);
    return nav;
}



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZU5hdi5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxnQkFBZ0I7QUFFdkIsZUFBZSxTQUFTLFVBQVUsTUFBTTtJQUN0QyxLQUFBLENBQU0sTUFBTSxRQUFBLENBQVMsYUFBVCxDQUF1QjtJQUNuQyxHQUFBLENBQUksU0FBSixDQUFBLENBQUEsQ0FBZ0I7SUFDaEIsR0FBQSxDQUFJLFNBQUosQ0FBQSxDQUFBLENBQWdCLFVBQUEsQ0FBVztJQUUzQixPQUFPO0FBQ1Q7O0FBUkEiLCJmaWxlIjoiY3JlYXRlTmF2LmpzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVMaXN0IGZyb20gJy4vY3JlYXRlTGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU5hdihkYXRhKSB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBuYXYuY2xhc3NOYW1lID0gJ3Njcm9sbC1uYXYnO1xuICBuYXYuaW5uZXJIVE1MID0gY3JlYXRlTGlzdChkYXRhKTtcblxuICByZXR1cm4gbmF2O1xufVxuIl19

function insertNav(scrollNav) {
    var target = scrollNav.settings.insertTarget;
    var location = scrollNav.settings.insertLocation;
    if (location === 'append') {
        target.appendChild(scrollNav.nav);
    } else if (location === 'prepend') {
        target.insertBefore(scrollNav.nav, target.firstChild);
    } else if (location === 'before') {
        target.parentNode.insertBefore(scrollNav.nav, target);
    } else if (location === 'after') {
        target.parentNode.insertBefore(scrollNav.nav, target.nextSibling);
    }
}



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc2VydE5hdi5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxTQUFTLFVBQVUsV0FBVztJQUMzQyxLQUFBLENBQU0sU0FBUyxTQUFBLENBQVUsUUFBVixDQUFtQjtJQUNsQyxLQUFBLENBQU0sV0FBVyxTQUFBLENBQVUsUUFBVixDQUFtQjtJQUVwQyxJQUFJLFFBQUEsQ0FBQSxHQUFBLENBQWEsVUFBVTtRQUN6QixNQUFBLENBQU8sV0FBUCxDQUFtQixTQUFBLENBQVU7SUFDakMsT0FBUyxJQUFJLFFBQUEsQ0FBQSxHQUFBLENBQWEsV0FBVztRQUNqQyxNQUFBLENBQU8sWUFBUCxDQUFvQixTQUFBLENBQVUsS0FBSyxNQUFBLENBQU87SUFDOUMsT0FBUyxJQUFJLFFBQUEsQ0FBQSxHQUFBLENBQWEsVUFBVTtRQUNoQyxNQUFBLENBQU8sVUFBUCxDQUFrQixZQUFsQixDQUErQixTQUFBLENBQVUsS0FBSztJQUNsRCxPQUFTLElBQUksUUFBQSxDQUFBLEdBQUEsQ0FBYSxTQUFTO1FBQy9CLE1BQUEsQ0FBTyxVQUFQLENBQWtCLFlBQWxCLENBQStCLFNBQUEsQ0FBVSxLQUFLLE1BQUEsQ0FBTztJQUN6RDtBQUNBOztBQWJBIiwiZmlsZSI6Imluc2VydE5hdi5qcyhvcmlnaW5hbCkiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnNlcnROYXYoc2Nyb2xsTmF2KSB7XG4gIGNvbnN0IHRhcmdldCA9IHNjcm9sbE5hdi5zZXR0aW5ncy5pbnNlcnRUYXJnZXQ7XG4gIGNvbnN0IGxvY2F0aW9uID0gc2Nyb2xsTmF2LnNldHRpbmdzLmluc2VydExvY2F0aW9uO1xuXG4gIGlmIChsb2NhdGlvbiA9PT0gJ2FwcGVuZCcpIHtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc2Nyb2xsTmF2Lm5hdik7XG4gIH0gZWxzZSBpZiAobG9jYXRpb24gPT09ICdwcmVwZW5kJykge1xuICAgIHRhcmdldC5pbnNlcnRCZWZvcmUoc2Nyb2xsTmF2Lm5hdiwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuICB9IGVsc2UgaWYgKGxvY2F0aW9uID09PSAnYmVmb3JlJykge1xuICAgIHRhcmdldC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzY3JvbGxOYXYubmF2LCB0YXJnZXQpO1xuICB9IGVsc2UgaWYgKGxvY2F0aW9uID09PSAnYWZ0ZXInKSB7XG4gICAgdGFyZ2V0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNjcm9sbE5hdi5uYXYsIHRhcmdldC5uZXh0U2libGluZyk7XG4gIH1cbn1cbiJdfQ==

function updatePositionData(data) {
    data.forEach(function (section) {
        var sectionDom = document.querySelector(("#" + (section.id)));
        section.offsetTop = getYPosition(sectionDom);
        if (section.subSections.length) {
            section.subSections = updatePositionData(section.subSections);
        }
    });
    return data;
}



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZVBvc2l0aW9uRGF0YS5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxrQkFBa0I7QUFFekIsZUFBZSxTQUFTLG1CQUFtQixNQUFNO0lBQy9DLElBQUEsQ0FBSyxPQUFMLENBQWEsT0FBQSxJQUFXO1FBQ3RCLEtBQUEsQ0FBTSxhQUFhLFFBQUEsQ0FBUyxhQUFULENBQXVCLElBQUksT0FBQSxDQUFRLEdBQVo7UUFDMUMsT0FBQSxDQUFRLFNBQVIsQ0FBQSxDQUFBLENBQW9CLFlBQUEsQ0FBYTtRQUVqQyxJQUFJLE9BQUEsQ0FBUSxXQUFSLENBQW9CLFFBQVE7WUFDOUIsT0FBQSxDQUFRLFdBQVIsQ0FBQSxDQUFBLENBQXNCLGtCQUFBLENBQW1CLE9BQUEsQ0FBUTtRQUN2RDtJQUNBO0lBRUUsT0FBTztBQUNUOztBQWJBIiwiZmlsZSI6InVwZGF0ZVBvc2l0aW9uRGF0YS5qcyhvcmlnaW5hbCkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0WVBvc2l0aW9uIGZyb20gJy4vZ2V0WVBvc2l0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlUG9zaXRpb25EYXRhKGRhdGEpIHtcbiAgZGF0YS5mb3JFYWNoKHNlY3Rpb24gPT4ge1xuICAgIGNvbnN0IHNlY3Rpb25Eb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtzZWN0aW9uLmlkfWApO1xuICAgIHNlY3Rpb24ub2Zmc2V0VG9wID0gZ2V0WVBvc2l0aW9uKHNlY3Rpb25Eb20pO1xuXG4gICAgaWYgKHNlY3Rpb24uc3ViU2VjdGlvbnMubGVuZ3RoKSB7XG4gICAgICBzZWN0aW9uLnN1YlNlY3Rpb25zID0gdXBkYXRlUG9zaXRpb25EYXRhKHNlY3Rpb24uc3ViU2VjdGlvbnMpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iXX0=

function insertVisualDebugger() {
    var snDebugger = document.createElement('div');
    snDebugger.className = 'snDebugger';
    snDebugger.setAttribute('style', "\n      position: fixed;\n      top: 40%;\n      height: 0px;\n      border-bottom:5px solid red;\n      border-top: 5px solid blue;\n      width: 100%;\n      opacity: .5;\n      pointer-events: none;\n    ");
    document.body.appendChild(snDebugger);
}



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc2VydFZpc3VhbERlYnVnZ2VyLmpzKG9yaWdpbmFsKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlLFNBQVMsdUJBQXVCO0lBQzdDLEtBQUEsQ0FBTSxhQUFhLFFBQUEsQ0FBUyxhQUFULENBQXVCO0lBQzFDLFVBQUEsQ0FBVyxTQUFYLENBQUEsQ0FBQSxDQUF1QjtJQUV2QixVQUFBLENBQVcsWUFBWCxDQUNFLFNBQ0EsdU1BQUE7SUFZRixRQUFBLENBQVMsSUFBVCxDQUFjLFdBQWQsQ0FBMEI7QUFDNUI7O0FBbkJBIiwiZmlsZSI6Imluc2VydFZpc3VhbERlYnVnZ2VyLmpzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluc2VydFZpc3VhbERlYnVnZ2VyKCkge1xuICBjb25zdCBzbkRlYnVnZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNuRGVidWdnZXIuY2xhc3NOYW1lID0gJ3NuRGVidWdnZXInO1xuXG4gIHNuRGVidWdnZXIuc2V0QXR0cmlidXRlKFxuICAgICdzdHlsZScsXG4gICAgYFxuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiA0MCU7XG4gICAgICBoZWlnaHQ6IDBweDtcbiAgICAgIGJvcmRlci1ib3R0b206NXB4IHNvbGlkIHJlZDtcbiAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCBibHVlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBvcGFjaXR5OiAuNTtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGBcbiAgKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNuRGVidWdnZXIpO1xufVxuIl19

function getTargetYPosition(target, data) {
    var id = target.getAttribute('href');
    if (id.charAt(0) === '#') {
        id = id.substr(1);
    }
    var targetSection = filterData(data, id);
    return targetSection.offsetTop;
}

function filterData(data, id) {
    var targetSection;
    data.forEach(function (section) {
        if (section.id === id) {
            targetSection = section;
        }
        if (section.subSections && targetSection === undefined) {
            targetSection = filterData(section.subSections, id);
        }
    });
    return targetSection;
}



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldFRhcmdldFlQb3NpdGlvbi5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxTQUFTLG1CQUFtQixNQUFRLEVBQUEsTUFBTTtJQUN2RCxHQUFBLENBQUksS0FBSyxNQUFBLENBQU8sWUFBUCxDQUFvQjtJQUM3QixJQUFJLEVBQUEsQ0FBRyxNQUFILENBQVUsRUFBVixDQUFBLEdBQUEsQ0FBaUIsS0FBSztRQUN4QixFQUFBLENBQUEsQ0FBQSxDQUFLLEVBQUEsQ0FBRyxNQUFILENBQVU7SUFDbkI7SUFFRSxLQUFBLENBQU0sZ0JBQWdCLFVBQUEsQ0FBVyxNQUFNO0lBRXZDLE9BQU8sYUFBQSxDQUFjO0FBQ3ZCOztBQUVBLFNBQVMsV0FBVyxJQUFNLEVBQUEsSUFBSTtJQUM1QixHQUFBLENBQUk7SUFFSixJQUFBLENBQUssT0FBTCxDQUFhLE9BQUEsSUFBVztRQUN0QixJQUFJLE9BQUEsQ0FBUSxFQUFSLENBQUEsR0FBQSxDQUFlLElBQUk7WUFDckIsYUFBQSxDQUFBLENBQUEsQ0FBZ0I7UUFDdEI7UUFFSSxJQUFJLE9BQUEsQ0FBUSxXQUFSLENBQUEsRUFBQSxDQUF1QixhQUFBLENBQUEsR0FBQSxDQUFrQixXQUFXO1lBQ3RELGFBQUEsQ0FBQSxDQUFBLENBQWdCLFVBQUEsQ0FBVyxPQUFBLENBQVEsYUFBYTtRQUN0RDtJQUNBO0lBRUUsT0FBTztBQUNUOztBQXpCQSIsImZpbGUiOiJnZXRUYXJnZXRZUG9zaXRpb24uanMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGFyZ2V0WVBvc2l0aW9uKHRhcmdldCwgZGF0YSkge1xuICBsZXQgaWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gIGlmIChpZC5jaGFyQXQoMCkgPT09ICcjJykge1xuICAgIGlkID0gaWQuc3Vic3RyKDEpO1xuICB9XG5cbiAgY29uc3QgdGFyZ2V0U2VjdGlvbiA9IGZpbHRlckRhdGEoZGF0YSwgaWQpO1xuXG4gIHJldHVybiB0YXJnZXRTZWN0aW9uLm9mZnNldFRvcDtcbn1cblxuZnVuY3Rpb24gZmlsdGVyRGF0YShkYXRhLCBpZCkge1xuICBsZXQgdGFyZ2V0U2VjdGlvbjtcblxuICBkYXRhLmZvckVhY2goc2VjdGlvbiA9PiB7XG4gICAgaWYgKHNlY3Rpb24uaWQgPT09IGlkKSB7XG4gICAgICB0YXJnZXRTZWN0aW9uID0gc2VjdGlvbjtcbiAgICB9XG5cbiAgICBpZiAoc2VjdGlvbi5zdWJTZWN0aW9ucyAmJiB0YXJnZXRTZWN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldFNlY3Rpb24gPSBmaWx0ZXJEYXRhKHNlY3Rpb24uc3ViU2VjdGlvbnMsIGlkKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0YXJnZXRTZWN0aW9uO1xufVxuIl19

function calculateScrollDuration(distance) {
    var halfDistance = Math.abs(distance / 2);
    return Math.min(Math.max(halfDistance, 250), 1200);
}



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGN1bGF0ZVNjcm9sbER1cmF0aW9uLmpzKG9yaWdpbmFsKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlLFNBQVMsd0JBQXdCLFVBQVU7SUFDeEQsS0FBQSxDQUFNLGVBQWUsSUFBQSxDQUFLLEdBQUwsQ0FBUyxRQUFBLENBQUEsQ0FBQSxDQUFXO0lBRXpDLE9BQU8sSUFBQSxDQUFLLEdBQUwsQ0FBUyxJQUFBLENBQUssR0FBTCxDQUFTLGNBQWMsTUFBTTtBQUMvQzs7QUFKQSIsImZpbGUiOiJjYWxjdWxhdGVTY3JvbGxEdXJhdGlvbi5qcyhvcmlnaW5hbCkiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYWxjdWxhdGVTY3JvbGxEdXJhdGlvbihkaXN0YW5jZSkge1xuICBjb25zdCBoYWxmRGlzdGFuY2UgPSBNYXRoLmFicyhkaXN0YW5jZSAvIDIpO1xuXG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChoYWxmRGlzdGFuY2UsIDI1MCksIDEyMDApO1xufVxuIl19

var easeIn = function (p) { return function (t) { return Math.pow(t, p); }; };
var easeOut = function (p) { return function (t) { return 1 - Math.abs(Math.pow(t - 1, p)); }; };
var easeInOut = function (p) { return function (t) { return t < 0.5 ? easeIn(p)(t * 2) / 2 : easeOut(p)(t * 2 - 1) / 2 + 0.5; }; };
var easing = {
    linear: easeInOut(1),
    easeInQuad: easeIn(2),
    easeOutQuad: easeOut(2),
    easeInOutQuad: easeInOut(2),
    easeInCubic: easeIn(3),
    easeOutCubic: easeOut(3),
    easeInOutCubic: easeInOut(3),
    easeInQuart: easeIn(4),
    easeOutQuart: easeOut(4),
    easeInOutQuart: easeInOut(4),
    easeInQuint: easeIn(5),
    easeOutQuint: easeOut(5),
    easeInOutQuint: easeInOut(5)
};



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVhc2luZy5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsS0FBQSxDQUFNLFNBQVMsQ0FBQSxJQUFLLENBQUEsSUFBSyxJQUFBLENBQUssR0FBTCxDQUFTLEdBQUc7QUFDckMsS0FBQSxDQUFNLFVBQVUsQ0FBQSxJQUFLLENBQUEsSUFBSyxDQUFBLENBQUEsQ0FBQSxDQUFJLElBQUEsQ0FBSyxHQUFMLENBQVMsSUFBQSxDQUFLLEdBQUwsQ0FBUyxDQUFBLENBQUEsQ0FBQSxDQUFJLEdBQUc7QUFDdkQsS0FBQSxDQUFNLFlBQVksQ0FBQSxJQUFLLENBQUEsSUFDckIsQ0FBQSxDQUFBLENBQUEsQ0FBSSxHQUFKLEdBQVUsTUFBQSxDQUFPLEVBQVAsQ0FBVSxDQUFBLENBQUEsQ0FBQSxDQUFJLEVBQWQsQ0FBQSxDQUFBLENBQW1CLElBQUksT0FBQSxDQUFRLEVBQVIsQ0FBVyxDQUFBLENBQUEsQ0FBQSxDQUFJLENBQUosQ0FBQSxDQUFBLENBQVEsRUFBbkIsQ0FBQSxDQUFBLENBQXdCLENBQXhCLENBQUEsQ0FBQSxDQUE0QjtBQUUvRCxLQUFBLENBQU0sU0FBUztJQUNiLFFBQVEsU0FBQSxDQUFVLEVBREwsQ0FBQTtJQUViLFlBQVksTUFBQSxDQUFPLEVBRk4sQ0FBQTtJQUdiLGFBQWEsT0FBQSxDQUFRLEVBSFIsQ0FBQTtJQUliLGVBQWUsU0FBQSxDQUFVLEVBSlosQ0FBQTtJQUtiLGFBQWEsTUFBQSxDQUFPLEVBTFAsQ0FBQTtJQU1iLGNBQWMsT0FBQSxDQUFRLEVBTlQsQ0FBQTtJQU9iLGdCQUFnQixTQUFBLENBQVUsRUFQYixDQUFBO0lBUWIsYUFBYSxNQUFBLENBQU8sRUFSUCxDQUFBO0lBU2IsY0FBYyxPQUFBLENBQVEsRUFUVCxDQUFBO0lBVWIsZ0JBQWdCLFNBQUEsQ0FBVSxFQVZiLENBQUE7SUFXYixhQUFhLE1BQUEsQ0FBTyxFQVhQLENBQUE7SUFZYixjQUFjLE9BQUEsQ0FBUSxFQVpULENBQUE7SUFhYixnQkFBZ0IsU0FBQSxDQUFVOztBQUc1QixPQUFBLENBQVM7QUF2QlQiLCJmaWxlIjoiZWFzaW5nLmpzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJvcnJvd2VkIGZyb20gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZ3JlLzE2NTAyOTQjZ2lzdGNvbW1lbnQtMTgwNjYxNiAqL1xuXG5jb25zdCBlYXNlSW4gPSBwID0+IHQgPT4gTWF0aC5wb3codCwgcCk7XG5jb25zdCBlYXNlT3V0ID0gcCA9PiB0ID0+IDEgLSBNYXRoLmFicyhNYXRoLnBvdyh0IC0gMSwgcCkpO1xuY29uc3QgZWFzZUluT3V0ID0gcCA9PiB0ID0+XG4gIHQgPCAwLjUgPyBlYXNlSW4ocCkodCAqIDIpIC8gMiA6IGVhc2VPdXQocCkodCAqIDIgLSAxKSAvIDIgKyAwLjU7XG5cbmNvbnN0IGVhc2luZyA9IHtcbiAgbGluZWFyOiBlYXNlSW5PdXQoMSksXG4gIGVhc2VJblF1YWQ6IGVhc2VJbigyKSxcbiAgZWFzZU91dFF1YWQ6IGVhc2VPdXQoMiksXG4gIGVhc2VJbk91dFF1YWQ6IGVhc2VJbk91dCgyKSxcbiAgZWFzZUluQ3ViaWM6IGVhc2VJbigzKSxcbiAgZWFzZU91dEN1YmljOiBlYXNlT3V0KDMpLFxuICBlYXNlSW5PdXRDdWJpYzogZWFzZUluT3V0KDMpLFxuICBlYXNlSW5RdWFydDogZWFzZUluKDQpLFxuICBlYXNlT3V0UXVhcnQ6IGVhc2VPdXQoNCksXG4gIGVhc2VJbk91dFF1YXJ0OiBlYXNlSW5PdXQoNCksXG4gIGVhc2VJblF1aW50OiBlYXNlSW4oNSksXG4gIGVhc2VPdXRRdWludDogZWFzZU91dCg1KSxcbiAgZWFzZUluT3V0UXVpbnQ6IGVhc2VJbk91dCg1KVxufTtcblxuZXhwb3J0IHsgZWFzaW5nIH07XG4iXX0=

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGN1bGF0ZUVhc2VkVGltZXMuanMob3JpZ2luYWwpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVMsYUFBYztBQUV2QixlQUFlLFNBQVMsb0JBQW9CLFdBQWEsRUFBQSxRQUFVLEVBQUEsV0FBVztJQUM1RSxLQUFBLENBQU0sYUFBYSxDQUFDO1FBQUUsTUFBTSxDQUFSLENBQUE7UUFBVyxXQUFXOztJQUMxQyxLQUFBLENBQU0sWUFBWSxJQUFBLENBQUEsQ0FBQSxDQUFPO0lBQ3pCLEdBQUEsQ0FBSSxlQUFlO0lBQ25CLEdBQUEsQ0FBSTtJQUVKLE9BQU8sWUFBQSxDQUFBLENBQUEsQ0FBZSxVQUFVO1FBQzlCLFlBQUEsQ0FBQSxFQUFBLENBQWdCO1FBQ2hCLFNBQUEsQ0FBQSxDQUFBLENBQVksTUFBQSxDQUFPLFlBQVAsQ0FBb0IsWUFBQSxDQUFBLENBQUEsQ0FBZTtRQUMvQyxVQUFBLENBQVcsSUFBWCxDQUFnQjtZQUFFLE1BQU0sWUFBUixDQUFBO1lBQXNCLFdBQVc7O0lBQ3JEO0lBRUUsT0FBTztBQUNUOztBQWZBIiwiZmlsZSI6ImNhbGN1bGF0ZUVhc2VkVGltZXMuanMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZWFzaW5nIH0gZnJvbSAnLi9lYXNpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYWxjdWxhdGVFYXNlZFRpbWVzKGVhc2luZ1N0eWxlLCBkdXJhdGlvbiwgZnJhbWVyYXRlKSB7XG4gIGNvbnN0IGVhc2VkVGltZXMgPSBbeyB0aW1lOiAwLCBlYXNlZFRpbWU6IDAgfV07XG4gIGNvbnN0IGluY3JlbWVudCA9IDEwMDAgLyBmcmFtZXJhdGU7XG4gIGxldCBlbGxhcHNlZFRpbWUgPSAwO1xuICBsZXQgZWFzZWRUaW1lO1xuXG4gIHdoaWxlIChlbGxhcHNlZFRpbWUgPCBkdXJhdGlvbikge1xuICAgIGVsbGFwc2VkVGltZSArPSBpbmNyZW1lbnQ7XG4gICAgZWFzZWRUaW1lID0gZWFzaW5nW2Vhc2luZ1N0eWxlXShlbGxhcHNlZFRpbWUgLyBkdXJhdGlvbik7XG4gICAgZWFzZWRUaW1lcy5wdXNoKHsgdGltZTogZWxsYXBzZWRUaW1lLCBlYXNlZFRpbWU6IGVhc2VkVGltZSB9KTtcbiAgfVxuXG4gIHJldHVybiBlYXNlZFRpbWVzO1xufVxuIl19

function scrollTo(targetPosition, easingStyle) {
    return new Promise(function (resolve, reject) {
        if (typeof targetPosition !== 'number') {
            return reject(new Error('First argument must be a number'));
        }
        easingStyle = easingStyle || 'linear';
        if (typeof easingStyle !== 'string') {
            return reject(new Error('Second argument must be a string'));
        }
        var startingPosition = window.pageYOffset;
        var distance = targetPosition - startingPosition;
        var duration = calculateScrollDuration(distance);
        var framerate = 50;
        var increment = 1000 / framerate;
        var ellapsedTime = 0;
        var easedTime;
        var next;
        function animateScroll() {
            ellapsedTime += increment;
            easedTime = easing[easingStyle](ellapsedTime / duration);
            next = easedTime * distance + startingPosition;
            window.scroll(0, next);
            if (ellapsedTime < duration) {
                setTimeout(animateScroll, increment);
            } else {
                resolve(window.pageYOffset);
            }
        }
        
        animateScroll();
    });
}



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbFRvLmpzKG9yaWdpbmFsKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLDZCQUE2QjtBQUNwQyxPQUFPLHlCQUF5QjtBQUNoQyxRQUFTLGFBQWM7QUFHdkIsZUFBZSxTQUFTLFNBQVMsY0FBZ0IsRUFBQSxhQUFhO0lBQzVELE9BQU8sSUFBSSxPQUFKLEVBQWEsT0FBUyxFQUFBLFFBQVYsR0FBcUI7UUFDdEMsSUFBSSxNQUFBLENBQU8sY0FBUCxDQUFBLEdBQUEsQ0FBMEIsVUFBVTtZQUN0QyxPQUFPLE1BQUEsQ0FBTyxJQUFJLEtBQUosQ0FBVTtRQUM5QjtRQUVJLFdBQUEsQ0FBQSxDQUFBLENBQWMsV0FBQSxDQUFBLEVBQUEsQ0FBZTtRQUM3QixJQUFJLE1BQUEsQ0FBTyxXQUFQLENBQUEsR0FBQSxDQUF1QixVQUFVO1lBQ25DLE9BQU8sTUFBQSxDQUFPLElBQUksS0FBSixDQUFVO1FBQzlCO1FBRUksS0FBQSxDQUFNLG1CQUFtQixNQUFBLENBQU87UUFDaEMsS0FBQSxDQUFNLFdBQVcsY0FBQSxDQUFBLENBQUEsQ0FBaUI7UUFDbEMsS0FBQSxDQUFNLFdBQVcsdUJBQUEsQ0FBd0I7UUFDekMsS0FBQSxDQUFNLFlBQVk7UUFDbEIsS0FBQSxDQUFNLFlBQVksSUFBQSxDQUFBLENBQUEsQ0FBTztRQUN6QixHQUFBLENBQUksZUFBZTtRQUNuQixHQUFBLENBQUk7UUFDSixHQUFBLENBQUk7UUFFSixTQUFTLGdCQUFnQjtZQUN2QixZQUFBLENBQUEsRUFBQSxDQUFnQjtZQUNoQixTQUFBLENBQUEsQ0FBQSxDQUFZLE1BQUEsQ0FBTyxZQUFQLENBQW9CLFlBQUEsQ0FBQSxDQUFBLENBQWU7WUFDL0MsSUFBQSxDQUFBLENBQUEsQ0FBTyxTQUFBLENBQUEsQ0FBQSxDQUFZLFFBQVosQ0FBQSxDQUFBLENBQXVCO1lBQzlCLE1BQUEsQ0FBTyxNQUFQLENBQWMsR0FBRztZQUVqQixJQUFJLFlBQUEsQ0FBQSxDQUFBLENBQWUsVUFBVTtnQkFDM0IsVUFBQSxDQUFXLGVBQWU7WUFDbEMsT0FBYTtnQkFDTCxPQUFBLENBQVEsTUFBQSxDQUFPO1lBQ3ZCO1FBQ0E7O1FBRUksYUFBQTtJQUNKO0FBQ0E7O0FBeENBIiwiZmlsZSI6InNjcm9sbFRvLmpzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjYWxjdWxhdGVTY3JvbGxEdXJhdGlvbiBmcm9tICcuL3V0aWwvY2FsY3VsYXRlU2Nyb2xsRHVyYXRpb24nO1xuaW1wb3J0IGNhbGN1bGF0ZUVhc2VkVGltZXMgZnJvbSAnLi91dGlsL2NhbGN1bGF0ZUVhc2VkVGltZXMnO1xuaW1wb3J0IHsgZWFzaW5nIH0gZnJvbSAnLi91dGlsL2Vhc2luZyc7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzY3JvbGxUbyh0YXJnZXRQb3NpdGlvbiwgZWFzaW5nU3R5bGUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAodHlwZW9mIHRhcmdldFBvc2l0aW9uICE9PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKSk7XG4gICAgfVxuXG4gICAgZWFzaW5nU3R5bGUgPSBlYXNpbmdTdHlsZSB8fCAnbGluZWFyJztcbiAgICBpZiAodHlwZW9mIGVhc2luZ1N0eWxlICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoJ1NlY29uZCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJykpO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0aW5nUG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgY29uc3QgZGlzdGFuY2UgPSB0YXJnZXRQb3NpdGlvbiAtIHN0YXJ0aW5nUG9zaXRpb247XG4gICAgY29uc3QgZHVyYXRpb24gPSBjYWxjdWxhdGVTY3JvbGxEdXJhdGlvbihkaXN0YW5jZSk7XG4gICAgY29uc3QgZnJhbWVyYXRlID0gNTA7XG4gICAgY29uc3QgaW5jcmVtZW50ID0gMTAwMCAvIGZyYW1lcmF0ZTtcbiAgICBsZXQgZWxsYXBzZWRUaW1lID0gMDtcbiAgICBsZXQgZWFzZWRUaW1lO1xuICAgIGxldCBuZXh0O1xuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZVNjcm9sbCgpIHtcbiAgICAgIGVsbGFwc2VkVGltZSArPSBpbmNyZW1lbnQ7XG4gICAgICBlYXNlZFRpbWUgPSBlYXNpbmdbZWFzaW5nU3R5bGVdKGVsbGFwc2VkVGltZSAvIGR1cmF0aW9uKTtcbiAgICAgIG5leHQgPSBlYXNlZFRpbWUgKiBkaXN0YW5jZSArIHN0YXJ0aW5nUG9zaXRpb247XG4gICAgICB3aW5kb3cuc2Nyb2xsKDAsIG5leHQpO1xuXG4gICAgICBpZiAoZWxsYXBzZWRUaW1lIDwgZHVyYXRpb24pIHtcbiAgICAgICAgc2V0VGltZW91dChhbmltYXRlU2Nyb2xsLCBpbmNyZW1lbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZSh3aW5kb3cucGFnZVlPZmZzZXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFuaW1hdGVTY3JvbGwoKTtcbiAgfSk7XG59XG4iXX0=

function setupClickHandlers(scrollNav) {
    var settings = scrollNav.settings;
    function clickHandler(event) {
        event.preventDefault();
        var activeArea = window.innerHeight * 0.39;
        var targetYPosition = getTargetYPosition(event.target, scrollNav.data);
        var scrollYTarget = targetYPosition - activeArea;
        return scrollTo(scrollYTarget, settings.easingStyle).then(function () {
            if (settings.updateHistory) {
                history.replaceState({}, '', event.target.getAttribute('href'));
            }
            if (settings.onScroll) {
                settings.onScroll();
            }
        });
    }
    
    var links = scrollNav.nav.querySelectorAll('a');
    links.forEach(function (link) {
        link.addEventListener('click', clickHandler);
    });
    return clickHandler;
}



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHVwQ2xpY2tIYW5kbGVycy5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyx3QkFBd0I7QUFDL0IsT0FBTyxjQUFjO0FBRXJCLGVBQWUsU0FBUyxtQkFBbUIsV0FBVztJQUNwRCxLQUFBLENBQU0sV0FBVyxTQUFBLENBQVU7SUFDM0IsU0FBUyxhQUFhLE9BQU87UUFDM0IsS0FBQSxDQUFNLGNBQU47UUFFQSxLQUFBLENBQU0sYUFBYSxNQUFBLENBQU8sV0FBUCxDQUFBLENBQUEsQ0FBcUI7UUFDeEMsS0FBQSxDQUFNLGtCQUFrQixrQkFBQSxDQUFtQixLQUFBLENBQU0sUUFBUSxTQUFBLENBQVU7UUFDbkUsS0FBQSxDQUFNLGdCQUFnQixlQUFBLENBQUEsQ0FBQSxDQUFrQjtRQUd4QyxPQUFPLFFBQUEsQ0FBUyxlQUFlLFFBQUEsQ0FBUyxZQUFqQyxDQUE4QyxJQUE5QyxJQUFtRCxHQUFNO1lBQzlELElBQUksUUFBQSxDQUFTLGVBQWU7Z0JBQzFCLE9BQUEsQ0FBUSxZQUFSLENBQXFCLElBQUksSUFBSSxLQUFBLENBQU0sTUFBTixDQUFhLFlBQWIsQ0FBMEI7WUFDL0Q7WUFFTSxJQUFJLFFBQUEsQ0FBUyxVQUFVO2dCQUNyQixRQUFBLENBQVMsUUFBVDtZQUNSO1FBQ0E7SUFDQTs7SUFFRSxLQUFBLENBQU0sUUFBUSxTQUFBLENBQVUsR0FBVixDQUFjLGdCQUFkLENBQStCO0lBQzdDLEtBQUEsQ0FBTSxPQUFOLENBQWMsSUFBQSxJQUFRO1FBQ3BCLElBQUEsQ0FBSyxnQkFBTCxDQUFzQixTQUFTO0lBQ25DO0lBRUUsT0FBTztBQUNUOztBQTlCQSIsImZpbGUiOiJzZXR1cENsaWNrSGFuZGxlcnMuanMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldFRhcmdldFlQb3NpdGlvbiBmcm9tICcuL3V0aWwvZ2V0VGFyZ2V0WVBvc2l0aW9uJztcbmltcG9ydCBzY3JvbGxUbyBmcm9tICcuL3Njcm9sbFRvJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0dXBDbGlja0hhbmRsZXJzKHNjcm9sbE5hdikge1xuICBjb25zdCBzZXR0aW5ncyA9IHNjcm9sbE5hdi5zZXR0aW5ncztcbiAgZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGFjdGl2ZUFyZWEgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjM5O1xuICAgIGNvbnN0IHRhcmdldFlQb3NpdGlvbiA9IGdldFRhcmdldFlQb3NpdGlvbihldmVudC50YXJnZXQsIHNjcm9sbE5hdi5kYXRhKTtcbiAgICBjb25zdCBzY3JvbGxZVGFyZ2V0ID0gdGFyZ2V0WVBvc2l0aW9uIC0gYWN0aXZlQXJlYTtcblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgcmV0dXJuIHNjcm9sbFRvKHNjcm9sbFlUYXJnZXQsIHNldHRpbmdzLmVhc2luZ1N0eWxlKS50aGVuKCgpID0+IHtcbiAgICAgIGlmIChzZXR0aW5ncy51cGRhdGVIaXN0b3J5KSB7XG4gICAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCAnJywgZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNldHRpbmdzLm9uU2Nyb2xsKSB7XG4gICAgICAgIHNldHRpbmdzLm9uU2Nyb2xsKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBsaW5rcyA9IHNjcm9sbE5hdi5uYXYucXVlcnlTZWxlY3RvckFsbCgnYScpO1xuICBsaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuICB9KTtcblxuICByZXR1cm4gY2xpY2tIYW5kbGVyO1xufVxuIl19

function getActiveSection(data, boundryTop, boundryBottom) {
    var activeSection;
    data.forEach(function (section) {
        if (section.offsetTop > boundryBottom) {
            if (!activeSection && section.offsetTop < boundryTop) {
                activeSection = section;
            }
        } else {
            activeSection = section;
        }
    });
    if (activeSection && activeSection.subSections.length) {
        var activeSubSection;
        activeSubSection = getActiveSection(activeSection.subSections, boundryTop, boundryBottom);
        if (activeSubSection) {
            activeSection = activeSubSection;
        }
    }
    return activeSection;
}



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldEFjdGl2ZVNlY3Rpb24uanMob3JpZ2luYWwpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWUsU0FBUyxpQkFBaUIsSUFBTSxFQUFBLFVBQVksRUFBQSxlQUFlO0lBQ3hFLEdBQUEsQ0FBSTtJQUVKLElBQUEsQ0FBSyxPQUFMLENBQWEsT0FBQSxJQUFXO1FBQ3RCLElBQUksT0FBQSxDQUFRLFNBQVIsQ0FBQSxDQUFBLENBQW9CLGVBQWU7WUFDckMsSUFBSSxDQUFDLGFBQUQsQ0FBQSxFQUFBLENBQWtCLE9BQUEsQ0FBUSxTQUFSLENBQUEsQ0FBQSxDQUFvQixZQUFZO2dCQUNwRCxhQUFBLENBQUEsQ0FBQSxDQUFnQjtZQUN4QjtRQUNBLE9BQVc7WUFDTCxhQUFBLENBQUEsQ0FBQSxDQUFnQjtRQUN0QjtJQUNBO0lBRUUsSUFBSSxhQUFBLENBQUEsRUFBQSxDQUFpQixhQUFBLENBQWMsV0FBZCxDQUEwQixRQUFRO1FBQ3JELEdBQUEsQ0FBSTtRQUVKLGdCQUFBLENBQUEsQ0FBQSxDQUFtQixnQkFBQSxDQUNqQixhQUFBLENBQWMsYUFDZCxZQUNBO1FBR0YsSUFBSSxrQkFBa0I7WUFDcEIsYUFBQSxDQUFBLENBQUEsQ0FBZ0I7UUFDdEI7SUFDQTtJQUVFLE9BQU87QUFDVDs7QUE1QkEiLCJmaWxlIjoiZ2V0QWN0aXZlU2VjdGlvbi5qcyhvcmlnaW5hbCkiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRBY3RpdmVTZWN0aW9uKGRhdGEsIGJvdW5kcnlUb3AsIGJvdW5kcnlCb3R0b20pIHtcbiAgbGV0IGFjdGl2ZVNlY3Rpb247XG5cbiAgZGF0YS5mb3JFYWNoKHNlY3Rpb24gPT4ge1xuICAgIGlmIChzZWN0aW9uLm9mZnNldFRvcCA+IGJvdW5kcnlCb3R0b20pIHtcbiAgICAgIGlmICghYWN0aXZlU2VjdGlvbiAmJiBzZWN0aW9uLm9mZnNldFRvcCA8IGJvdW5kcnlUb3ApIHtcbiAgICAgICAgYWN0aXZlU2VjdGlvbiA9IHNlY3Rpb247XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjdGl2ZVNlY3Rpb24gPSBzZWN0aW9uO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGFjdGl2ZVNlY3Rpb24gJiYgYWN0aXZlU2VjdGlvbi5zdWJTZWN0aW9ucy5sZW5ndGgpIHtcbiAgICBsZXQgYWN0aXZlU3ViU2VjdGlvbjtcblxuICAgIGFjdGl2ZVN1YlNlY3Rpb24gPSBnZXRBY3RpdmVTZWN0aW9uKFxuICAgICAgYWN0aXZlU2VjdGlvbi5zdWJTZWN0aW9ucyxcbiAgICAgIGJvdW5kcnlUb3AsXG4gICAgICBib3VuZHJ5Qm90dG9tXG4gICAgKTtcblxuICAgIGlmIChhY3RpdmVTdWJTZWN0aW9uKSB7XG4gICAgICBhY3RpdmVTZWN0aW9uID0gYWN0aXZlU3ViU2VjdGlvbjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYWN0aXZlU2VjdGlvbjtcbn1cbiJdfQ==

function updateActiveNavItem(activeSection, nav) {
    var previousActive = nav.querySelector('[data-sn-active]');
    if (!activeSection) {
        if (previousActive) {
            previousActive.classList.remove('scroll-nav__item--active');
            previousActive.removeAttribute('data-sn-active');
        }
        return;
    }
    var newActive = nav.querySelector('[data-sn-section=' + activeSection.id + ']');
    if (newActive && newActive !== previousActive) {
        if (previousActive) {
            previousActive.classList.remove('scroll-nav__item--active');
            previousActive.removeAttribute('data-sn-active');
        }
        newActive.classList.add('scroll-nav__item--active');
        newActive.setAttribute('data-sn-active', true);
    }
}



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZUFjdGl2ZU5hdkl0ZW0uanMob3JpZ2luYWwpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWUsU0FBUyxvQkFBb0IsYUFBZSxFQUFBLEtBQUs7SUFDOUQsS0FBQSxDQUFNLGlCQUFpQixHQUFBLENBQUksYUFBSixDQUFrQjtJQUV6QyxJQUFJLENBQUMsZUFBZTtRQUNsQixJQUFJLGdCQUFnQjtZQUNsQixjQUFBLENBQWUsU0FBZixDQUF5QixNQUF6QixDQUFnQztZQUNoQyxjQUFBLENBQWUsZUFBZixDQUErQjtRQUNyQztRQUVJO0lBQ0o7SUFFRSxLQUFBLENBQU0sWUFBWSxHQUFBLENBQUksYUFBSixDQUNoQixtQkFBQSxDQUFBLENBQUEsQ0FBc0IsYUFBQSxDQUFjLEVBQXBDLENBQUEsQ0FBQSxDQUF5QztJQUczQyxJQUFJLFNBQUEsQ0FBQSxFQUFBLENBQWEsU0FBQSxDQUFBLEdBQUEsQ0FBYyxnQkFBZ0I7UUFDN0MsSUFBSSxnQkFBZ0I7WUFDbEIsY0FBQSxDQUFlLFNBQWYsQ0FBeUIsTUFBekIsQ0FBZ0M7WUFDaEMsY0FBQSxDQUFlLGVBQWYsQ0FBK0I7UUFDckM7UUFDSSxTQUFBLENBQVUsU0FBVixDQUFvQixHQUFwQixDQUF3QjtRQUN4QixTQUFBLENBQVUsWUFBVixDQUF1QixrQkFBa0I7SUFDN0M7QUFDQTs7QUF4QkEiLCJmaWxlIjoidXBkYXRlQWN0aXZlTmF2SXRlbS5qcyhvcmlnaW5hbCkiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVBY3RpdmVOYXZJdGVtKGFjdGl2ZVNlY3Rpb24sIG5hdikge1xuICBjb25zdCBwcmV2aW91c0FjdGl2ZSA9IG5hdi5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zbi1hY3RpdmVdJyk7XG5cbiAgaWYgKCFhY3RpdmVTZWN0aW9uKSB7XG4gICAgaWYgKHByZXZpb3VzQWN0aXZlKSB7XG4gICAgICBwcmV2aW91c0FjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGwtbmF2X19pdGVtLS1hY3RpdmUnKTtcbiAgICAgIHByZXZpb3VzQWN0aXZlLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zbi1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBuZXdBY3RpdmUgPSBuYXYucXVlcnlTZWxlY3RvcihcbiAgICAnW2RhdGEtc24tc2VjdGlvbj0nICsgYWN0aXZlU2VjdGlvbi5pZCArICddJ1xuICApO1xuXG4gIGlmIChuZXdBY3RpdmUgJiYgbmV3QWN0aXZlICE9PSBwcmV2aW91c0FjdGl2ZSkge1xuICAgIGlmIChwcmV2aW91c0FjdGl2ZSkge1xuICAgICAgcHJldmlvdXNBY3RpdmUuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLW5hdl9faXRlbS0tYWN0aXZlJyk7XG4gICAgICBwcmV2aW91c0FjdGl2ZS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc24tYWN0aXZlJyk7XG4gICAgfVxuICAgIG5ld0FjdGl2ZS5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtbmF2X19pdGVtLS1hY3RpdmUnKTtcbiAgICBuZXdBY3RpdmUuc2V0QXR0cmlidXRlKCdkYXRhLXNuLWFjdGl2ZScsIHRydWUpO1xuICB9XG59XG4iXX0=

function setupScrollHandler(scrollNav) {
    function scrollHandler() {
        var top = window.scrollY || window.pageYOffset || document.body.scrollTop;
        var boundryTop = top;
        var boundryBottom = top + window.innerHeight * 0.4;
        var activeSection = getActiveSection(scrollNav.data, boundryTop, boundryBottom);
        updateActiveNavItem(activeSection, scrollNav.nav);
        return activeSection;
    }
    
    window.addEventListener('scroll', scrollHandler);
    return scrollHandler;
}



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHVwU2Nyb2xsSGFuZGxlci5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxzQkFBc0I7QUFDN0IsT0FBTyx5QkFBeUI7QUFFaEMsZUFBZSxTQUFTLG1CQUFtQixXQUFXO0lBQ3BELFNBQVMsZ0JBQWdCO1FBQ3ZCLEtBQUEsQ0FBTSxNQUFNLE1BQUEsQ0FBTyxPQUFQLENBQUEsRUFBQSxDQUFrQixNQUFBLENBQU8sV0FBekIsQ0FBQSxFQUFBLENBQXdDLFFBQUEsQ0FBUyxJQUFULENBQWM7UUFDbEUsS0FBQSxDQUFNLGFBQWE7UUFDbkIsS0FBQSxDQUFNLGdCQUFnQixHQUFBLENBQUEsQ0FBQSxDQUFNLE1BQUEsQ0FBTyxXQUFQLENBQUEsQ0FBQSxDQUFxQjtRQUNqRCxLQUFBLENBQU0sZ0JBQWdCLGdCQUFBLENBQ3BCLFNBQUEsQ0FBVSxNQUNWLFlBQ0E7UUFHRixtQkFBQSxDQUFvQixlQUFlLFNBQUEsQ0FBVTtRQUU3QyxPQUFPO0lBQ1g7O0lBRUUsTUFBQSxDQUFPLGdCQUFQLENBQXdCLFVBQVU7SUFFbEMsT0FBTztBQUNUOztBQXRCQSIsImZpbGUiOiJzZXR1cFNjcm9sbEhhbmRsZXIuanMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldEFjdGl2ZVNlY3Rpb24gZnJvbSAnLi91dGlsL2dldEFjdGl2ZVNlY3Rpb24nO1xuaW1wb3J0IHVwZGF0ZUFjdGl2ZU5hdkl0ZW0gZnJvbSAnLi91dGlsL3VwZGF0ZUFjdGl2ZU5hdkl0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR1cFNjcm9sbEhhbmRsZXIoc2Nyb2xsTmF2KSB7XG4gIGZ1bmN0aW9uIHNjcm9sbEhhbmRsZXIoKSB7XG4gICAgY29uc3QgdG9wID0gd2luZG93LnNjcm9sbFkgfHwgd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IGJvdW5kcnlUb3AgPSB0b3A7XG4gICAgY29uc3QgYm91bmRyeUJvdHRvbSA9IHRvcCArIHdpbmRvdy5pbm5lckhlaWdodCAqIDAuNDtcbiAgICBjb25zdCBhY3RpdmVTZWN0aW9uID0gZ2V0QWN0aXZlU2VjdGlvbihcbiAgICAgIHNjcm9sbE5hdi5kYXRhLFxuICAgICAgYm91bmRyeVRvcCxcbiAgICAgIGJvdW5kcnlCb3R0b21cbiAgICApO1xuXG4gICAgdXBkYXRlQWN0aXZlTmF2SXRlbShhY3RpdmVTZWN0aW9uLCBzY3JvbGxOYXYubmF2KTtcblxuICAgIHJldHVybiBhY3RpdmVTZWN0aW9uO1xuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpO1xuXG4gIHJldHVybiBzY3JvbGxIYW5kbGVyO1xufVxuIl19

function setupResizeHandler(scrollNav) {
    function resizeHandler() {
        scrollNav.data = updatePositionData(scrollNav.data);
    }
    
    window.addEventListener('resize', resizeHandler);
    return resizeHandler;
}



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHVwUmVzaXplSGFuZGxlci5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyx3QkFBd0I7QUFFL0IsZUFBZSxTQUFTLG1CQUFtQixXQUFXO0lBQ3BELFNBQVMsZ0JBQWdCO1FBQ3ZCLFNBQUEsQ0FBVSxJQUFWLENBQUEsQ0FBQSxDQUFpQixrQkFBQSxDQUFtQixTQUFBLENBQVU7SUFDbEQ7O0lBRUUsTUFBQSxDQUFPLGdCQUFQLENBQXdCLFVBQVU7SUFFbEMsT0FBTztBQUNUOztBQVZBIiwiZmlsZSI6InNldHVwUmVzaXplSGFuZGxlci5qcyhvcmlnaW5hbCkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXBkYXRlUG9zaXRpb25EYXRhIGZyb20gJy4vdXRpbC91cGRhdGVQb3NpdGlvbkRhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR1cFJlc2l6ZUhhbmRsZXIoc2Nyb2xsTmF2KSB7XG4gIGZ1bmN0aW9uIHJlc2l6ZUhhbmRsZXIoKSB7XG4gICAgc2Nyb2xsTmF2LmRhdGEgPSB1cGRhdGVQb3NpdGlvbkRhdGEoc2Nyb2xsTmF2LmRhdGEpO1xuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUhhbmRsZXIpO1xuXG4gIHJldHVybiByZXNpemVIYW5kbGVyO1xufVxuIl19

function teardownClickHandlers(nav, clickHandler) {
    var links = nav.querySelectorAll('a');
    links.forEach(function (link) {
        link.removeEventListener('click', clickHandler);
    });
}



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYXJkb3duQ2xpY2tIYW5kbGVycy5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxTQUFTLHNCQUFzQixHQUFLLEVBQUEsY0FBYztJQUMvRCxLQUFBLENBQU0sUUFBUSxHQUFBLENBQUksZ0JBQUosQ0FBcUI7SUFDbkMsS0FBQSxDQUFNLE9BQU4sQ0FBYyxJQUFBLElBQVE7UUFDcEIsSUFBQSxDQUFLLG1CQUFMLENBQXlCLFNBQVM7SUFDdEM7QUFDQTs7QUFMQSIsImZpbGUiOiJ0ZWFyZG93bkNsaWNrSGFuZGxlcnMuanMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGVhcmRvd25DbGlja0hhbmRsZXJzKG5hdiwgY2xpY2tIYW5kbGVyKSB7XG4gIGNvbnN0IGxpbmtzID0gbmF2LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcbiAgbGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICBsaW5rLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgfSk7XG59XG4iXX0=

function teardownScrollHandler(scrollHandler) {
    window.removeEventListener('scroll', scrollHandler);
}



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYXJkb3duU2Nyb2xsSGFuZGxlci5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxTQUFTLHNCQUFzQixlQUFlO0lBQzNELE1BQUEsQ0FBTyxtQkFBUCxDQUEyQixVQUFVO0FBQ3ZDOztBQUZBIiwiZmlsZSI6InRlYXJkb3duU2Nyb2xsSGFuZGxlci5qcyhvcmlnaW5hbCkiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZWFyZG93blNjcm9sbEhhbmRsZXIoc2Nyb2xsSGFuZGxlcikge1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsSGFuZGxlcik7XG59XG4iXX0=

function teardownResizelHandler(resizeHandler) {
    window.removeEventListener('resize', resizeHandler);
}



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYXJkb3duUmVzaXplSGFuZGxlci5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxTQUFTLHVCQUF1QixlQUFlO0lBQzVELE1BQUEsQ0FBTyxtQkFBUCxDQUEyQixVQUFVO0FBQ3ZDOztBQUZBIiwiZmlsZSI6InRlYXJkb3duUmVzaXplSGFuZGxlci5qcyhvcmlnaW5hbCkiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZWFyZG93blJlc2l6ZWxIYW5kbGVyKHJlc2l6ZUhhbmRsZXIpIHtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUhhbmRsZXIpO1xufVxuIl19

var clickHandler;
var scrollHandler;
var resizeHandler;
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
function isElement(element) {
    return element instanceof Element;
}

function init(elem, options) {
    var defaults = {
        sections: 'h2',
        insertTarget: elem,
        insertLocation: 'before',
        easingStyle: 'easeOutQuad',
        updateHistory: true
    };
    this.settings = extend(defaults, options);
    var locationOptions = ['append','prepend','after','before'];
    if (!isElement(elem)) {
        if (this.settings.debug) {
            console.error(("\n        scrollNav build failed, content argument \"" + elem + "\" is not an HTML Element\n      "));
        }
        return;
    }
    if (this.settings.insertTarget && !isElement(this.settings.insertTarget)) {
        if (this.settings.debug) {
            console.error(("\n        scrollNav build failed, options.insertTarget \"" + elem + "\" is not an HTML Element\n      "));
        }
        return;
    }
    if (locationOptions.indexOf(this.settings.insertLocation) < 1) {
        if (this.settings.debug) {
            console.error(("\n        scrollNav build failed, options.insertLocation \"" + (this.settings.insertLocation) + "\" is not a valid option\n      "));
        }
        return;
    }
    var sectionsDom = elem.querySelectorAll(this.settings.sections);
    if (!sectionsDom.length) {
        if (this.settings.debug) {
            console.error(("\n        scrollNav build failed, could not find any \"" + (this.settings.sections) + "\"\n        elements inside of \"" + elem + "\"\n      "));
        }
        return;
    }
    this.data = populateSectionData(sectionsDom, this.settings);
    this.nav = createNav(this.data);
    insertNav(this);
    clickHandler = setupClickHandlers(this);
    scrollHandler = setupScrollHandler(this);
    resizeHandler = setupResizeHandler(this);
    if (this.settings.debug) 
        { insertVisualDebugger(); }
    if (this.settings.onInit) 
        { return this.settings.onInit(); }
}

function destroy(options) {
    this.settings = extend(this.settings, options);
    teardownClickHandlers(this.nav, clickHandler);
    teardownScrollHandler(scrollHandler);
    teardownResizelHandler(resizeHandler);
    this.nav.remove();
    if (this.settings.onDestroy) 
        { return this.settings.onDestroy(); }
}

function updatePositions(options) {
    this.settings = extend(this.settings, options);
    this.data = updatePositionData(this.data);
    if (this.settings.onUpdatePositions) 
        { return this.settings.onUpdatePositions(); }
}

var scrollNav = {
    init: init,
    destroy: destroy,
    updatePositions: updatePositions
};



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbE5hdi5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUEsT0FBTyxZQUFZO0FBQ25CLE9BQU8seUJBQXlCO0FBQ2hDLE9BQU8sZUFBZTtBQUN0QixPQUFPLGVBQWU7QUFDdEIsT0FBTyx3QkFBd0I7QUFDL0IsT0FBTywwQkFBMEI7QUFDakMsT0FBTyx3QkFBd0I7QUFDL0IsT0FBTyx3QkFBd0I7QUFDL0IsT0FBTyx3QkFBd0I7QUFDL0IsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFFbEMsR0FBQSxDQUFJO0FBQ0osR0FBQSxDQUFJO0FBQ0osR0FBQSxDQUFJO0FBSUosSUFBSSxDQUFDLE9BQUEsQ0FBUSxTQUFSLENBQWtCLFNBQVM7SUFDOUIsT0FBQSxDQUFRLFNBQVIsQ0FBa0IsT0FBbEIsQ0FBQSxDQUFBLENBQ0UsT0FBQSxDQUFRLFNBQVIsQ0FBa0IsaUJBQWxCLENBQUEsRUFBQSxDQUNBLE9BQUEsQ0FBUSxTQUFSLENBQWtCO0FBQ3RCO0FBRUEsU0FBUyxVQUFVLFNBQVM7SUFDMUIsT0FBTyxPQUFBLENBQUEsVUFBQSxDQUFtQjtBQUM1Qjs7QUFFQSxTQUFTLEtBQUssSUFBTSxFQUFBLFNBQVM7SUFDM0IsS0FBQSxDQUFNLFdBQVc7UUFDZixVQUFVLElBREssQ0FBQTtRQUVmLGNBQWMsSUFGQyxDQUFBO1FBR2YsZ0JBQWdCLFFBSEQsQ0FBQTtRQUlmLGFBQWEsYUFKRSxDQUFBO1FBS2YsZUFBZTs7SUFFakIsSUFBQSxDQUFLLFFBQUwsQ0FBQSxDQUFBLENBQWdCLE1BQUEsQ0FBTyxVQUFVO0lBQ2pDLEtBQUEsQ0FBTSxrQkFBa0IsQ0FBQyxTQUFVLFVBQVcsUUFBUztJQUV2RCxJQUFJLENBQUMsU0FBQSxDQUFVLE9BQU87UUFDcEIsSUFBSSxJQUFBLENBQUssUUFBTCxDQUFjLE9BQU87WUFDdkIsT0FBQSxDQUFRLEtBQVIsQ0FBYyxzREFDZ0Msb0NBRGhDO1FBR3BCO1FBQ0k7SUFDSjtJQUVFLElBQUksSUFBQSxDQUFLLFFBQUwsQ0FBYyxZQUFkLENBQUEsRUFBQSxDQUE4QixDQUFDLFNBQUEsQ0FBVSxJQUFBLENBQUssUUFBTCxDQUFjLGVBQWU7UUFDeEUsSUFBSSxJQUFBLENBQUssUUFBTCxDQUFjLE9BQU87WUFDdkIsT0FBQSxDQUFRLEtBQVIsQ0FBYywwREFDb0Msb0NBRHBDO1FBR3BCO1FBQ0k7SUFDSjtJQUVFLElBQUksZUFBQSxDQUFnQixPQUFoQixDQUF3QixJQUFBLENBQUssUUFBTCxDQUFjLGVBQXRDLENBQUEsQ0FBQSxDQUF3RCxHQUFHO1FBQzdELElBQUksSUFBQSxDQUFLLFFBQUwsQ0FBYyxPQUFPO1lBQ3ZCLE9BQUEsQ0FBUSxLQUFSLENBQWMsNERBRVYsSUFBQSxDQUFLLFFBQUwsQ0FBYyw2Q0FGSjtRQUtwQjtRQUNJO0lBQ0o7SUFFRSxLQUFBLENBQU0sY0FBYyxJQUFBLENBQUssZ0JBQUwsQ0FBc0IsSUFBQSxDQUFLLFFBQUwsQ0FBYztJQUV4RCxJQUFJLENBQUMsV0FBQSxDQUFZLFFBQVE7UUFDdkIsSUFBSSxJQUFBLENBQUssUUFBTCxDQUFjLE9BQU87WUFDdkIsT0FBQSxDQUFRLEtBQVIsQ0FBYyx3REFDa0MsSUFBQSxDQUFLLFFBQUwsQ0FBYyx5Q0FDdEMsYUFGVjtRQUlwQjtRQUNJO0lBQ0o7SUFFRSxJQUFBLENBQUssSUFBTCxDQUFBLENBQUEsQ0FBWSxtQkFBQSxDQUFvQixhQUFhLElBQUEsQ0FBSztJQUNsRCxJQUFBLENBQUssR0FBTCxDQUFBLENBQUEsQ0FBVyxTQUFBLENBQVUsSUFBQSxDQUFLO0lBRTFCLFNBQUEsQ0FBVTtJQUNWLFlBQUEsQ0FBQSxDQUFBLENBQWUsa0JBQUEsQ0FBbUI7SUFDbEMsYUFBQSxDQUFBLENBQUEsQ0FBZ0Isa0JBQUEsQ0FBbUI7SUFDbkMsYUFBQSxDQUFBLENBQUEsQ0FBZ0Isa0JBQUEsQ0FBbUI7SUFFbkMsSUFBSSxJQUFBLENBQUssUUFBTCxDQUFjO1FBQU8sb0JBQUE7SUFDekIsSUFBSSxJQUFBLENBQUssUUFBTCxDQUFjO1FBQVEsT0FBTyxJQUFBLENBQUssUUFBTCxDQUFjLE1BQWQ7QUFDbkM7O0FBRUEsU0FBUyxRQUFRLFNBQVM7SUFDeEIsSUFBQSxDQUFLLFFBQUwsQ0FBQSxDQUFBLENBQWdCLE1BQUEsQ0FBTyxJQUFBLENBQUssVUFBVTtJQUV0QyxxQkFBQSxDQUFzQixJQUFBLENBQUssS0FBSztJQUNoQyxxQkFBQSxDQUFzQjtJQUN0QixxQkFBQSxDQUFzQjtJQUN0QixJQUFBLENBQUssR0FBTCxDQUFTLE1BQVQ7SUFFQSxJQUFJLElBQUEsQ0FBSyxRQUFMLENBQWM7UUFBVyxPQUFPLElBQUEsQ0FBSyxRQUFMLENBQWMsU0FBZDtBQUN0Qzs7QUFFQSxTQUFTLGdCQUFnQixTQUFTO0lBQ2hDLElBQUEsQ0FBSyxRQUFMLENBQUEsQ0FBQSxDQUFnQixNQUFBLENBQU8sSUFBQSxDQUFLLFVBQVU7SUFDdEMsSUFBQSxDQUFLLElBQUwsQ0FBQSxDQUFBLENBQVksa0JBQUEsQ0FBbUIsSUFBQSxDQUFLO0lBRXBDLElBQUksSUFBQSxDQUFLLFFBQUwsQ0FBYztRQUFtQixPQUFPLElBQUEsQ0FBSyxRQUFMLENBQWMsaUJBQWQ7QUFDOUM7O0FBRUEsS0FBQSxDQUFNLFlBQVk7SUFDaEIsTUFBTSxJQURVLENBQUE7SUFFaEIsU0FBUyxPQUZPLENBQUE7SUFHaEIsaUJBQWlCOztBQUduQixlQUFlO0FBN0hmIiwiZmlsZSI6InNjcm9sbE5hdi5qcyhvcmlnaW5hbCkiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogc2Nyb2xsTmF2XG4gKiBodHRwOi8vc2Nyb2xsbmF2LmNvbVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMy0yMDE4IEphbWVzIFdpbHNvblxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICovXG5cbmltcG9ydCBleHRlbmQgZnJvbSAnLi91dGlsL2V4dGVuZCc7XG5pbXBvcnQgcG9wdWxhdGVTZWN0aW9uRGF0YSBmcm9tICcuL3V0aWwvcG9wdWxhdGVTZWN0aW9uRGF0YSc7XG5pbXBvcnQgY3JlYXRlTmF2IGZyb20gJy4vdXRpbC9jcmVhdGVOYXYnO1xuaW1wb3J0IGluc2VydE5hdiBmcm9tICcuL3V0aWwvaW5zZXJ0TmF2JztcbmltcG9ydCB1cGRhdGVQb3NpdGlvbkRhdGEgZnJvbSAnLi91dGlsL3VwZGF0ZVBvc2l0aW9uRGF0YSc7XG5pbXBvcnQgaW5zZXJ0VmlzdWFsRGVidWdnZXIgZnJvbSAnLi91dGlsL2luc2VydFZpc3VhbERlYnVnZ2VyJztcbmltcG9ydCBzZXR1cENsaWNrSGFuZGxlcnMgZnJvbSAnLi9zZXR1cENsaWNrSGFuZGxlcnMnO1xuaW1wb3J0IHNldHVwU2Nyb2xsSGFuZGxlciBmcm9tICcuL3NldHVwU2Nyb2xsSGFuZGxlcic7XG5pbXBvcnQgc2V0dXBSZXNpemVIYW5kbGVyIGZyb20gJy4vc2V0dXBSZXNpemVIYW5kbGVyJztcbmltcG9ydCB0ZWFyZG93bkNsaWNrSGFuZGxlcnMgZnJvbSAnLi90ZWFyZG93bkNsaWNrSGFuZGxlcnMnO1xuaW1wb3J0IHRlYXJkb3duU2Nyb2xsSGFuZGxlciBmcm9tICcuL3RlYXJkb3duU2Nyb2xsSGFuZGxlcic7XG5pbXBvcnQgdGVhcmRvd25SZXNpemVIYW5kbGVyIGZyb20gJy4vdGVhcmRvd25SZXNpemVIYW5kbGVyJztcblxubGV0IGNsaWNrSGFuZGxlcjtcbmxldCBzY3JvbGxIYW5kbGVyO1xubGV0IHJlc2l6ZUhhbmRsZXI7XG5cbi8vIG1hdGNoZXMoKSBwb2x5ZmlsbFxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmlmICghRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xuICBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzID1cbiAgICBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fFxuICAgIEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3Rvcjtcbn1cblxuZnVuY3Rpb24gaXNFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpbml0KGVsZW0sIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgc2VjdGlvbnM6ICdoMicsXG4gICAgaW5zZXJ0VGFyZ2V0OiBlbGVtLFxuICAgIGluc2VydExvY2F0aW9uOiAnYmVmb3JlJyxcbiAgICBlYXNpbmdTdHlsZTogJ2Vhc2VPdXRRdWFkJyxcbiAgICB1cGRhdGVIaXN0b3J5OiB0cnVlXG4gIH07XG4gIHRoaXMuc2V0dGluZ3MgPSBleHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuICBjb25zdCBsb2NhdGlvbk9wdGlvbnMgPSBbJ2FwcGVuZCcsICdwcmVwZW5kJywgJ2FmdGVyJywgJ2JlZm9yZSddO1xuXG4gIGlmICghaXNFbGVtZW50KGVsZW0pKSB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuZGVidWcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFxuICAgICAgICBzY3JvbGxOYXYgYnVpbGQgZmFpbGVkLCBjb250ZW50IGFyZ3VtZW50IFwiJHtlbGVtfVwiIGlzIG5vdCBhbiBIVE1MIEVsZW1lbnRcbiAgICAgIGApO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodGhpcy5zZXR0aW5ncy5pbnNlcnRUYXJnZXQgJiYgIWlzRWxlbWVudCh0aGlzLnNldHRpbmdzLmluc2VydFRhcmdldCkpIHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5kZWJ1Zykge1xuICAgICAgY29uc29sZS5lcnJvcihgXG4gICAgICAgIHNjcm9sbE5hdiBidWlsZCBmYWlsZWQsIG9wdGlvbnMuaW5zZXJ0VGFyZ2V0IFwiJHtlbGVtfVwiIGlzIG5vdCBhbiBIVE1MIEVsZW1lbnRcbiAgICAgIGApO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAobG9jYXRpb25PcHRpb25zLmluZGV4T2YodGhpcy5zZXR0aW5ncy5pbnNlcnRMb2NhdGlvbikgPCAxKSB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuZGVidWcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFxuICAgICAgICBzY3JvbGxOYXYgYnVpbGQgZmFpbGVkLCBvcHRpb25zLmluc2VydExvY2F0aW9uIFwiJHtcbiAgICAgICAgICB0aGlzLnNldHRpbmdzLmluc2VydExvY2F0aW9uXG4gICAgICAgIH1cIiBpcyBub3QgYSB2YWxpZCBvcHRpb25cbiAgICAgIGApO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBzZWN0aW9uc0RvbSA9IGVsZW0ucXVlcnlTZWxlY3RvckFsbCh0aGlzLnNldHRpbmdzLnNlY3Rpb25zKTtcblxuICBpZiAoIXNlY3Rpb25zRG9tLmxlbmd0aCkge1xuICAgIGlmICh0aGlzLnNldHRpbmdzLmRlYnVnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBcbiAgICAgICAgc2Nyb2xsTmF2IGJ1aWxkIGZhaWxlZCwgY291bGQgbm90IGZpbmQgYW55IFwiJHt0aGlzLnNldHRpbmdzLnNlY3Rpb25zfVwiXG4gICAgICAgIGVsZW1lbnRzIGluc2lkZSBvZiBcIiR7ZWxlbX1cIlxuICAgICAgYCk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuZGF0YSA9IHBvcHVsYXRlU2VjdGlvbkRhdGEoc2VjdGlvbnNEb20sIHRoaXMuc2V0dGluZ3MpO1xuICB0aGlzLm5hdiA9IGNyZWF0ZU5hdih0aGlzLmRhdGEpO1xuXG4gIGluc2VydE5hdih0aGlzKTtcbiAgY2xpY2tIYW5kbGVyID0gc2V0dXBDbGlja0hhbmRsZXJzKHRoaXMpO1xuICBzY3JvbGxIYW5kbGVyID0gc2V0dXBTY3JvbGxIYW5kbGVyKHRoaXMpO1xuICByZXNpemVIYW5kbGVyID0gc2V0dXBSZXNpemVIYW5kbGVyKHRoaXMpO1xuXG4gIGlmICh0aGlzLnNldHRpbmdzLmRlYnVnKSBpbnNlcnRWaXN1YWxEZWJ1Z2dlcigpO1xuICBpZiAodGhpcy5zZXR0aW5ncy5vbkluaXQpIHJldHVybiB0aGlzLnNldHRpbmdzLm9uSW5pdCgpO1xufVxuXG5mdW5jdGlvbiBkZXN0cm95KG9wdGlvbnMpIHtcbiAgdGhpcy5zZXR0aW5ncyA9IGV4dGVuZCh0aGlzLnNldHRpbmdzLCBvcHRpb25zKTtcblxuICB0ZWFyZG93bkNsaWNrSGFuZGxlcnModGhpcy5uYXYsIGNsaWNrSGFuZGxlcik7XG4gIHRlYXJkb3duU2Nyb2xsSGFuZGxlcihzY3JvbGxIYW5kbGVyKTtcbiAgdGVhcmRvd25SZXNpemVIYW5kbGVyKHJlc2l6ZUhhbmRsZXIpO1xuICB0aGlzLm5hdi5yZW1vdmUoKTtcblxuICBpZiAodGhpcy5zZXR0aW5ncy5vbkRlc3Ryb3kpIHJldHVybiB0aGlzLnNldHRpbmdzLm9uRGVzdHJveSgpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQb3NpdGlvbnMob3B0aW9ucykge1xuICB0aGlzLnNldHRpbmdzID0gZXh0ZW5kKHRoaXMuc2V0dGluZ3MsIG9wdGlvbnMpO1xuICB0aGlzLmRhdGEgPSB1cGRhdGVQb3NpdGlvbkRhdGEodGhpcy5kYXRhKTtcblxuICBpZiAodGhpcy5zZXR0aW5ncy5vblVwZGF0ZVBvc2l0aW9ucykgcmV0dXJuIHRoaXMuc2V0dGluZ3Mub25VcGRhdGVQb3NpdGlvbnMoKTtcbn1cblxuY29uc3Qgc2Nyb2xsTmF2ID0ge1xuICBpbml0OiBpbml0LFxuICBkZXN0cm95OiBkZXN0cm95LFxuICB1cGRhdGVQb3NpdGlvbnM6IHVwZGF0ZVBvc2l0aW9uc1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2Nyb2xsTmF2O1xuIl19

return scrollNav;

})));
//# sourceMappingURL=scrollNav.min.umd.js.map
