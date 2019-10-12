function main(){
	var talentOps = document.getElementById("talentOps");
	
	var pName = localStorage.getItem("projectName");
	var pDesc = localStorage.getItem("projectDesc");
	var pReqs = localStorage.getItem("projectReqs");

	var listing = "<li>"+pName+" - "+ pDesc+" - "+pReqs+"</li>";
	if(pName == null || pDesc == null || pReqs == null){
		talentOps.innerHTML = "Sorry, no listings";
	}
	else{
		talentOps.innerHTML = listing;	
	}
	

	$("#add").click(function(){
		$("#project").submit();
		localStorage.setItem("projectName", $("#projectName").val());
		localStorage.setItem("projectDesc", $("#projectDesc").val());
		localStorage.setItem("projectReqs", $("#projectReqs").val());
		talentOps.innerHTML = listing;		
	})

	$("#delete").click(function(){
		talentOps.innerHTML = " ";
		localStorage.removeItem("projectName");
		localStorage.removeItem("projectDesc");
		localStorage.removeItem("projectReqs");
	})
}

