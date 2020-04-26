const getReciptDetail=(num,date,index)=>new Promise((resolve)=>{
    fetch( "https://invaccountingtw.herokuapp.com/POST/detail", 
    {
        method: "POST",
        body: JSON.stringify({num:num,date:date}),   /*把json資料字串化*/
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }) /*設定使用GET*/
    .then(res => res.json()) 
    .then(data => {
        resolve(data);
    })
    .catch(e => {
        console.log(e)
        resolve({"detail":[{"description":"無"}]});
    })
});


const getRecipt=new Promise((resolve)=>{
    fetch( "https://invaccountingtw.herokuapp.com/POST/recipt", {method: "POST"}) /*設定使用GET*/
    .then(res => res.json()) 
    .then(data => {
        resolve(data["details"].map(item=>{
            /*const year=(item["invDate"]["year"]+1911).toString();
            const month=(item["invDate"]["month"]<10)?"0"+item["invDate"]["month"].toString():item["invDate"]["month"];
            const date=(item["invDate"]["date"]<10)?"0"+item["invDate"]["date"].toString():item["invDate"]["date"].toString();
            //console.log("year "+year+", month "+month+", date "+date)
            getReciptDetail(item["invNum"],year+"/"+month+"/"+date).then((info)=>{
                console.log(info["details"][0]["description"])
                //item["info"]=info;  
            })*/
            return item;
        }));
    })
    .catch(e => {
        /*發生錯誤時要做的事情*/
    })
})

const getAccount=()=>{
    let data=[];
    for(let i=0;i<20;++i)
        data.push({name:"麵包",price:50,company:"無名公司",time:"2020-02-02",type:"pay"});
    for(let i=0;i<20;++i)
        data.push({name:"打工",price:150,company:"無名公司",time:"2020-02-02",type:"rev"});
    return data;
}

export {getRecipt,getReciptDetail,getAccount};