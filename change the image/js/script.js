const rollover = document.querySelectorAll('.rollover');

rollover.forEach((aTag, index) => {
    let off_str = aTag.querySelector('img').getAttribute('src');
    let on_str = off_str.replace('_off', '_on');
    // mouse on
    aTag.addEventListener('mouseover', function() {
        this.querySelector('img').setAttribute('src', on_str);
    });
    // mouse off
    aTag.addEventListener('mouseout', function() {
        this.querySelector('img').setAttribute('src', off_str);
    });
});