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

function populateSectionData(sections, prefix, settings) {
    var sectionData = [];
    prefix = prefix + '__';
    sections.forEach(function (elem, i) {
        var subSectionData = [];
        var id = getOrSetID(elem, prefix + (i + 1));
        if (settings.subSections && elem.matches(settings.sections)) {
            var subSectionDom = nextUntil(elem, settings.sections, settings.subSections);
            subSectionData = populateSectionData(subSectionDom, id, settings);
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVsYXRlU2VjdGlvbkRhdGEuanMob3JpZ2luYWwpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sZUFBZTtBQUV0QixlQUFlLFNBQVMsb0JBQW9CLFFBQVUsRUFBQSxNQUFRLEVBQUEsVUFBVTtJQUN0RSxLQUFBLENBQU0sY0FBYztJQUNwQixNQUFBLENBQUEsQ0FBQSxDQUFTLE1BQUEsQ0FBQSxDQUFBLENBQVM7SUFFbEIsUUFBQSxDQUFTLE9BQVQsRUFBa0IsSUFBTSxFQUFBLEdBQVAsR0FBYTtRQUM1QixHQUFBLENBQUksaUJBQWlCO1FBQ3JCLEtBQUEsQ0FBTSxLQUFLLFVBQUEsQ0FBVyxNQUFNLE1BQUEsQ0FBQSxDQUFBLEVBQVUsQ0FBQSxDQUFBLENBQUEsQ0FBSTtRQUUxQyxJQUFJLFFBQUEsQ0FBUyxXQUFULENBQUEsRUFBQSxDQUF3QixJQUFBLENBQUssT0FBTCxDQUFhLFFBQUEsQ0FBUyxXQUFXO1lBQzNELEtBQUEsQ0FBTSxnQkFBZ0IsU0FBQSxDQUNwQixNQUNBLFFBQUEsQ0FBUyxVQUNULFFBQUEsQ0FBUztZQUVYLGNBQUEsQ0FBQSxDQUFBLENBQWlCLG1CQUFBLENBQW9CLGVBQWUsSUFBSTtRQUM5RDtRQUVJLFdBQUEsQ0FBWSxJQUFaLENBQWlCO1lBQ2YsSUFBSSxFQURXLENBQUE7WUFFZixNQUFNLElBQUEsQ0FBSyxTQUFMLENBQUEsRUFBQSxDQUFrQixJQUFBLENBQUssV0FGZCxDQUFBO1lBR2YsV0FBVyxZQUFBLENBQWEsS0FIVCxDQUFBO1lBSWYsYUFBYTs7SUFFbkI7SUFFRSxPQUFPO0FBQ1Q7O0FBOUJBIiwiZmlsZSI6InBvcHVsYXRlU2VjdGlvbkRhdGEuanMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldE9yU2V0SUQgZnJvbSAnLi9nZXRPclNldElEJztcbmltcG9ydCBnZXRZUG9zaXRpb24gZnJvbSAnLi9nZXRZUG9zaXRpb24nO1xuaW1wb3J0IG5leHRVbnRpbCBmcm9tICcuL25leHRVbnRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBvcHVsYXRlU2VjdGlvbkRhdGEoc2VjdGlvbnMsIHByZWZpeCwgc2V0dGluZ3MpIHtcbiAgY29uc3Qgc2VjdGlvbkRhdGEgPSBbXTtcbiAgcHJlZml4ID0gcHJlZml4ICsgJ19fJztcblxuICBzZWN0aW9ucy5mb3JFYWNoKChlbGVtLCBpKSA9PiB7XG4gICAgbGV0IHN1YlNlY3Rpb25EYXRhID0gW107XG4gICAgY29uc3QgaWQgPSBnZXRPclNldElEKGVsZW0sIHByZWZpeCArIChpICsgMSkpO1xuXG4gICAgaWYgKHNldHRpbmdzLnN1YlNlY3Rpb25zICYmIGVsZW0ubWF0Y2hlcyhzZXR0aW5ncy5zZWN0aW9ucykpIHtcbiAgICAgIGNvbnN0IHN1YlNlY3Rpb25Eb20gPSBuZXh0VW50aWwoXG4gICAgICAgIGVsZW0sXG4gICAgICAgIHNldHRpbmdzLnNlY3Rpb25zLFxuICAgICAgICBzZXR0aW5ncy5zdWJTZWN0aW9uc1xuICAgICAgKTtcbiAgICAgIHN1YlNlY3Rpb25EYXRhID0gcG9wdWxhdGVTZWN0aW9uRGF0YShzdWJTZWN0aW9uRG9tLCBpZCwgc2V0dGluZ3MpO1xuICAgIH1cblxuICAgIHNlY3Rpb25EYXRhLnB1c2goe1xuICAgICAgaWQ6IGlkLFxuICAgICAgdGV4dDogZWxlbS5pbm5lclRleHQgfHwgZWxlbS50ZXh0Q29udGVudCxcbiAgICAgIG9mZnNldFRvcDogZ2V0WVBvc2l0aW9uKGVsZW0pLFxuICAgICAgc3ViU2VjdGlvbnM6IHN1YlNlY3Rpb25EYXRhXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBzZWN0aW9uRGF0YTtcbn1cbiJdfQ==

function createList(data, prefix, isSubList) {
    if ( isSubList === void 0 ) isSubList = false;

    var suffix = isSubList ? '__sub-' : '__';
    var baseClass = prefix + suffix;
    var itemsMarkup = "\n    " + (data.map(function (item) { return ("<li class=\"" + baseClass + "item\" data-sn-section=\"" + (item.id) + "\">\n            <a class=\"" + baseClass + "link\" href=\"#" + (item.id) + "\">" + (item.text) + "</a>\n            " + (item.subSections && item.subSections.length ? ("" + (createList(item.subSections, prefix, true))) : '') + "\n          </li>"); }).join('')) + "\n  ";
    var list = "\n    <ol class=\"" + baseClass + "list\">\n      " + itemsMarkup + "\n    </ol>\n  ";
    return list;
}



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZUxpc3QuanMob3JpZ2luYWwpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWUsU0FBUyxXQUFXLElBQU0sRUFBQSxNQUFRLEVBQUEsU0FBQSxHQUFZLE9BQU87SUFDbEUsS0FBQSxDQUFNLFNBQVMsU0FBQSxHQUFZLFdBQVc7SUFDdEMsS0FBQSxDQUFNLFlBQVksTUFBQSxDQUFBLENBQUEsQ0FBUztJQUUzQixLQUFBLENBQU0sY0FBYyxRQUNoQixJQUFBLENBQ0MsR0FERCxDQUVFLElBQUEsSUFDRSxjQUFjLG1DQUFtQyxJQUFBLENBQUssOEJBQ3hDLHlCQUF5QixJQUFBLENBQUssT0FBTyxJQUFBLENBQUssd0JBRXBELElBQUEsQ0FBSyxXQUFMLENBQUEsRUFBQSxDQUFvQixJQUFBLENBQUssV0FBTCxDQUFpQixNQUFyQyxHQUNJLEdBQUcsVUFBQSxDQUFXLElBQUEsQ0FBSyxhQUFhLFFBQVEsTUFBeEMsSUFDQSxtQkFMUixFQUhKLENBWUMsSUFaRCxDQVlNLE9BYlU7SUFnQnBCLEtBQUEsQ0FBTSxPQUFPLG1CQUNFLHlCQUNULHlCQUZPO0lBTWIsT0FBTztBQUNUOztBQTNCQSIsImZpbGUiOiJjcmVhdGVMaXN0LmpzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUxpc3QoZGF0YSwgcHJlZml4LCBpc1N1Ykxpc3QgPSBmYWxzZSkge1xuICBjb25zdCBzdWZmaXggPSBpc1N1Ykxpc3QgPyAnX19zdWItJyA6ICdfXyc7XG4gIGNvbnN0IGJhc2VDbGFzcyA9IHByZWZpeCArIHN1ZmZpeDtcblxuICBjb25zdCBpdGVtc01hcmt1cCA9IGBcbiAgICAke2RhdGFcbiAgICAgIC5tYXAoXG4gICAgICAgIGl0ZW0gPT5cbiAgICAgICAgICBgPGxpIGNsYXNzPVwiJHtiYXNlQ2xhc3N9aXRlbVwiIGRhdGEtc24tc2VjdGlvbj1cIiR7aXRlbS5pZH1cIj5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiJHtiYXNlQ2xhc3N9bGlua1wiIGhyZWY9XCIjJHtpdGVtLmlkfVwiPiR7aXRlbS50ZXh0fTwvYT5cbiAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgIGl0ZW0uc3ViU2VjdGlvbnMgJiYgaXRlbS5zdWJTZWN0aW9ucy5sZW5ndGhcbiAgICAgICAgICAgICAgICA/IGAke2NyZWF0ZUxpc3QoaXRlbS5zdWJTZWN0aW9ucywgcHJlZml4LCB0cnVlKX1gXG4gICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvbGk+YFxuICAgICAgKVxuICAgICAgLmpvaW4oJycpfVxuICBgO1xuXG4gIGNvbnN0IGxpc3QgPSBgXG4gICAgPG9sIGNsYXNzPVwiJHtiYXNlQ2xhc3N9bGlzdFwiPlxuICAgICAgJHtpdGVtc01hcmt1cH1cbiAgICA8L29sPlxuICBgO1xuXG4gIHJldHVybiBsaXN0O1xufVxuIl19

function createNav(data, prefix) {
    var nav = document.createElement('nav');
    nav.className = prefix;
    nav.setAttribute('role', 'navigation');
    nav.innerHTML = createList(data, prefix);
    return nav;
}



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZU5hdi5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxnQkFBZ0I7QUFFdkIsZUFBZSxTQUFTLFVBQVUsSUFBTSxFQUFBLFFBQVE7SUFDOUMsS0FBQSxDQUFNLE1BQU0sUUFBQSxDQUFTLGFBQVQsQ0FBdUI7SUFDbkMsR0FBQSxDQUFJLFNBQUosQ0FBQSxDQUFBLENBQWdCO0lBQ2hCLEdBQUEsQ0FBSSxZQUFKLENBQWlCLFFBQVE7SUFFekIsR0FBQSxDQUFJLFNBQUosQ0FBQSxDQUFBLENBQWdCLFVBQUEsQ0FBVyxNQUFNO0lBRWpDLE9BQU87QUFDVDs7QUFWQSIsImZpbGUiOiJjcmVhdGVOYXYuanMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUxpc3QgZnJvbSAnLi9jcmVhdGVMaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTmF2KGRhdGEsIHByZWZpeCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgbmF2LmNsYXNzTmFtZSA9IHByZWZpeDtcbiAgbmF2LnNldEF0dHJpYnV0ZSgncm9sZScsICduYXZpZ2F0aW9uJyk7XG5cbiAgbmF2LmlubmVySFRNTCA9IGNyZWF0ZUxpc3QoZGF0YSwgcHJlZml4KTtcblxuICByZXR1cm4gbmF2O1xufVxuIl19

function insertNav(nav, settings) {
    var target = settings.insertTarget;
    var location = settings.insertLocation;
    if (location === 'append') {
        target.appendChild(nav);
    } else if (location === 'prepend') {
        target.insertBefore(nav, target.firstChild);
    } else if (location === 'before') {
        target.parentNode.insertBefore(nav, target);
    } else if (location === 'after') {
        target.parentNode.insertBefore(nav, target.nextSibling);
    }
}



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc2VydE5hdi5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxTQUFTLFVBQVUsR0FBSyxFQUFBLFVBQVU7SUFDL0MsS0FBQSxDQUFNLFNBQVMsUUFBQSxDQUFTO0lBQ3hCLEtBQUEsQ0FBTSxXQUFXLFFBQUEsQ0FBUztJQUUxQixJQUFJLFFBQUEsQ0FBQSxHQUFBLENBQWEsVUFBVTtRQUN6QixNQUFBLENBQU8sV0FBUCxDQUFtQjtJQUN2QixPQUFTLElBQUksUUFBQSxDQUFBLEdBQUEsQ0FBYSxXQUFXO1FBQ2pDLE1BQUEsQ0FBTyxZQUFQLENBQW9CLEtBQUssTUFBQSxDQUFPO0lBQ3BDLE9BQVMsSUFBSSxRQUFBLENBQUEsR0FBQSxDQUFhLFVBQVU7UUFDaEMsTUFBQSxDQUFPLFVBQVAsQ0FBa0IsWUFBbEIsQ0FBK0IsS0FBSztJQUN4QyxPQUFTLElBQUksUUFBQSxDQUFBLEdBQUEsQ0FBYSxTQUFTO1FBQy9CLE1BQUEsQ0FBTyxVQUFQLENBQWtCLFlBQWxCLENBQStCLEtBQUssTUFBQSxDQUFPO0lBQy9DO0FBQ0E7O0FBYkEiLCJmaWxlIjoiaW5zZXJ0TmF2LmpzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluc2VydE5hdihuYXYsIHNldHRpbmdzKSB7XG4gIGNvbnN0IHRhcmdldCA9IHNldHRpbmdzLmluc2VydFRhcmdldDtcbiAgY29uc3QgbG9jYXRpb24gPSBzZXR0aW5ncy5pbnNlcnRMb2NhdGlvbjtcblxuICBpZiAobG9jYXRpb24gPT09ICdhcHBlbmQnKSB7XG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKG5hdik7XG4gIH0gZWxzZSBpZiAobG9jYXRpb24gPT09ICdwcmVwZW5kJykge1xuICAgIHRhcmdldC5pbnNlcnRCZWZvcmUobmF2LCB0YXJnZXQuZmlyc3RDaGlsZCk7XG4gIH0gZWxzZSBpZiAobG9jYXRpb24gPT09ICdiZWZvcmUnKSB7XG4gICAgdGFyZ2V0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5hdiwgdGFyZ2V0KTtcbiAgfSBlbHNlIGlmIChsb2NhdGlvbiA9PT0gJ2FmdGVyJykge1xuICAgIHRhcmdldC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuYXYsIHRhcmdldC5uZXh0U2libGluZyk7XG4gIH1cbn1cbiJdfQ==

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGN1bGF0ZUVhc2VkVGltZXMuanMob3JpZ2luYWwpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVMsYUFBYztBQUV2QixlQUFlLFNBQVMsb0JBQW9CLFdBQWEsRUFBQSxRQUFVLEVBQUEsV0FBVztJQUM1RSxLQUFBLENBQU0sYUFBYSxDQUFDO1FBQUUsTUFBTSxDQUFSLENBQUE7UUFBVyxXQUFXOztJQUMxQyxLQUFBLENBQU0sWUFBWSxJQUFBLENBQUEsQ0FBQSxDQUFPO0lBQ3pCLEdBQUEsQ0FBSSxlQUFlO0lBQ25CLEdBQUEsQ0FBSTtJQUVKLE9BQU8sWUFBQSxDQUFBLENBQUEsQ0FBZSxVQUFVO1FBQzlCLFlBQUEsQ0FBQSxFQUFBLENBQWdCO1FBQ2hCLFNBQUEsQ0FBQSxDQUFBLENBQVksTUFBQSxDQUFPLFlBQVAsQ0FBb0IsWUFBQSxDQUFBLENBQUEsQ0FBZTtRQUMvQyxVQUFBLENBQVcsSUFBWCxDQUFnQjtZQUFFLE1BQU0sWUFBUixDQUFBO1lBQXNCLFdBQVc7O0lBQ3JEO0lBR0UsT0FBTztBQUNUOztBQWhCQSIsImZpbGUiOiJjYWxjdWxhdGVFYXNlZFRpbWVzLmpzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhc2luZyB9IGZyb20gJy4vZWFzaW5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FsY3VsYXRlRWFzZWRUaW1lcyhlYXNpbmdTdHlsZSwgZHVyYXRpb24sIGZyYW1lcmF0ZSkge1xuICBjb25zdCBlYXNlZFRpbWVzID0gW3sgdGltZTogMCwgZWFzZWRUaW1lOiAwIH1dO1xuICBjb25zdCBpbmNyZW1lbnQgPSAxMDAwIC8gZnJhbWVyYXRlO1xuICBsZXQgZWxsYXBzZWRUaW1lID0gMDtcbiAgbGV0IGVhc2VkVGltZTtcblxuICB3aGlsZSAoZWxsYXBzZWRUaW1lIDwgZHVyYXRpb24pIHtcbiAgICBlbGxhcHNlZFRpbWUgKz0gaW5jcmVtZW50O1xuICAgIGVhc2VkVGltZSA9IGVhc2luZ1tlYXNpbmdTdHlsZV0oZWxsYXBzZWRUaW1lIC8gZHVyYXRpb24pO1xuICAgIGVhc2VkVGltZXMucHVzaCh7IHRpbWU6IGVsbGFwc2VkVGltZSwgZWFzZWRUaW1lOiBlYXNlZFRpbWUgfSk7XG4gIH1cblxuICAvL2NvbnNvbGUubG9nKGVhc2VkVGltZXMpO1xuICByZXR1cm4gZWFzZWRUaW1lcztcbn1cbiJdfQ==

function scrollTo(targetPosition, easingStyle) {
    var this$1 = this;

    return new Promise(function (resolve, reject) { return new Promise((function ($return, $error) {
        var startingPosition, distance, duration, framerate, increment;
        var ellapsedTime, easedTime, next;
        function animateScroll() {
            ellapsedTime += increment;
            easedTime = easing[easingStyle](ellapsedTime / duration);
            next = easedTime * distance + startingPosition;
            window.scroll(0, next);
            if (ellapsedTime < duration) {
                setTimeout(animateScroll, increment);
            } else {
                resolve();
            }
        }
        
        if (typeof targetPosition !== 'number') {
            return $return(reject(new Error('First argument must be a number')));
        }
        easingStyle = easingStyle || 'linear';
        if (typeof easingStyle !== 'string') {
            return $return(reject(new Error('Second argument must be a string')));
        }
        startingPosition = window.pageYOffset;
        distance = targetPosition - startingPosition;
        return calculateScrollDuration(distance).then((function ($await_1) {
            try {
                duration = $await_1;
                framerate = 50;
                increment = 1000 / framerate;
                ellapsedTime = 0;
                animateScroll();
                return $return();
            } catch ($boundEx) {
                return $error($boundEx);
            }
        }).bind(this), $error);
    }).bind(this$1)); });
}



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbFRvLmpzKG9yaWdpbmFsKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLDZCQUE2QjtBQUNwQyxPQUFPLHlCQUF5QjtBQUNoQyxRQUFTLGFBQWM7QUFHdkIsZUFBZSxTQUFTLFNBQVMsY0FBZ0IsRUFBQSxhQUFhO0lBQzVELE9BQU8sSUFBSSxPQUFKLEVBQW1CLE9BQVMsRUFBQSxRQUFoQjs7O1FBbUJqQixTQUFTLGdCQUFnQjtZQUN2QixZQUFBLENBQUEsRUFBQSxDQUFnQjtZQUNoQixTQUFBLENBQUEsQ0FBQSxDQUFZLE1BQUEsQ0FBTyxZQUFQLENBQW9CLFlBQUEsQ0FBQSxDQUFBLENBQWU7WUFDL0MsSUFBQSxDQUFBLENBQUEsQ0FBTyxTQUFBLENBQUEsQ0FBQSxDQUFZLFFBQVosQ0FBQSxDQUFBLENBQXVCO1lBQzlCLE1BQUEsQ0FBTyxNQUFQLENBQWMsR0FBRztZQUVqQixJQUFJLFlBQUEsQ0FBQSxDQUFBLENBQWUsVUFBVTtnQkFDM0IsVUFBQSxDQUFXLGVBQWU7WUFDbEMsT0FBYTtnQkFDTCxPQUFBO1lBQ1I7UUFDQTs7UUE3QkksSUFBSSxNQUFBLENBQU8sY0FBUCxDQUFBLEdBQUEsQ0FBMEIsVUFBVTtZQUN0QyxlQUFPLE1BQUEsQ0FBTyxJQUFJLEtBQUosQ0FBVTtRQUM5QjtRQUVJLFdBQUEsQ0FBQSxDQUFBLENBQWMsV0FBQSxDQUFBLEVBQUEsQ0FBZTtRQUM3QixJQUFJLE1BQUEsQ0FBTyxXQUFQLENBQUEsR0FBQSxDQUF1QixVQUFVO1lBQ25DLGVBQU8sTUFBQSxDQUFPLElBQUksS0FBSixDQUFVO1FBQzlCO1FBRVUsbUJBQW1CLE1BQUEsQ0FBTztRQUMxQixXQUFXLGNBQUEsQ0FBQSxDQUFBLENBQWlCO1FBQ2pCLE9BQU0sdUJBQUEsQ0FBd0IsVUFBOUI7O2dCQUFYLFdBQVc7Z0JBQ1gsWUFBWTtnQkFDWixZQUFZLElBQUEsQ0FBQSxDQUFBLENBQU87Z0JBQ3JCLGVBQWU7Z0JBaUJuQixhQUFBOzs7Ozs7O0FBRUo7O0FBeENBIiwiZmlsZSI6InNjcm9sbFRvLmpzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjYWxjdWxhdGVTY3JvbGxEdXJhdGlvbiBmcm9tICcuL3V0aWwvY2FsY3VsYXRlU2Nyb2xsRHVyYXRpb24nO1xuaW1wb3J0IGNhbGN1bGF0ZUVhc2VkVGltZXMgZnJvbSAnLi91dGlsL2NhbGN1bGF0ZUVhc2VkVGltZXMnO1xuaW1wb3J0IHsgZWFzaW5nIH0gZnJvbSAnLi91dGlsL2Vhc2luZyc7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzY3JvbGxUbyh0YXJnZXRQb3NpdGlvbiwgZWFzaW5nU3R5bGUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBpZiAodHlwZW9mIHRhcmdldFBvc2l0aW9uICE9PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKSk7XG4gICAgfVxuXG4gICAgZWFzaW5nU3R5bGUgPSBlYXNpbmdTdHlsZSB8fCAnbGluZWFyJztcbiAgICBpZiAodHlwZW9mIGVhc2luZ1N0eWxlICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoJ1NlY29uZCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJykpO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0aW5nUG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgY29uc3QgZGlzdGFuY2UgPSB0YXJnZXRQb3NpdGlvbiAtIHN0YXJ0aW5nUG9zaXRpb247XG4gICAgY29uc3QgZHVyYXRpb24gPSBhd2FpdCBjYWxjdWxhdGVTY3JvbGxEdXJhdGlvbihkaXN0YW5jZSk7XG4gICAgY29uc3QgZnJhbWVyYXRlID0gNTA7XG4gICAgY29uc3QgaW5jcmVtZW50ID0gMTAwMCAvIGZyYW1lcmF0ZTtcbiAgICBsZXQgZWxsYXBzZWRUaW1lID0gMDtcbiAgICBsZXQgZWFzZWRUaW1lO1xuICAgIGxldCBuZXh0O1xuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZVNjcm9sbCgpIHtcbiAgICAgIGVsbGFwc2VkVGltZSArPSBpbmNyZW1lbnQ7XG4gICAgICBlYXNlZFRpbWUgPSBlYXNpbmdbZWFzaW5nU3R5bGVdKGVsbGFwc2VkVGltZSAvIGR1cmF0aW9uKTtcbiAgICAgIG5leHQgPSBlYXNlZFRpbWUgKiBkaXN0YW5jZSArIHN0YXJ0aW5nUG9zaXRpb247XG4gICAgICB3aW5kb3cuc2Nyb2xsKDAsIG5leHQpO1xuXG4gICAgICBpZiAoZWxsYXBzZWRUaW1lIDwgZHVyYXRpb24pIHtcbiAgICAgICAgc2V0VGltZW91dChhbmltYXRlU2Nyb2xsLCBpbmNyZW1lbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFuaW1hdGVTY3JvbGwoKTtcbiAgfSk7XG59XG4iXX0=

function setupClickHandlers(links, data, cb) {
    function clickHandler(event) {
        event.preventDefault();
        var activeOffset = window.innerHeight / 3 / 2 + 80;
        var targetYPosition = getTargetYPosition(event.target, data);
        var scrollYTarget = targetYPosition - activeOffset;
        scrollTo(scrollYTarget, 'easeOutQuad').then(cb());
    }
    
    links.forEach(function (link) {
        link.addEventListener('click', clickHandler);
    });
    return clickHandler;
}



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHVwQ2xpY2tIYW5kbGVycy5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyx3QkFBd0I7QUFDL0IsT0FBTyxjQUFjO0FBRXJCLGVBQWUsU0FBUyxtQkFBbUIsS0FBTyxFQUFBLElBQU0sRUFBQSxJQUFJO0lBQzFELFNBQVMsYUFBYSxPQUFPO1FBQzNCLEtBQUEsQ0FBTSxjQUFOO1FBRUEsS0FBQSxDQUFNLGVBQWUsTUFBQSxDQUFPLFdBQVAsQ0FBQSxDQUFBLENBQXFCLENBQXJCLENBQUEsQ0FBQSxDQUF5QixDQUF6QixDQUFBLENBQUEsQ0FBNkI7UUFDbEQsS0FBQSxDQUFNLGtCQUFrQixrQkFBQSxDQUFtQixLQUFBLENBQU0sUUFBUTtRQUN6RCxLQUFBLENBQU0sZ0JBQWdCLGVBQUEsQ0FBQSxDQUFBLENBQWtCO1FBRXhDLFFBQUEsQ0FBUyxlQUFlLGNBQXhCLENBQXVDLElBQXZDLENBQTRDLEVBQUE7SUFDaEQ7O0lBRUUsS0FBQSxDQUFNLE9BQU4sQ0FBYyxJQUFBLElBQVE7UUFDcEIsSUFBQSxDQUFLLGdCQUFMLENBQXNCLFNBQVM7SUFDbkM7SUFFRSxPQUFPO0FBQ1Q7O0FBbkJBIiwiZmlsZSI6InNldHVwQ2xpY2tIYW5kbGVycy5qcyhvcmlnaW5hbCkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0VGFyZ2V0WVBvc2l0aW9uIGZyb20gJy4vdXRpbC9nZXRUYXJnZXRZUG9zaXRpb24nO1xuaW1wb3J0IHNjcm9sbFRvIGZyb20gJy4vc2Nyb2xsVG8nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXR1cENsaWNrSGFuZGxlcnMobGlua3MsIGRhdGEsIGNiKSB7XG4gIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBhY3RpdmVPZmZzZXQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAzIC8gMiArIDgwO1xuICAgIGNvbnN0IHRhcmdldFlQb3NpdGlvbiA9IGdldFRhcmdldFlQb3NpdGlvbihldmVudC50YXJnZXQsIGRhdGEpO1xuICAgIGNvbnN0IHNjcm9sbFlUYXJnZXQgPSB0YXJnZXRZUG9zaXRpb24gLSBhY3RpdmVPZmZzZXQ7XG5cbiAgICBzY3JvbGxUbyhzY3JvbGxZVGFyZ2V0LCAnZWFzZU91dFF1YWQnKS50aGVuKGNiKCkpO1xuICB9XG5cbiAgbGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNsaWNrSGFuZGxlcjtcbn1cbiJdfQ==

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
    return activeSection;
}



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldEFjdGl2ZVNlY3Rpb24uanMob3JpZ2luYWwpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWUsU0FBUyxpQkFBaUIsSUFBTSxFQUFBLFVBQVksRUFBQSxlQUFlO0lBQ3hFLEdBQUEsQ0FBSTtJQUVKLElBQUEsQ0FBSyxPQUFMLENBQWEsT0FBQSxJQUFXO1FBQ3RCLElBQUksT0FBQSxDQUFRLFNBQVIsQ0FBQSxDQUFBLENBQW9CLGVBQWU7WUFDckMsSUFBSSxDQUFDLGFBQUQsQ0FBQSxFQUFBLENBQWtCLE9BQUEsQ0FBUSxTQUFSLENBQUEsQ0FBQSxDQUFvQixZQUFZO2dCQUNwRCxhQUFBLENBQUEsQ0FBQSxDQUFnQjtZQUN4QjtRQUNBLE9BQVc7WUFDTCxhQUFBLENBQUEsQ0FBQSxDQUFnQjtRQUN0QjtJQUNBO0lBRUUsT0FBTztBQUNUOztBQWRBIiwiZmlsZSI6ImdldEFjdGl2ZVNlY3Rpb24uanMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QWN0aXZlU2VjdGlvbihkYXRhLCBib3VuZHJ5VG9wLCBib3VuZHJ5Qm90dG9tKSB7XG4gIGxldCBhY3RpdmVTZWN0aW9uO1xuXG4gIGRhdGEuZm9yRWFjaChzZWN0aW9uID0+IHtcbiAgICBpZiAoc2VjdGlvbi5vZmZzZXRUb3AgPiBib3VuZHJ5Qm90dG9tKSB7XG4gICAgICBpZiAoIWFjdGl2ZVNlY3Rpb24gJiYgc2VjdGlvbi5vZmZzZXRUb3AgPCBib3VuZHJ5VG9wKSB7XG4gICAgICAgIGFjdGl2ZVNlY3Rpb24gPSBzZWN0aW9uO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhY3RpdmVTZWN0aW9uID0gc2VjdGlvbjtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBhY3RpdmVTZWN0aW9uO1xufVxuIl19

function updateActiveNavItem(activeSection, nav) {
    var previousActive = nav.querySelector('[data-sn-active]');
    if (!activeSection) {
        if (previousActive) {
            previousActive.classList.remove('scroll-nav__item--active');
            previousActive.removeAttribute('data-sn-active');
        }
        return;
    }
    var currentActive = nav.querySelector('[data-sn-section=' + activeSection.id + ']');
    if (currentActive && currentActive !== previousActive) {
        if (previousActive) {
            previousActive.classList.remove('scroll-nav__item--active');
            previousActive.removeAttribute('data-sn-active');
        }
        currentActive.classList.add('scroll-nav__item--active');
        currentActive.setAttribute('data-sn-active', true);
    }
}



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZUFjdGl2ZU5hdkl0ZW0uanMob3JpZ2luYWwpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWUsU0FBUyxvQkFBb0IsYUFBZSxFQUFBLEtBQUs7SUFDOUQsS0FBQSxDQUFNLGlCQUFpQixHQUFBLENBQUksYUFBSixDQUFrQjtJQUV6QyxJQUFJLENBQUMsZUFBZTtRQUNsQixJQUFJLGdCQUFnQjtZQUNsQixjQUFBLENBQWUsU0FBZixDQUF5QixNQUF6QixDQUFnQztZQUNoQyxjQUFBLENBQWUsZUFBZixDQUErQjtRQUNyQztRQUVJO0lBQ0o7SUFFRSxLQUFBLENBQU0sZ0JBQWdCLEdBQUEsQ0FBSSxhQUFKLENBQ3BCLG1CQUFBLENBQUEsQ0FBQSxDQUFzQixhQUFBLENBQWMsRUFBcEMsQ0FBQSxDQUFBLENBQXlDO0lBRzNDLElBQUksYUFBQSxDQUFBLEVBQUEsQ0FBaUIsYUFBQSxDQUFBLEdBQUEsQ0FBa0IsZ0JBQWdCO1FBQ3JELElBQUksZ0JBQWdCO1lBQ2xCLGNBQUEsQ0FBZSxTQUFmLENBQXlCLE1BQXpCLENBQWdDO1lBQ2hDLGNBQUEsQ0FBZSxlQUFmLENBQStCO1FBQ3JDO1FBQ0ksYUFBQSxDQUFjLFNBQWQsQ0FBd0IsR0FBeEIsQ0FBNEI7UUFDNUIsYUFBQSxDQUFjLFlBQWQsQ0FBMkIsa0JBQWtCO0lBQ2pEO0FBQ0E7O0FBeEJBIiwiZmlsZSI6InVwZGF0ZUFjdGl2ZU5hdkl0ZW0uanMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlQWN0aXZlTmF2SXRlbShhY3RpdmVTZWN0aW9uLCBuYXYpIHtcbiAgY29uc3QgcHJldmlvdXNBY3RpdmUgPSBuYXYucXVlcnlTZWxlY3RvcignW2RhdGEtc24tYWN0aXZlXScpO1xuXG4gIGlmICghYWN0aXZlU2VjdGlvbikge1xuICAgIGlmIChwcmV2aW91c0FjdGl2ZSkge1xuICAgICAgcHJldmlvdXNBY3RpdmUuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLW5hdl9faXRlbS0tYWN0aXZlJyk7XG4gICAgICBwcmV2aW91c0FjdGl2ZS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc24tYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgY3VycmVudEFjdGl2ZSA9IG5hdi5xdWVyeVNlbGVjdG9yKFxuICAgICdbZGF0YS1zbi1zZWN0aW9uPScgKyBhY3RpdmVTZWN0aW9uLmlkICsgJ10nXG4gICk7XG5cbiAgaWYgKGN1cnJlbnRBY3RpdmUgJiYgY3VycmVudEFjdGl2ZSAhPT0gcHJldmlvdXNBY3RpdmUpIHtcbiAgICBpZiAocHJldmlvdXNBY3RpdmUpIHtcbiAgICAgIHByZXZpb3VzQWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbC1uYXZfX2l0ZW0tLWFjdGl2ZScpO1xuICAgICAgcHJldmlvdXNBY3RpdmUucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNuLWFjdGl2ZScpO1xuICAgIH1cbiAgICBjdXJyZW50QWN0aXZlLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1uYXZfX2l0ZW0tLWFjdGl2ZScpO1xuICAgIGN1cnJlbnRBY3RpdmUuc2V0QXR0cmlidXRlKCdkYXRhLXNuLWFjdGl2ZScsIHRydWUpO1xuICB9XG59XG4iXX0=

function setupScrollHandler(data, nav) {
    function scrollHandler() {
        var top = window.scrollY || window.pageYOffset || document.body.scrollTop;
        var boundryTop = top + 80;
        var boundryBottom = boundryTop + window.innerHeight / 3;
        var activeSection = getActiveSection(data, boundryTop, boundryBottom);
        updateActiveNavItem(activeSection, nav);
        return activeSection;
    }
    
    window.addEventListener('scroll', scrollHandler);
    return scrollHandler;
}



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHVwU2Nyb2xsSGFuZGxlci5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxzQkFBc0I7QUFDN0IsT0FBTyx5QkFBeUI7QUFFaEMsZUFBZSxTQUFTLG1CQUFtQixJQUFNLEVBQUEsS0FBSztJQUNwRCxTQUFTLGdCQUFnQjtRQUN2QixLQUFBLENBQU0sTUFBTSxNQUFBLENBQU8sT0FBUCxDQUFBLEVBQUEsQ0FBa0IsTUFBQSxDQUFPLFdBQXpCLENBQUEsRUFBQSxDQUF3QyxRQUFBLENBQVMsSUFBVCxDQUFjO1FBQ2xFLEtBQUEsQ0FBTSxhQUFhLEdBQUEsQ0FBQSxDQUFBLENBQU07UUFDekIsS0FBQSxDQUFNLGdCQUFnQixVQUFBLENBQUEsQ0FBQSxDQUFhLE1BQUEsQ0FBTyxXQUFQLENBQUEsQ0FBQSxDQUFxQjtRQUN4RCxLQUFBLENBQU0sZ0JBQWdCLGdCQUFBLENBQWlCLE1BQU0sWUFBWTtRQUV6RCxtQkFBQSxDQUFvQixlQUFlO1FBRW5DLE9BQU87SUFDWDs7SUFFRSxNQUFBLENBQU8sZ0JBQVAsQ0FBd0IsVUFBVTtJQUVsQyxPQUFPO0FBQ1Q7O0FBbEJBIiwiZmlsZSI6InNldHVwU2Nyb2xsSGFuZGxlci5qcyhvcmlnaW5hbCkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0QWN0aXZlU2VjdGlvbiBmcm9tICcuL3V0aWwvZ2V0QWN0aXZlU2VjdGlvbic7XG5pbXBvcnQgdXBkYXRlQWN0aXZlTmF2SXRlbSBmcm9tICcuL3V0aWwvdXBkYXRlQWN0aXZlTmF2SXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldHVwU2Nyb2xsSGFuZGxlcihkYXRhLCBuYXYpIHtcbiAgZnVuY3Rpb24gc2Nyb2xsSGFuZGxlcigpIHtcbiAgICBjb25zdCB0b3AgPSB3aW5kb3cuc2Nyb2xsWSB8fCB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgY29uc3QgYm91bmRyeVRvcCA9IHRvcCArIDgwO1xuICAgIGNvbnN0IGJvdW5kcnlCb3R0b20gPSBib3VuZHJ5VG9wICsgd2luZG93LmlubmVySGVpZ2h0IC8gMztcbiAgICBjb25zdCBhY3RpdmVTZWN0aW9uID0gZ2V0QWN0aXZlU2VjdGlvbihkYXRhLCBib3VuZHJ5VG9wLCBib3VuZHJ5Qm90dG9tKTtcblxuICAgIHVwZGF0ZUFjdGl2ZU5hdkl0ZW0oYWN0aXZlU2VjdGlvbiwgbmF2KTtcblxuICAgIHJldHVybiBhY3RpdmVTZWN0aW9uO1xuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpO1xuXG4gIHJldHVybiBzY3JvbGxIYW5kbGVyO1xufVxuIl19

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

var clickHandler;
var scrollHandler;
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
        insertLocation: 'before'
    };
    var settings = extend(defaults, options);
    var locationOptions = ['append','prepend','after','before'];
    if (!isElement(elem)) {
        if (settings.debug) {
            console.error(("\n        scrollNav build failed, content argument \"" + elem + "\" is not an HTML Element\n      "));
        }
        return;
    }
    if (settings.insertTarget && !isElement(settings.insertTarget)) {
        if (settings.debug) {
            console.error(("\n        scrollNav build failed, options.insertTarget \"" + elem + "\" is not an HTML Element\n      "));
        }
        return;
    }
    if (locationOptions.indexOf(settings.insertLocation) < 1) {
        if (settings.debug) {
            console.error(("\n        scrollNav build failed, options.insertLocation \"" + (settings.insertLocation) + "\" is not a valid option\n      "));
        }
        return;
    }
    var sectionsDom = elem.querySelectorAll(settings.sections);
    if (!sectionsDom.length) {
        if (settings.debug) {
            console.error(("\n        scrollNav build failed, could not find any \"" + (settings.sections) + "\"\n        elements inside of \"" + elem + "\"\n      "));
        }
        return;
    }
    var data = populateSectionData(sectionsDom, 'scroll-nav', settings);
    var nav = createNav(data, 'scroll-nav', settings);
    insertNav(nav, settings);
    clickHandler = setupClickHandlers(nav.querySelectorAll('a'), data);
    scrollHandler = setupScrollHandler(data, nav);
    if (settings.onInit) 
        { return settings.onInit(); }
}

function destroy(options) {
    var defaults = {};
    var settings = extend(defaults, options);
    var nav = document.querySelector('.scroll-nav');
    teardownClickHandlers(nav, clickHandler);
    teardownScrollHandler(scrollHandler);
    nav.remove();
    if (settings.onDestroy) 
        { return settings.onDestroy(); }
}

var scrollNav = {
    init: init,
    destroy: destroy
};



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbE5hdi5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUEsT0FBTyxZQUFZO0FBQ25CLE9BQU8seUJBQXlCO0FBQ2hDLE9BQU8sZUFBZTtBQUN0QixPQUFPLGVBQWU7QUFDdEIsT0FBTyx3QkFBd0I7QUFDL0IsT0FBTyx3QkFBd0I7QUFDL0IsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFFbEMsR0FBQSxDQUFJO0FBQ0osR0FBQSxDQUFJO0FBSUosSUFBSSxDQUFDLE9BQUEsQ0FBUSxTQUFSLENBQWtCLFNBQVM7SUFDOUIsT0FBQSxDQUFRLFNBQVIsQ0FBa0IsT0FBbEIsQ0FBQSxDQUFBLENBQ0UsT0FBQSxDQUFRLFNBQVIsQ0FBa0IsaUJBQWxCLENBQUEsRUFBQSxDQUNBLE9BQUEsQ0FBUSxTQUFSLENBQWtCO0FBQ3RCO0FBRUEsU0FBUyxVQUFVLFNBQVM7SUFDMUIsT0FBTyxPQUFBLENBQUEsVUFBQSxDQUFtQjtBQUM1Qjs7QUFFQSxTQUFTLEtBQUssSUFBTSxFQUFBLFNBQVM7SUFDM0IsS0FBQSxDQUFNLFdBQVc7UUFDZixVQUFVLElBREssQ0FBQTtRQUVmLGNBQWMsSUFGQyxDQUFBO1FBR2YsZ0JBQWdCOztJQUVsQixLQUFBLENBQU0sV0FBVyxNQUFBLENBQU8sVUFBVTtJQUNsQyxLQUFBLENBQU0sa0JBQWtCLENBQUMsU0FBVSxVQUFXLFFBQVM7SUFFdkQsSUFBSSxDQUFDLFNBQUEsQ0FBVSxPQUFPO1FBQ3BCLElBQUksUUFBQSxDQUFTLE9BQU87WUFDbEIsT0FBQSxDQUFRLEtBQVIsQ0FBYyxzREFDZ0Msb0NBRGhDO1FBR3BCO1FBQ0k7SUFDSjtJQUVFLElBQUksUUFBQSxDQUFTLFlBQVQsQ0FBQSxFQUFBLENBQXlCLENBQUMsU0FBQSxDQUFVLFFBQUEsQ0FBUyxlQUFlO1FBQzlELElBQUksUUFBQSxDQUFTLE9BQU87WUFDbEIsT0FBQSxDQUFRLEtBQVIsQ0FBYywwREFDb0Msb0NBRHBDO1FBR3BCO1FBQ0k7SUFDSjtJQUVFLElBQUksZUFBQSxDQUFnQixPQUFoQixDQUF3QixRQUFBLENBQVMsZUFBakMsQ0FBQSxDQUFBLENBQW1ELEdBQUc7UUFDeEQsSUFBSSxRQUFBLENBQVMsT0FBTztZQUNsQixPQUFBLENBQVEsS0FBUixDQUFjLDREQUVWLFFBQUEsQ0FBUyw2Q0FGQztRQUtwQjtRQUNJO0lBQ0o7SUFFRSxLQUFBLENBQU0sY0FBYyxJQUFBLENBQUssZ0JBQUwsQ0FBc0IsUUFBQSxDQUFTO0lBRW5ELElBQUksQ0FBQyxXQUFBLENBQVksUUFBUTtRQUN2QixJQUFJLFFBQUEsQ0FBUyxPQUFPO1lBQ2xCLE9BQUEsQ0FBUSxLQUFSLENBQWMsd0RBQ2tDLFFBQUEsQ0FBUyx5Q0FDakMsYUFGVjtRQUlwQjtRQUNJO0lBQ0o7SUFFRSxLQUFBLENBQU0sT0FBTyxtQkFBQSxDQUFvQixhQUFhLGNBQWM7SUFDNUQsS0FBQSxDQUFNLE1BQU0sU0FBQSxDQUFVLE1BQU0sY0FBYztJQUUxQyxTQUFBLENBQVUsS0FBSztJQUNmLFlBQUEsQ0FBQSxDQUFBLENBQWUsa0JBQUEsQ0FBbUIsR0FBQSxDQUFJLGdCQUFKLENBQXFCLE1BQU07SUFDN0QsYUFBQSxDQUFBLENBQUEsQ0FBZ0Isa0JBQUEsQ0FBbUIsTUFBTTtJQUV6QyxJQUFJLFFBQUEsQ0FBUztRQUFRLE9BQU8sUUFBQSxDQUFTLE1BQVQ7QUFDOUI7O0FBRUEsU0FBUyxRQUFRLFNBQVM7SUFDeEIsS0FBQSxDQUFNLFdBQVc7SUFDakIsS0FBQSxDQUFNLFdBQVcsTUFBQSxDQUFPLFVBQVU7SUFDbEMsS0FBQSxDQUFNLE1BQU0sUUFBQSxDQUFTLGFBQVQsQ0FBdUI7SUFFbkMscUJBQUEsQ0FBc0IsS0FBSztJQUMzQixxQkFBQSxDQUFzQjtJQUN0QixHQUFBLENBQUksTUFBSjtJQUVBLElBQUksUUFBQSxDQUFTO1FBQVcsT0FBTyxRQUFBLENBQVMsU0FBVDtBQUNqQzs7QUFFQSxLQUFBLENBQU0sWUFBWTtJQUNoQixNQUFNLElBRFUsQ0FBQTtJQUVoQixTQUFTOztBQUdYLGVBQWU7QUE3R2YiLCJmaWxlIjoic2Nyb2xsTmF2LmpzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBzY3JvbGxOYXZcbiAqIGh0dHA6Ly9zY3JvbGxuYXYuY29tXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLTIwMTggSmFtZXMgV2lsc29uXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IGV4dGVuZCBmcm9tICcuL3V0aWwvZXh0ZW5kJztcbmltcG9ydCBwb3B1bGF0ZVNlY3Rpb25EYXRhIGZyb20gJy4vdXRpbC9wb3B1bGF0ZVNlY3Rpb25EYXRhJztcbmltcG9ydCBjcmVhdGVOYXYgZnJvbSAnLi91dGlsL2NyZWF0ZU5hdic7XG5pbXBvcnQgaW5zZXJ0TmF2IGZyb20gJy4vdXRpbC9pbnNlcnROYXYnO1xuaW1wb3J0IHNldHVwQ2xpY2tIYW5kbGVycyBmcm9tICcuL3NldHVwQ2xpY2tIYW5kbGVycyc7XG5pbXBvcnQgc2V0dXBTY3JvbGxIYW5kbGVyIGZyb20gJy4vc2V0dXBTY3JvbGxIYW5kbGVyJztcbmltcG9ydCB0ZWFyZG93bkNsaWNrSGFuZGxlcnMgZnJvbSAnLi90ZWFyZG93bkNsaWNrSGFuZGxlcnMnO1xuaW1wb3J0IHRlYXJkb3duU2Nyb2xsSGFuZGxlciBmcm9tICcuL3RlYXJkb3duU2Nyb2xsSGFuZGxlcic7XG5cbmxldCBjbGlja0hhbmRsZXI7XG5sZXQgc2Nyb2xsSGFuZGxlcjtcblxuLy8gbWF0Y2hlcygpIHBvbHlmaWxsXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuaWYgKCFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKSB7XG4gIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgPVxuICAgIEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xufVxuXG5mdW5jdGlvbiBpc0VsZW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGluaXQoZWxlbSwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICBzZWN0aW9uczogJ2gyJyxcbiAgICBpbnNlcnRUYXJnZXQ6IGVsZW0sXG4gICAgaW5zZXJ0TG9jYXRpb246ICdiZWZvcmUnXG4gIH07XG4gIGNvbnN0IHNldHRpbmdzID0gZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgY29uc3QgbG9jYXRpb25PcHRpb25zID0gWydhcHBlbmQnLCAncHJlcGVuZCcsICdhZnRlcicsICdiZWZvcmUnXTtcblxuICBpZiAoIWlzRWxlbWVudChlbGVtKSkge1xuICAgIGlmIChzZXR0aW5ncy5kZWJ1Zykge1xuICAgICAgY29uc29sZS5lcnJvcihgXG4gICAgICAgIHNjcm9sbE5hdiBidWlsZCBmYWlsZWQsIGNvbnRlbnQgYXJndW1lbnQgXCIke2VsZW19XCIgaXMgbm90IGFuIEhUTUwgRWxlbWVudFxuICAgICAgYCk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChzZXR0aW5ncy5pbnNlcnRUYXJnZXQgJiYgIWlzRWxlbWVudChzZXR0aW5ncy5pbnNlcnRUYXJnZXQpKSB7XG4gICAgaWYgKHNldHRpbmdzLmRlYnVnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBcbiAgICAgICAgc2Nyb2xsTmF2IGJ1aWxkIGZhaWxlZCwgb3B0aW9ucy5pbnNlcnRUYXJnZXQgXCIke2VsZW19XCIgaXMgbm90IGFuIEhUTUwgRWxlbWVudFxuICAgICAgYCk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChsb2NhdGlvbk9wdGlvbnMuaW5kZXhPZihzZXR0aW5ncy5pbnNlcnRMb2NhdGlvbikgPCAxKSB7XG4gICAgaWYgKHNldHRpbmdzLmRlYnVnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBcbiAgICAgICAgc2Nyb2xsTmF2IGJ1aWxkIGZhaWxlZCwgb3B0aW9ucy5pbnNlcnRMb2NhdGlvbiBcIiR7XG4gICAgICAgICAgc2V0dGluZ3MuaW5zZXJ0TG9jYXRpb25cbiAgICAgICAgfVwiIGlzIG5vdCBhIHZhbGlkIG9wdGlvblxuICAgICAgYCk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHNlY3Rpb25zRG9tID0gZWxlbS5xdWVyeVNlbGVjdG9yQWxsKHNldHRpbmdzLnNlY3Rpb25zKTtcblxuICBpZiAoIXNlY3Rpb25zRG9tLmxlbmd0aCkge1xuICAgIGlmIChzZXR0aW5ncy5kZWJ1Zykge1xuICAgICAgY29uc29sZS5lcnJvcihgXG4gICAgICAgIHNjcm9sbE5hdiBidWlsZCBmYWlsZWQsIGNvdWxkIG5vdCBmaW5kIGFueSBcIiR7c2V0dGluZ3Muc2VjdGlvbnN9XCJcbiAgICAgICAgZWxlbWVudHMgaW5zaWRlIG9mIFwiJHtlbGVtfVwiXG4gICAgICBgKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZGF0YSA9IHBvcHVsYXRlU2VjdGlvbkRhdGEoc2VjdGlvbnNEb20sICdzY3JvbGwtbmF2Jywgc2V0dGluZ3MpO1xuICBjb25zdCBuYXYgPSBjcmVhdGVOYXYoZGF0YSwgJ3Njcm9sbC1uYXYnLCBzZXR0aW5ncyk7XG5cbiAgaW5zZXJ0TmF2KG5hdiwgc2V0dGluZ3MpO1xuICBjbGlja0hhbmRsZXIgPSBzZXR1cENsaWNrSGFuZGxlcnMobmF2LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKSwgZGF0YSk7XG4gIHNjcm9sbEhhbmRsZXIgPSBzZXR1cFNjcm9sbEhhbmRsZXIoZGF0YSwgbmF2KTtcblxuICBpZiAoc2V0dGluZ3Mub25Jbml0KSByZXR1cm4gc2V0dGluZ3Mub25Jbml0KCk7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3kob3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0cyA9IHt9O1xuICBjb25zdCBzZXR0aW5ncyA9IGV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGwtbmF2Jyk7XG5cbiAgdGVhcmRvd25DbGlja0hhbmRsZXJzKG5hdiwgY2xpY2tIYW5kbGVyKTtcbiAgdGVhcmRvd25TY3JvbGxIYW5kbGVyKHNjcm9sbEhhbmRsZXIpO1xuICBuYXYucmVtb3ZlKCk7XG5cbiAgaWYgKHNldHRpbmdzLm9uRGVzdHJveSkgcmV0dXJuIHNldHRpbmdzLm9uRGVzdHJveSgpO1xufVxuXG5jb25zdCBzY3JvbGxOYXYgPSB7XG4gIGluaXQ6IGluaXQsXG4gIGRlc3Ryb3k6IGRlc3Ryb3lcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNjcm9sbE5hdjtcbiJdfQ==

export default scrollNav;
//# sourceMappingURL=scrollNav.min.m.js.map
