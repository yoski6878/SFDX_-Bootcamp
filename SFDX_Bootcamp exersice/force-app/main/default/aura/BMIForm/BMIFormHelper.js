({
    calculateBMI : function(component, event, helper) {

        var heightVal = component.get("v.height");
        var weightVal = component.get("v.weight");
        var bmiVal = (weightVal * 0.45)/ (heightVal*heightVal) ;
        component.set("v.bmi", bmiVal);
        
        var displayBox = component.find("display");
        if(component.get("v.bmi") >= 20.0) {
           $A.util.removeClass(displayBox, 'is-risk');
           $A.util.addClass(displayBox, 'no-risk'); 
        } else{
           $A.util.addClass(displayBox, 'is-risk');
           $A.util.removeClass(displayBox, 'no-risk'); 
        }

        var saveBMIMethod = component.get('c.saveBMI');
        saveBMIMethod.setParams({
            height : heightVal,
            weight : weightVal,
            bmi : bmiVal
        });
        saveBMIMethod.setCallback(this, function(response){
            if(response.getState() === 'SUCCESS') {
                /*var showMessageEvent = component.getEvent("showMessage");
                showMessageEvent.setParams({
                    message : "Record saved"
                });
                console.log("recoed Saved");
                showMessageEvent.fire(); */
                var applicationEvent = $A.get("e.c:BMIApplicationEvent");
                applicationEvent.setParams({
                    type : "BMIForm:recordSaved"
                });
                applicationEvent.fire(); 
            }
        });
        $A.enqueueAction(saveBMIMethod);
    }

})
