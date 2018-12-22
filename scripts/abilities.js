var type = 0.5; //circle type - 1 whole, 0.5 half, 0.25 quarter

function createCircle($elements, start) {
    var radius = '10em';
    if ($(window).width() <= 400) {
        radius = '5em';
    }else if ($(window).width() <= 700) {
        radius = '7em';
    }
    $elements.each(function (i) {
        var $self = $(this),
            rotate = slice * i + start,
            rotateReverse = rotate * -1;

        $self.css({
            'transform': 'rotate(' + rotate + 'deg) translate(' + radius + ') rotate(' + rotateReverse + 'deg)'
        });
    });
}

document.getElementById("skills").onmouseenter = function () {
    
    $elements = $('#skills-left ul#skills-items li'),
        numberOfElements = (type === 1) ? $elements.length : $elements.length - 1, //adj for even distro of elements when not full circle
        slice = 360 * type / numberOfElements;
    createCircle($elements, 90);

    $elements = $('#skills-right ul#skills-items li'),
        numberOfElements = (type === 1) ? $elements.length : $elements.length - 1, //adj for even distro of elements when not full circle
        slice = 360 * type / numberOfElements;
    createCircle($elements, -90);
}
