let rname=document.getElementById('name')
let category=document.getElementById('category')
let ingredients=document.getElementById('ingredients')
let step=document.getElementById('steps')
let btn=document.getElementById('submit')


btn.addEventListener('click',()=>{
    if(rname.value==''|| category.value==''||ingredients.value==""||step.value==""){
        alert("complate the form")
    }
let recipes=[
    {
        "name":rname.value,
        "category":category.value,
        "ingredients":ingredients.value,
        "steps":step.value
    }
]
let key=rname.value
let data=JSON.stringify(recipes)

    localStorage.setItem(key,data)
})

//display
let dis=document.getElementById('display')
function view()
{
     let p=document.createElement('p')
     p.innerText=localStorage.getItem(name,category,ingredients,step)    
     dis.appendChild(p)
}





