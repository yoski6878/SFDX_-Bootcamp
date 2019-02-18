({
    getBMI : function(component, event, helper) {

        var getBMIMethod = component.get('c.getBMI');
        getBMIMethod.setCallback(this, function(response){
            if(response.getState() === 'SUCCESS') {
                component.set("v.lstBMI", response.getReturnValue());
            }
        });
        $A.enqueueAction(getBMIMethod);
    }
})