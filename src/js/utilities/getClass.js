export function getClass(i) {
    if (i % 5 === 0) { // every 5th item, it returns big
        return 'big';
    }
    else if (i % 6 === 0) { // every 6th item, it returns wide
        return 'wide'
    }
}