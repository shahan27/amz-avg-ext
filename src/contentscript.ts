console.log("Content script from Amazon Reader")


let avg = 0;
let total = 0;
let amountOfItems = 0;
const showValues = () => {
    const arr: number[] = [];
    const tag = document.querySelectorAll('span.a-offscreen');
    for (let index = 0; index < tag.length; index++) {
        arr.push(parseFloat(tag[index].innerHTML.slice(1)));
        //console.log(tag[index].innerHTML.slice(1));
    }
    console.log(arr)
    total = 0;
    amountOfItems = arr.length;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    avg = total / arr.length;
    //console.log("total = " + total.toFixed(2));
    console.log("average = " + avg.toFixed(2));
    return avg;

}
console.log(showValues())
console.log("average = " + avg)
console.log("total price = " + total)
console.log("total number of items = " + amountOfItems)



chrome.runtime.onMessage.addListener((msg, sender, callback) => {
    callback(" The average is: $" + avg.toFixed(2));
});


