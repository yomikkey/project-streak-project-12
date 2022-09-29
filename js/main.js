const toggleHamburgerMenu = (id) => {
    var x = document.getElementById(id);
    if (x.style.display == 'none' || undefined || '') {
        x.style.display = 'flex';
    } else if (x.style.display == 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

const testFunction = () => {
    alert('hi');
}

const handleLetsTalkBtn = (id) => {
    var modal = document.getElementById(id);
    modal.style.display = "block";
}

const handleCloseModal = (id) => {
    var modal = document.getElementById(id);
    modal.style.display = "none";
}