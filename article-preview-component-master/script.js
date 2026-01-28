const share = document.getElementById('share');
const sharebox = document.getElementById('sharebox');
const color = document.getElementById('color');

const shareToggle = () => {
    if (sharebox.style.display === 'none') {
        sharebox.style.display = 'flex';
        color.style.filter = 'brightness(0) invert(1)';
        share.style.backgroundColor = 'var(--DesaturatedDarkBlue)';
    } else {
        sharebox.style.display = 'none';
        color.style.filter = 'brightness(1) ';
        share.style.backgroundColor = 'var(--LightGrayishBlue)';
    }
};
share.addEventListener('click', shareToggle);
