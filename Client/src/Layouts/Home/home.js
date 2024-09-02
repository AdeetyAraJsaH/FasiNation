export function slider(counter) {
    document.getElementById('banner-btn-' + counter).checked=true;
    if (counter < 5) {
        counter++;
    } else {
        counter = 1;
    }
}