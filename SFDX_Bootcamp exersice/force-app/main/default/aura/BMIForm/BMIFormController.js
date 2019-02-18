({
    doInit: function(component) {
        if(component.get("v.height") < 0 || component.get("v.height") == null) {
            component.set("v.height", "1.72");
        }
    },
    calculate : function(component, event, helper) {
        helper.calculateBMI(component, event, helper);
	}
})
