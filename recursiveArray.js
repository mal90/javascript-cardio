let jsonObj = JSON.parse('{"condition":"and","rules":[{"field":"connection_id","operator":"less","value":12},{"condition":"and","rules":[{"field":"connection_id","operator":"less","value":5},{"condition":"and","rules":[{"field":"connection_id","operator":"less","value":5}]}]},{"field":"connection_id","operator":"less","value":90},{"field":"connection_name","operator":"less","value":"abcd"}]}')
recursiveAssign(jsonObj);

function recursiveAssign(obj){
    //console.log(obj);
    if(Array.isArray(obj.rules))
    {
        obj.rules.forEach(element => {
            if(element.field){
                element.type = "hello";
                console.log(element);
            }
            if(element.condition)
            {
                recursiveAssign(element);
            }
        });
    }
}