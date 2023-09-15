const content1 = document.querySelector('.content-path1');
    const path1 = document.querySelector('.path2');

    function calcDashoffset(scrollY, element, length) {
        const ratio = (scrollY - element.offsetTop) / element.offsetHeight
        const value = length - (length * ratio)
        return value < 0 ? 0 : value > length ? length : value
    }

    function scrollHandler() {
        const scrollY = window.scrollY + (window.innerHeight * 0.8)
        path1.style.strokeDashoffset = calcDashoffset(scrollY, content1, path1Length)
        path2.style.strokeDashoffset = calcDashoffset(scrollY, content2, path2Length)
    }

    window.addEventListener('scroll', scrollHandler)