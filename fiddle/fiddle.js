$(document).ready(function () {
    $('h1').css('background', 'red');
});

function getFreeSpace(containerSelector, childsSelector) {
    const $container = $(containerSelector);
    if ($container.length === 0) {
        console.error(`Element with selector "${containerSelector}" not found.`);
        return [];
    }
    const containerRect = $container[0].getBoundingClientRect();
    let left = containerRect.left;
    let top = containerRect.top;
    let right = containerRect.right;
    let bottom = containerRect.bottom;

    $x = $('<div id="x" style="background: rgba(255,0,255,0.7);"></div>').css('position', 'absolute');
    function placeX(){
        $x.css('left', left-containerRect.left + 'px');
        $x.css('top', top-containerRect.top + 'px');
        $x.css('width', right-left + 'px');
        $x.css('height', bottom-top + 'px');
    }
    placeX();
    $container.append($x);


    $container.find(childsSelector).each(function () {
        const rect = this.getBoundingClientRect();
        const intersectsHorizontally = rect.left <= right && rect.right >= left;
        const intersectsVertically = rect.top <= bottom && rect.bottom >= top;
        if (intersectsHorizontally && intersectsVertically) {
            const visible = $(this).css('opacity') != '0' && $(this).css('visibility') == 'visible' && $(this).css('display') != 'none';
            if(visible){
                let diffTop = Math.abs(top - rect.bottom);
                let diffBottom = Math.abs(bottom - rect.top);
                let diffLeft = Math.abs(left - rect.right);
                let diffRight = Math.abs(right - rect.left);
                let min = Math.min(diffTop, diffBottom, diffLeft, diffRight);
                if(min == diffTop) top = rect.bottom;
                else if(min == diffBottom) bottom = rect.top;
                else if(min == diffLeft) left = rect.right;
                else if(min == diffRight) right = rect.left;
                placeX();
            }
        }
    });
    $x.remove();
    return {
        left: left-containerRect.left,
        top: top-containerRect.top,
        width: right-left,
        height: bottom-top,
    };
}

