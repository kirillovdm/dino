
var scaleSlider = document.getElementById('slider-control_scale');
var positionSlider = document.getElementById('slider-control_position');

noUiSlider.create(scaleSlider, {
    // start: 1,
    start: 0.25,
    orientation: 'vertical',
    direction: 'rtl',
    range: {
        'min': 0,
        'max': 3
    }
});


noUiSlider.create(positionSlider, {
    // start: -3,
    start: 0,
    orientation: 'vertical',
    direction: 'rtl',
    range: {
        'min': -8,
        'max': 8
    }
});




var sliderScaleValue = document.getElementById('slider-scale-value'),
    sliderPositionValue = document.getElementById('slider-position-value');

scaleSlider.noUiSlider.on('update', function ( values, handle ) {

    var value = values[handle];
    sliderScaleValue.innerHTML = value;

    var modelEl = document.querySelector('.visible-model');
    if (!modelEl.object3D.visible) return;

    modelEl.setAttribute('scale', {x:value, y:value, z:value});
});


positionSlider.noUiSlider.on('update', function ( values, handle ) {
    var value = values[handle];
    sliderPositionValue.innerHTML = value;

    var modelEl = document.querySelector('.visible-model');
    if (!modelEl.object3D.visible) return;

    modelEl.setAttribute('position', {z:-value});
});