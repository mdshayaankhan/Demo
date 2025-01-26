// console.log(window)
// console.log(document);
// console.log(document.URL)
// console.log(document.doctype);
// console.log(document.head)
// console.log(document.title)
// document.title="shayaan"
// console.log(document.title);
// console.log(document.body);
// console.log(document.body);

// let img = document.images;
// console.log(img);
// for(let i=0;i<img.length;i++){
//     console.log(img[i]);
//     img[i].style.height = "200px";
//     img[i].style.width="200px"
//     img[i].style.borderRadius="100%"
//     img[i].alt="image"
// }

/// in-direct access in dom (method in dom)
// 	Document.getElementById(“value”)
	// document.getElementByClassName(“value”)
	// document.getElementByTagName(“value”)
	// document.getElementByName(“value”)
	// document.querySelector(“value”)
	// document.querySelectorAll(“Value”)

// let a = document.getElementById("demo")
// console.log(a);
// console.log(a.textContent)// gets the inside content
// a.textContent="batch 5"
// a.style.backgroundColor ="grey"
// a.style.textAlign="center"


// let a1= document.getElementsByClassName("demo1");///targets two class elements and store in array
// console.log(a1);
// console.log(a1[0])
// a1[0].textContent="Md shayaan khan"
// a1[1].style.color="red"


// let ol = document.getElementsByTagName("ol");///targets two tags elements and store in array
// console.log(ol);
// ol[0].style.color="blue";


// let c = document.getElementsByName("demo2")//targets two class elements and store in nodelist array --storesboth plaintext,tags
// console.log(c);
// console.log(c[1]);

//document.querySelector
//value should be passed using css symbol
//will return refernece to first element

let d = document.querySelector("#demo")
console.log(d)

let e = document.querySelector(".demo1")
console.log(e);


//document.querySelectorAll
//value should be passed using css symbol
//will return refernece of node-list

let h = document.querySelectorAll("#demo")
console.log(h)
console.log(h[1])

let g = document.querySelectorAll(".demo1")
console.log(g);

function event1(){
    console.log("hello world");
}

