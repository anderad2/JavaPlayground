

/*
 * this function takes value of the field, form name, field name, and max length
 * of the input return a trimed string
 */
function textCounter(inValue, field, maxlimit) {
	if (inValue.length > maxlimit) {
		document.dqtsForm.elements[field].value = inValue
				.substring(0, maxlimit);
	}
}

function emptyFieldCheck(row) {
	if (!row.cells[1].childNodes[0].value.length > 0) {
		return false;
	}
	return true;
}

function fnAddWrapperDetailHeader() {
	var newDetail = document.getElementById('wrapperDetailHeader');
	var detailRows = newDetail.getElementsByTagName("tr");
	var lastRow = detailRows[detailRows.length - 1];

	var newRow = document.getElementById('wrapperDetailHeader').insertRow(
			detailRows.length);

	/*
	 * var newPartNumber = newRow.insertCell(0); var newEngineeringChangeLevel =
	 * newRow.insertCell(1); var newEngineeringVersion = newRow.insertCell(2);
	 * var newEdsName = newRow.insertCell(3); var newJobPartNumberType =
	 * newRow.insertCell(4); var newPlanningJobNumber = newRow.insertCell(5);
	 * var newDesignControl = newRow.insertCell(6); var newDesigner =
	 * newRow.insertCell(7); var newDetailer = newRow.insertCell(8); var
	 * newDetailerAffiliation = newRow.insertCell(9);
	 */

	var newPartNumber = newRow.insertCell(0);
	var newPartType = newRow.insertCell(1);
	var newEngineeringChangeLevel = newRow.insertCell(2);
	var newEngineeringVersion = newRow.insertCell(3);
	var newEdsName = newRow.insertCell(4);
	var newJobPartNumberType = newRow.insertCell(5);
	var newPlanningJobNumber = newRow.insertCell(6);
	var newDesignControl = newRow.insertCell(7);
	var newDesigner = newRow.insertCell(8);
	var newDetailer = newRow.insertCell(9);
	var newDetailerAffiliation = newRow.insertCell(10);

	newPartNumber.setAttribute("align", "center");
	newPartNumber.setAttribute('width', 80);
	newPartNumber.setAttribute('height', 42);
	newPartNumber.innerHTML = "Part Number";

	partType.setAttribute("align", "center");
	partType.setAttribute('width', 100);
	partType.setAttribute('height', 42);
	partType.innerHTML = "Part Type";

	newEngineeringChangeLevel.setAttribute("align", "center");
	newEngineeringChangeLevel.setAttribute('width', 60);
	newEngineeringChangeLevel.setAttribute('height', 42);
	newEngineeringChangeLevel.innerHTML = "Engineering Change Level";

	newEngineeringVersion.setAttribute("align", "center");
	newEngineeringVersion.setAttribute('width', 60);
	newEngineeringVersion.setAttribute('height', 42);
	newEngineeringVersion.innerHTML = "Engineering Version";

	newEdsName.setAttribute("align", "center");
	newEdsName.setAttribute('width', 480);
	newEdsName.setAttribute('height', 42);
	newEdsName.innerHTML = "EDS Name";

	newJobPartNumberType.setAttribute("align", "center");
	newJobPartNumberType.setAttribute('width', 100);
	newJobPartNumberType.setAttribute('height', 42);
	newJobPartNumberType.innerHTML = "Job Part Number Type";

	newPlanningJobNumber.setAttribute("align", "center");
	newPlanningJobNumber.setAttribute('width', 60);
	newPlanningJobNumber.setAttribute('height', 42);
	newPlanningJobNumber.innerHTML = "Planning Job Number";

	newDesignControl.setAttribute("align", "center");
	newDesignControl.setAttribute('width', 60);
	newDesignControl.setAttribute('height', 42);
	newDesignControl.innerHTML = "Design Control";

	newDesigner.setAttribute("align", "center");
	newDesigner.setAttribute('width', 200);
	newDesigner.setAttribute('height', 42);
	newDesigner.innerHTML = "Designer CwsId";

	newDetailer.setAttribute("align", "center");
	newDetailer.setAttribute('width', 200);
	newDetailer.setAttribute('height', 42);
	newDetailer.innerHTML = "Detailer CwsId";

	newDetailerAffiliation.setAttribute("align", "center");
	newDetailerAffiliation.setAttribute('width', 200);
	newDetailerAffiliation.setAttribute('height', 42);
	newDetailerAffiliation.innerHTML = "Detailer Affiliation";

	var rowIndex = detailRows.length - 1;

	fnAddWrapperDetailRow();

	return;
}

function fnAddWrapperDetailRow() {
	var newDetail = document.getElementById('detail');
	var detailRows = newDetail.getElementsByTagName("tr");
	var lastRow = detailRows[detailRows.length - 1];
	var newRow = document.getElementById('detail').insertRow(detailRows.length);

	var rowIndex = detailRows.length - 1;

	var newPartNumber = newRow.insertCell(0);
	newPartNumber.setAttribute("align", "center");
	newPartNumber.setAttribute('width', 60);
	newPartNumber.setAttribute('height', 42);
	newPartNumber.innerHTML = "<input type='text' name='wrapperDetailList["
			+ rowIndex + "].partNumber' size='6' maxlength='7' value=''>";

	// //////////////////////////////////////
	drawingClass = row.insertCell(1);
	drawingClass.setAttribute("align", "center");
	drawingClass.setAttribute('width', 100);
	drawingClass.setAttribute('height', 42);
	element1 = document.createElement("select");
	element1.setAttribute("name", "drawingClass");

	theOption = document.createElement("option");
	theText = document.createTextNode("Please select the following");
	theOption.appendChild(theText);
	theOption.setAttribute("value", "");
	element1.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Custom');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "01");
	element1.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('In-Progress');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "02");
	element1.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Production');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "03");
	element1.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Records');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "04");
	element1.appendChild(theOption);

	drawingClass.appendChild(element1);
	// //////////////////////////////////////
	var partType = newRow.insertCell(2);
	partType.setAttribute("align", "center");
	partType.setAttribute('width', 100);
	partType.setAttribute('height', 42);
	element2 = document.createElement("select");
	element2.setAttribute("name", "partType");

	theOption = document.createElement("option");
	theText = document.createTextNode("");
	theOption.appendChild(theText);
	theOption.setAttribute("value", "");
	element2.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Arrangement');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "01");
	element2.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Assembly');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "02");
	element2.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Bulk Material');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "03");
	element2.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Group');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "04");
	element2.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Kit');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "05");
	element2.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Part');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "06");
	element2.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Reference');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "07");
	element2.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Set');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "08");
	element2.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Status');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "09");
	element2.appendChild(theOption);

	partType.appendChild(element2);

	var newEngineeringChangeLevel = newRow.insertCell(3);
	newEngineeringChangeLevel.setAttribute("align", "center");
	newEngineeringChangeLevel.setAttribute('width', 60);
	newEngineeringChangeLevel.setAttribute('height', 42);
	newEngineeringChangeLevel.innerHTML = "<input type='text' name='wrapperDetailList["
			+ rowIndex
			+ "].engineeringChangeLevel' size='6' maxlength='5' value='' >";

	var newEngineeringVersion = newRow.insertCell(4);
	newEngineeringVersion.setAttribute("align", "center");
	newEngineeringVersion.setAttribute('width', 60);
	newEngineeringVersion.setAttribute('height', 42);
	newEngineeringVersion.innerHTML = "<input type='text' name='wrapperDetailList["
			+ rowIndex
			+ "].engineeringVersion' size='6' maxlength='2'  value='' >";

	var newEdsName = newRow.insertCell(5);
	newEdsName.setAttribute("align", "center");
	newEdsName.setAttribute('width', 125);
	newEdsName.setAttribute('height', 42);
	newEdsName.innerHTML = "<input type='text' name='wrapperDetailList["
			+ rowIndex + "].edsName' size='29' maxlength='50'  value='' >";

	var jobPartNumberType = newRow.insertCell(6);
	jobPartNumberType.setAttribute("align", "center");
	jobPartNumberType.setAttribute('width', 100);
	jobPartNumberType.setAttribute('height', 42);
	element5 = document.createElement("select");
	element5.setAttribute("name", "jobPartNumberType");

	theOption = document.createElement("option");
	theText = document.createTextNode("");
	theOption.appendChild(theText);
	theOption.setAttribute("value", "");
	element5.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('1E3011 RASTAR');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "01");
	element5.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('AutoCAD');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "02");
	element5.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Blanket');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "03");
	element5.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Cancel');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "04");
	element5.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('CNU');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "05");
	element5.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Correction');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "06");
	element5.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('CRB');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "07");
	element5.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Hold Up');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "08");
	element5.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('In&Out');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "09");
	element5.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('MiscDataChg');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "10");
	element5.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('N-Size');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "11");
	element5.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('ProE');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "12");
	element5.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Status');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "13");
	element5.appendChild(theOption);

	jobPartNumberType.appendChild(element5);

	var planningJobNumber = newRow.insertCell(7);
	planningJobNumber.setAttribute("align", "center");
	planningJobNumber.setAttribute('width', 60);
	planningJobNumber.setAttribute('height', 42);
	planningJobNumber.innerHTML = "<input type='text' name='wrapperDetailList["
			+ rowIndex
			+ "].planningJobNumber' size='6' maxlength='5' value='' >";

	var designControl = newRow.insertCell(8);
	designControl.setAttribute("align", "center");
	designControl.setAttribute('width', 60);
	designControl.setAttribute('height', 42);
	designControl.innerHTML = "<input type='text' name='wrapperDetailList["
			+ rowIndex + "].designControl' size='6' maxlength='5' value='' >";

	var designer = newRow.insertCell(9);
	designer.setAttribute("align", "center");
	designer.setAttribute('width', 150);
	designer.setAttribute('height', 42);
	designer.innerHTML = "<input type='text' name='wrapperDetailList["
			+ rowIndex
			+ "].designer' size='29' maxlength='50'  value='' id='wrapperDetailList["
			+ rowIndex
			+ "].designerId' onchange='if(this.value != ''){ ajaxValidateCwsId('Validate CwsId',this.value,this.id,'wrapperDetailList["
			+ rowIndex + "].designerId_Div');}'><div id='wrapperDetailList["
			+ rowIndex + "].designerId_Div'></div>";

	var detail = newRow.insertCell(10);
	detail.setAttribute("align", "center");
	detail.setAttribute('width', 150);
	detail.setAttribute('height', 42);
	detail.innerHTML = "<input type='text' name='wrapperDetailList["
			+ rowIndex
			+ "].detailer' size='29' maxlength='50'  value='' id='wrapperDetailList["
			+ rowIndex
			+ "].detailerId' onchange='if(this.value != ''){ ajaxValidateCwsId('Validate CwsId',this.value,this.id,'wrapperDetailList["
			+ rowIndex + "].detailerId_Div');}'><div id='wrapperDetailList["
			+ rowIndex + "].detailerId_Div'></div>";

	var detailerAffiliation = newRow.insertCell(11);
	detailerAffiliation.setAttribute("align", "center");
	detailerAffiliation.setAttribute('width', 150);
	detailerAffiliation.setAttribute('height', 42);
	element10 = document.createElement("select");
	element10.setAttribute("name", "detailerAffiliation");

	theOption = document.createElement("option");
	theText = document.createTextNode("");
	theOption.appendChild(theText);
	theOption.setAttribute("value", "");
	element10.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('ACCS');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "01");
	element10.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('AEROTEK');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "02");
	element10.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('ARI');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "03");
	element10.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('AXIS');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "04");
	element10.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('BELCAN');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "05");
	element10.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('CAMBRIC');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "06");
	element10.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('CRB');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "07");
	element10.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('CATERPILLAR');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "08");
	element10.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('DELL');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "09");
	element10.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('DSN');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "10");
	element10.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('EDC - Black Hills');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "11");
	element10.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('EDC-I');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "12");
	element10.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('GEOMETRIC');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "13");
	element10.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('INFOTECH');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "14");
	element10.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('L and T LIMITED');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "15");
	element10.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('LEONI');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "16");
	element10.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('RFA');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "17");
	element10.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('TABS');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "18");
	element10.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('VOLT');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "19");
	element10.appendChild(theOption);

	detailerAffiliation.appendChild(element10);

	// //////////////////////////////////////
	reasonForRelease = row.insertCell(11);
	reasonForRelease.setAttribute("align", "center");
	reasonForRelease.setAttribute('width', 100);
	reasonForRelease.setAttribute('height', 42);
	element11 = document.createElement("select");
	element11.setAttribute("name", "reasonForRelease");

	theOption = document.createElement("option");
	theText = document.createTextNode("Please select the following");
	theOption.appendChild(theText);
	theOption.setAttribute("value", "");
	element11.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Conformance');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "01");
	element11.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Continuous Product Improvement');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "02");
	element11.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('First Prod Change');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "03");
	element11.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Correction:Print/EDS');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "04");
	element11.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Model Update Only');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "05");
	element11.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('New Product Design/Introduction');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "06");
	element11.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Product Cost');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "07");
	element11.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Product Field Maintenance');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "08");
	element11.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Production Requirement');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "09");
	element11.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Other');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "10");
	element11.appendChild(theOption);

	reasonForRelease.appendChild(element11);
	// //////////////////////////////////////

	var chkbx = newRow.insertCell(12);
	chkbx.innerHTML = "<input type='checkbox' onclick=javascript:fnDeleteRow(this) >";

	var addBtn = newRow.insertCell(13);
	addBtn.innerHTML = "<INPUT TYPE='Button' value='Add Another' onClick='fnAddRow(this)'> ";

	lastRow.cells[11].innerHTML = "<input type='button' value='Delete' onclick=javascript:fnDeleteRow(this)>";

	return;
}

function fnDeleteRow(row) {
	var i = row.parentNode.parentNode.rowIndex;
	document.getElementById('detail').deleteRow(i);

	return;
}

function loadWrapperDetailTableHeader(tableID) {

	table = document.getElementById(tableID);
	row = table.insertRow(table.rows.length);

	cell1 = row.insertCell(0);
	cell1.setAttribute('width', 60);
	cell1.setAttribute('height', 42);
	cell1.setAttribute('align', 'center');
	cell1.innerHTML = 'Part Number';

	cell2 = row.insertCell(1);
	cell2.setAttribute('width', 100);
	cell2.setAttribute('height', 42);
	cell2.setAttribute('align', 'center');
	cell2.innerHTML = 'Drawing Class';

	cell3 = row.insertCell(2);
	cell3.setAttribute('width', 100);
	cell3.setAttribute('height', 42);
	cell3.setAttribute('align', 'center');
	cell3.innerHTML = 'Part Type';

	cell4 = row.insertCell(3);
	cell4.setAttribute('width', 60);
	cell4.setAttribute('height', 42);
	cell4.setAttribute('align', 'center');
	cell4.innerHTML = 'Engineering Change Level';

	cell5 = row.insertCell(4);
	cell5.setAttribute('width', 60);
	cell5.setAttribute('height', 42);
	cell5.setAttribute('align', 'center');
	cell5.innerHTML = 'Engineering Version';

	cell6 = row.insertCell(5);
	cell6.setAttribute('width', 100);
	cell6.setAttribute('height', 42);
	cell6.setAttribute('align', 'center');
	cell6.innerHTML = 'EDS Name';

	cell7 = row.insertCell(6);
	cell7.setAttribute('width', 100);
	cell7.setAttribute('height', 42);
	cell7.setAttribute('align', 'center');
	cell7.innerHTML = 'Job Part Number Type';

	cell8 = row.insertCell(7);
	cell8.setAttribute('width', 60);
	cell8.setAttribute('height', 42);
	cell8.setAttribute('align', 'center');
	cell8.innerHTML = 'Planning Job Number';

	cell9 = row.insertCell(8);
	cell9.setAttribute('width', 60);
	cell9.setAttribute('height', 42);
	cell9.setAttribute('align', 'center');
	cell9.innerHTML = 'Design Control';

	cell10 = row.insertCell(9);
	cell10.setAttribute('width', 100);
	cell10.setAttribute('height', 42);
	cell10.setAttribute('align', 'center');
	cell10.innerHTML = 'Designer CwsId';

	cell11 = row.insertCell(10);
	cell11.setAttribute('width', 100);
	cell11.setAttribute('height', 42);
	cell11.setAttribute('align', 'center');
	cell11.innerHTML = 'Detailer CwsId';

	cell12 = row.insertCell(11);
	cell12.setAttribute('width', 100);
	cell12.setAttribute('height', 42);
	cell12.setAttribute('align', 'center');
	cell12.innerHTML = 'Detailer Affiliation';

	cell13 = row.insertCell(12);
	cell13.setAttribute('width', 100);
	cell13.setAttribute('height', 42);
	cell13.setAttribute('align', 'center');
	cell13.innerHTML = 'Reason for Release';

	cell14 = row.insertCell(13);
	cell14.setAttribute('width', 25);
	cell14.setAttribute('height', 42);
	cell14.setAttribute('align', 'center');
	cell14.innerHTML = '&nbsp;&nbsp;';

	addWrapperDetailRow(tableID);

	return true;

}

function addWrapperDetailRow(tableID) {
	table = document.getElementById(tableID);
	row = table.insertRow(table.rows.length);
	/*
	 * var rowIndex;
	 * 
	 * if(table.length!=null && table.length>0){ rowIndex = table.length; }else{
	 * rowIndex = 0; }
	 */

	var newDetail = document.getElementById(tableID);
	var detailRows = newDetail.getElementsByTagName("tr");
	var rowIndex = detailRows.length - 1;

	cell1 = row.insertCell(0);
	cell1.setAttribute("width", 60);
	cell1.setAttribute("height", 42);
	cell1.setAttribute("align", "center");
	element1 = document.createElement("input");
	element1.setAttribute("type", "text");
	element1.setAttribute("size", 5);
	element1.setAttribute("maxlength", 7);
	element1.setAttribute("name", "inputPartNumberList");
	cell1.appendChild(element1);
	// //////////////////////////////////////
	drawingClass = row.insertCell(1);
	drawingClass.setAttribute("align", "center");
	drawingClass.setAttribute('width', 100);
	drawingClass.setAttribute('height', 42);
	element1 = document.createElement("select");
	element1.setAttribute("name", "inputDrawingClassList");

	theOption = document.createElement("option");
	theText = document.createTextNode("Please select the following");
	theOption.appendChild(theText);
	theOption.setAttribute("value", "");
	element1.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Custom');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "01");
	element1.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('In-Progress');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "02");
	element1.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Production');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "03");
	element1.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Records');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "04");
	element1.appendChild(theOption);

	drawingClass.appendChild(element1);
	// //////////////////////////////////////
	// select
	cell2 = row.insertCell(2);
	cell2.setAttribute("width", 100);
	cell2.setAttribute("height", 42);
	cell2.setAttribute("align", "center");
	element2 = document.createElement("select");
	element2.setAttribute("name", "inputPartTypeList");

	theOption = document.createElement("option");
	theText = document.createTextNode("");
	theOption.appendChild(theText);
	theOption.setAttribute("value", "");
	element2.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Arrangement');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "01");
	element2.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Assembly');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "02");
	element2.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Bulk Material');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "03");
	element2.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Group');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "04");
	element2.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Kit');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "05");
	element2.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Part');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "06");
	element2.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Reference');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "07");
	element2.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Set');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "08");
	element2.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Status');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "09");
	element2.appendChild(theOption);

	cell2.appendChild(element2);

	cell3 = row.insertCell(3);
	cell3.setAttribute("width", 60);
	cell3.setAttribute("height", 42);
	cell3.setAttribute("align", "center");
	element3 = document.createElement("input");
	element3.setAttribute("type", "text");
	element3.setAttribute("size", 4);
	element3.setAttribute("maxlength", 5);
	element3.setAttribute("name", "inputEngineeringChangeLevelList");
	cell3.appendChild(element3);

	cell4 = row.insertCell(4);
	cell4.setAttribute("width", 60);
	cell4.setAttribute("height", 42);
	cell4.setAttribute("align", "center");
	element4 = document.createElement("input");
	element4.setAttribute("type", "text");
	element4.setAttribute("size", 5);
	element4.setAttribute("maxlength", 2);
	element4.setAttribute("name", "inputEngineeringVersionList");
	cell4.appendChild(element4);

	cell5 = row.insertCell(5);
	cell5.setAttribute("width", 100);
	cell5.setAttribute("height", 42);
	cell5.setAttribute("align", "center");
	element5 = document.createElement("input");
	element5.setAttribute("type", "text");
	element5.setAttribute("size", 12);
	element5.setAttribute("maxlength", 50);
	element5.setAttribute("name", "inputEdsNameList");
	cell5.appendChild(element5);

	// select
	cell6 = row.insertCell(6);
	cell6.setAttribute("width", 100);
	cell6.setAttribute("height", 42);
	cell6.setAttribute("align", "center");
	element6 = document.createElement("select");
	element6.setAttribute("name", "inputJobPartNumberTypeList");

	theOption = document.createElement("option");
	theText = document.createTextNode("");
	theOption.appendChild(theText);
	theOption.setAttribute("value", "");
	element6.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('1E3011 RASTAR');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "01");
	element6.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('AutoCAD');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "02");
	element6.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Blanket');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "03");
	element6.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Cancel');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "04");
	element6.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('CNU');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "05");
	element6.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Correction');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "06");
	element6.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('CRB');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "07");
	element6.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Hold Up');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "08");
	element6.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('In&Out');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "09");
	element6.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('MiscDataChg');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "10");
	element6.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('N-Size');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "11");
	element6.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('ProE');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "12");
	element6.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Status');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "13");
	element6.appendChild(theOption);

	cell6.appendChild(element6);

	cell7 = row.insertCell(7);
	cell7.setAttribute("width", 60);
	cell7.setAttribute("height", 42);
	cell7.setAttribute("align", "center");
	element7 = document.createElement("input");
	element7.setAttribute("type", "text");
	element7.setAttribute("size", 5);
	element7.setAttribute("maxlength", 10);
	element7.setAttribute("name", "inputPlanningJobNumberList");
	cell7.appendChild(element7);

	cell8 = row.insertCell(8);
	cell8.setAttribute("width", 60);
	cell8.setAttribute("height", 42);
	cell8.setAttribute("align", "center");
	element8 = document.createElement("input");
	element8.setAttribute("type", "text");
	element8.setAttribute("size", 5);
	element8.setAttribute("maxlength", 10);
	element8.setAttribute("name", "inputDesignControlList");
	cell8.appendChild(element8);

	cell9 = row.insertCell(9);
	cell9.setAttribute("width", 100);
	cell9.setAttribute("height", 42);
	cell9.setAttribute("align", "center");
	element9 = document.createElement("input");
	element9.setAttribute("type", "text");
	element9.setAttribute("size", 12);
	element9.setAttribute("maxlength", 50);
	element9.setAttribute("name", "inputDesignerList");
	element9.setAttribute("id", "inputDesignerList");
	cell9.appendChild(element9);

	cell10 = row.insertCell(10);
	cell10.setAttribute("width", 100);
	cell10.setAttribute("height", 42);
	cell10.setAttribute("align", "center");
	element10 = document.createElement("input");
	element10.setAttribute("type", "text");
	element10.setAttribute("size", 12);
	element10.setAttribute("maxlength", 50);
	element10.setAttribute("name", "inputDetailerList");
	cell10.appendChild(element10);

	// select
	cell11 = row.insertCell(11);
	cell11.setAttribute("width", 100);
	cell11.setAttribute("height", 42);
	cell11.setAttribute("align", "center");
	element11 = document.createElement("select");
	element11.setAttribute("name", "inputDetailerAffiliationList");

	theOption = document.createElement("option");
	theText = document.createTextNode("");
	theOption.appendChild(theText);
	theOption.setAttribute("value", "");
	element11.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('ACCS');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "01");
	element11.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('AEROTEK');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "02");
	element11.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('ARI');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "03");
	element11.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('AXIS');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "04");
	element11.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('BELCAN');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "05");
	element11.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('CATERPILLAR');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "07");
	element11.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('CYIENT');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "13");
	element11.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('DELL');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "08");
	element11.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('DSN');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "09");
	element11.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('EDC - Black Hills');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "10");
	element11.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('EDC-I');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "11");
	element11.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('GEOMETRIC');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "12");
	element11.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('L and T LIMITED');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "14");
	element11.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('LEONI');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "15");
	element11.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('RFA');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "16");
	element11.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('TABS');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "17");
	element11.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('TATA');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "06");
	element11.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('TPL');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "19");
	element11.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('VOLT');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "18");
	element11.appendChild(theOption);

	cell11.appendChild(element11);
	// //////////////////////////////////////
	reasonForRelease = row.insertCell(12);
	reasonForRelease.setAttribute("align", "center");
	reasonForRelease.setAttribute('width', 100);
	reasonForRelease.setAttribute('height', 42);
	element12 = document.createElement("select");
	element12.setAttribute("name", "inputReasonForReleaseList");

	theOption = document.createElement("option");
	theText = document.createTextNode("Please select the following");
	theOption.appendChild(theText);
	theOption.setAttribute("value", "");
	element12.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Conformance');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "01");
	element12.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Continuous Product Improvement');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "02");
	element12.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('First Prod Change');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "03");
	element12.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Correction:Print/EDS');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "04");
	element12.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Model Update Only');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "05");
	element12.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('New Product Design/Introduction');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "06");
	element12.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Product Cost');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "07");
	element12.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Product Field Maintenance');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "08");
	element12.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Production Requirement');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "09");
	element12.appendChild(theOption);

	theOption = document.createElement("option");
	theText = document.createTextNode('Other');
	theOption.appendChild(theText);
	theOption.setAttribute("value", "10");
	element12.appendChild(theOption);

	reasonForRelease.appendChild(element12);
	// //////////////////////////////////////

	cell12 = row.insertCell(13);
	cell12.setAttribute("width", 25);
	cell12.setAttribute("height", 42);
	cell12.setAttribute("align", "center");
	element12 = document.createElement("input");
	element12.setAttribute("type", "checkbox");
	cell12.appendChild(element12);

	return true;
}

function deleteRow(tableID) {

	var table = document.getElementById(tableID);
	rowCount = table.rows.length;
	rowsChecked = false;

	if (rowCount > 1) {
		for (i = 1; i < table.rows.length; i++) {
			row = table.rows[i];
			chkbox = row.cells[10].childNodes[0];

			if (null != chkbox && true == chkbox.checked) {
				rowsChecked = true;
				table.deleteRow(i);
				rowCount--;
				i--;
			}
		}
	}
	if (false == rowsChecked) {
		alert("You must first select Package Detail via checkbox on the right");
	}

	return true;
}

function validateWrapperInfo() {

	var text = " contains invalid characters.  May contain only a-z,A-Z,0-9";

	// Job Title
	if (document.dqtsForm.elements['jobTitle'] == null
			|| (document.dqtsForm.elements['jobTitle'] != null && document.dqtsForm.elements['jobTitle'].value.length == 0)) {
		document.dqtsForm.elements['jobTitle'].style.color = "red";
		document.dqtsForm.elements['jobTitle'].style.backgroundColor = "yellow";
		alert("Job Title is a required field.");
		return false;
	} else if ((document.dqtsForm.elements['jobTitle'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['jobTitle'].value))) {
		document.dqtsForm.elements['jobTitle'].style.color = "red";
		document.dqtsForm.elements['jobTitle'].style.backgroundColor = "yellow";
		alert("Job Title" + text);
		return false;
	} else if ((document.dqtsForm.elements['jobTitle'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['jobTitle'].value))
			&& (document.dqtsForm.elements['jobTitle'].value.length > 50)) {
		document.dqtsForm.elements['jobTitle'].style.color = "red";
		document.dqtsForm.elements['jobTitle'].style.backgroundColor = "yellow";
		alert("Job Title can not be greater than 50 characters");
		return false;
	} else {
		document.dqtsForm.elements['jobTitle'].style.color = "black";
		document.dqtsForm.elements['jobTitle'].style.backgroundColor = "white";
	}

	// Change Notice Number
	if (document.dqtsForm.elements['changeNoticeNumber'] == null
			|| (document.dqtsForm.elements['changeNoticeNumber'] != null && document.dqtsForm.elements['changeNoticeNumber'].value.length == 0)) {
		document.dqtsForm.elements['changeNoticeNumber'].style.color = "red";
		document.dqtsForm.elements['changeNoticeNumber'].style.backgroundColor = "yellow";
		alert("Change Notice Number is a required field.");
		return false;
	} else if ((document.dqtsForm.elements['changeNoticeNumber'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['changeNoticeNumber'].value))) {
		document.dqtsForm.elements['changeNoticeNumber'].style.color = "red";
		document.dqtsForm.elements['changeNoticeNumber'].style.backgroundColor = "yellow";
		alert("Change Notice Number" + text);
		return false;
	} else if ((document.dqtsForm.elements['changeNoticeNumber'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['changeNoticeNumber'].value))
			&& (document.dqtsForm.elements['changeNoticeNumber'].value.length > 15)) {
		document.dqtsForm.elements['changeNoticeNumber'].style.color = "red";
		document.dqtsForm.elements['changeNoticeNumber'].style.backgroundColor = "yellow";
		alert("Change Notice Number can not be greater than 15 characters");
		return false;
	} else {
		document.dqtsForm.elements['changeNoticeNumber'].style.color = "black";
		document.dqtsForm.elements['changeNoticeNumber'].style.backgroundColor = "white";
	}

	// Checking Charge Number
	if ((document.dqtsForm.elements['checkingChargeNumber'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['checkingChargeNumber'].value))) {
		document.dqtsForm.elements['checkingChargeNumber'].style.color = "red";
		document.dqtsForm.elements['checkingChargeNumber'].style.backgroundColor = "yellow";
		alert("Checking Charge Number" + text);
		return false;
	} else if ((document.dqtsForm.elements['checkingChargeNumber'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['checkingChargeNumber'].value))
			&& (document.dqtsForm.elements['checkingChargeNumber'].value.length > 15)) {
		document.dqtsForm.elements['checkingChargeNumber'].style.color = "red";
		document.dqtsForm.elements['checkingChargeNumber'].style.backgroundColor = "yellow";
		alert("Checking Charge Number can not be greater than 15 characters");
		return false;
	} else {
		document.dqtsForm.elements['checkingChargeNumber'].style.color = "black";
		document.dqtsForm.elements['checkingChargeNumber'].style.backgroundColor = "white";
	}

	// Planning Job Owner
	if ((document.dqtsForm.elements['planningJobOwner'] != null)
			&& (!checkInputAlphaNumericDT(document.dqtsForm.elements['planningJobOwner'].value))) {
		document.dqtsForm.elements['planningJobOwner'].style.color = "red";
		document.dqtsForm.elements['planningJobOwner'].style.backgroundColor = "yellow";
		alert("Planning Job Owner" + text);
		return false;
	} else if ((document.dqtsForm.elements['planningJobOwner'] != null)
			&& (checkInputAlphaNumericDT(document.dqtsForm.elements['planningJobOwner'].value))
			&& (document.dqtsForm.elements['planningJobOwner'].value.length > 20)) {
		document.dqtsForm.elements['planningJobOwner'].style.color = "red";
		document.dqtsForm.elements['planningJobOwner'].style.backgroundColor = "yellow";
		alert("Planning Job Owner can not be greater than 20 characters");
		return false;
	} else {
		document.dqtsForm.elements['planningJobOwner'].style.color = "black";
		document.dqtsForm.elements['planningJobOwner'].style.backgroundColor = "white";
	}

	// Team Center Coordinator
	if (document.dqtsForm.elements['teamCenterCoordinator'] == null
			|| (document.dqtsForm.elements['teamCenterCoordinator'] != null && document.dqtsForm.elements['teamCenterCoordinator'].value.length == 0)) {
		document.dqtsForm.elements['teamCenterCoordinator'].style.color = "red";
		document.dqtsForm.elements['teamCenterCoordinator'].style.backgroundColor = "yellow";
		alert("Team Center Coordinator is a required field.");
		return false;
	} else if ((document.dqtsForm.elements['teamCenterCoordinator'] != null)
			&& (!checkInputAlphaNumericDT(document.dqtsForm.elements['teamCenterCoordinator'].value))) {
		document.dqtsForm.elements['teamCenterCoordinator'].style.color = "red";
		document.dqtsForm.elements['teamCenterCoordinator'].style.backgroundColor = "yellow";
		alert("Team Center Coordinator" + text);
		return false;
	} else if ((document.dqtsForm.elements['teamCenterCoordinator'] != null)
			&& (checkInputAlphaNumericDT(document.dqtsForm.elements['teamCenterCoordinator'].value))
			&& (document.dqtsForm.elements['teamCenterCoordinator'].value.length > 20)) {
		document.dqtsForm.elements['teamCenterCoordinator'].style.color = "red";
		document.dqtsForm.elements['teamCenterCoordinator'].style.backgroundColor = "yellow";
		alert("Team Center Coordinator can not be greater than 20 characters");
		return false;
	} else {
		document.dqtsForm.elements['teamCenterCoordinator'].style.color = "black";
		document.dqtsForm.elements['teamCenterCoordinator'].style.backgroundColor = "white";
	}

	// Engineer
	if (document.dqtsForm.elements['engineerCupid'] == null
			|| (document.dqtsForm.elements['engineerCupid'] != null && document.dqtsForm.elements['engineerCupid'].value.length == 0)) {
		document.dqtsForm.elements['engineerCupid'].style.color = "red";
		document.dqtsForm.elements['engineerCupid'].style.backgroundColor = "yellow";
		alert("Engineer CwsId is a required field.");
		return false;
	} else if ((document.dqtsForm.elements['engineerCupid'] != null)
			&& (!checkInputAlphaNumericDT(document.dqtsForm.elements['engineerCupid'].value))) {
		document.dqtsForm.elements['engineerCupid'].style.color = "red";
		document.dqtsForm.elements['engineerCupid'].style.backgroundColor = "yellow";
		alert("Engineer CwsId" + text);
		return false;
	} else if ((document.dqtsForm.elements['engineerCupid'] != null)
			&& (checkInputAlphaNumericDT(document.dqtsForm.elements['engineerCupid'].value))
			&& (document.dqtsForm.elements['engineerCupid'].value.length > 20)) {
		document.dqtsForm.elements['engineerCupid'].style.color = "red";
		document.dqtsForm.elements['engineerCupid'].style.backgroundColor = "yellow";
		alert("Engineer CwsId can not be greater than 20 characters");
		return false;
	} else {
		document.dqtsForm.elements['engineerCupid'].style.color = "black";
		document.dqtsForm.elements['engineerCupid'].style.backgroundColor = "white";
	}

	// Model Number
	if ((document.dqtsForm.elements['modelNumber'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['modelNumber'].value))) {
		document.dqtsForm.elements['modelNumber'].style.color = "red";
		document.dqtsForm.elements['modelNumber'].style.backgroundColor = "yellow";
		alert("Model Number" + text);
		return false;
	} else if ((document.dqtsForm.elements['modelNumber'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['modelNumber'].value))
			&& (document.dqtsForm.elements['modelNumber'].value.length > 10)) {
		document.dqtsForm.elements['modelNumber'].style.color = "red";
		document.dqtsForm.elements['modelNumber'].style.backgroundColor = "yellow";
		alert("Model Number can not be greater than 10 characters");
		return false;
	} else {
		document.dqtsForm.elements['modelNumber'].style.color = "black";
		document.dqtsForm.elements['modelNumber'].style.backgroundColor = "white";
	}

	// Engineering Supervisor
	if (document.dqtsForm.elements['engineerSupervisor'] == null
			|| (document.dqtsForm.elements['engineerSupervisor'] != null && document.dqtsForm.elements['engineerSupervisor'].value.length == 0)) {
		document.dqtsForm.elements['engineerSupervisor'].style.color = "red";
		document.dqtsForm.elements['engineerSupervisor'].style.backgroundColor = "yellow";
		alert("Engineering Supervisor CwsId is a required field.");
		return false;
	} else if ((document.dqtsForm.elements['engineerSupervisor'] != null)
			&& (!checkInputAlphaNumericDT(document.dqtsForm.elements['engineerSupervisor'].value))) {
		document.dqtsForm.elements['engineerSupervisor'].style.color = "red";
		document.dqtsForm.elements['engineerSupervisor'].style.backgroundColor = "yellow";
		alert("Engineering Supervisor CwsId" + text);
		return false;
	} else if ((document.dqtsForm.elements['engineerSupervisor'] != null)
			&& (checkInputAlphaNumericDT(document.dqtsForm.elements['engineerSupervisor'].value))
			&& (document.dqtsForm.elements['engineerSupervisor'].value.length > 20)) {
		document.dqtsForm.elements['engineerSupervisor'].style.color = "red";
		document.dqtsForm.elements['engineerSupervisor'].style.backgroundColor = "yellow";
		alert("Engineering Supervisor CwsId can not be greater than 20 characters");
		return false;
	} else {
		document.dqtsForm.elements['engineerSupervisor'].style.color = "black";
		document.dqtsForm.elements['engineerSupervisor'].style.backgroundColor = "white";
	}

	// Engine Series
	if ((document.dqtsForm.elements['engineSeries'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['engineSeries'].value))) {
		document.dqtsForm.elements['engineSeries'].style.color = "red";
		document.dqtsForm.elements['engineSeries'].style.backgroundColor = "yellow";
		alert("Engine Series" + text);
		return false;
	} else if ((document.dqtsForm.elements['engineSeries'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['engineSeries'].value))
			&& (document.dqtsForm.elements['engineSeries'].value.length > 15)) {
		document.dqtsForm.elements['engineSeries'].style.color = "red";
		document.dqtsForm.elements['engineSeries'].style.backgroundColor = "yellow";
		alert("Engine Series can not be greater than 15 characters");
		return false;
	} else {
		document.dqtsForm.elements['engineSeries'].style.color = "black";
		document.dqtsForm.elements['engineSeries'].style.backgroundColor = "white";
	}

	// Records Job Number
	if ((document.dqtsForm.elements['recordsJobNumber'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['recordsJobNumber'].value))) {
		document.dqtsForm.elements['recordsJobNumber'].style.color = "red";
		document.dqtsForm.elements['recordsJobNumber'].style.backgroundColor = "yellow";
		alert("Records Job Number" + text);
		return false;
	} else if ((document.dqtsForm.elements['recordsJobNumber'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['recordsJobNumber'].value))
			&& (document.dqtsForm.elements['recordsJobNumber'].value.length > 10)) {
		document.dqtsForm.elements['recordsJobNumber'].style.color = "red";
		document.dqtsForm.elements['recordsJobNumber'].style.backgroundColor = "yellow";
		alert("Records Job Number can not be greater than 10 characters");
		return false;
	} else {
		document.dqtsForm.elements['recordsJobNumber'].style.color = "black";
		document.dqtsForm.elements['recordsJobNumber'].style.backgroundColor = "white";
	}

	// Release Facility
	if (document.dqtsForm.elements['releaseFacility'] == null
			|| (document.dqtsForm.elements['releaseFacility'] != null && document.dqtsForm.elements['releaseFacility'].value.length == 0)) {
		document.dqtsForm.elements['releaseFacility'].style.color = "red";
		document.dqtsForm.elements['releaseFacility'].style.backgroundColor = "yellow";
		alert("Facility is a required field.");
		return false;
	} else {
		document.dqtsForm.elements['releaseFacility'].style.color = "black";
		document.dqtsForm.elements['releaseFacility'].style.backgroundColor = "white";
	}

	// Package Priority
	if (document.dqtsForm.elements['packagePriority'] == null
			|| (document.dqtsForm.elements['packagePriority'] != null && document.dqtsForm.elements['packagePriority'].value.length == 0)) {
		document.dqtsForm.elements['packagePriority'].style.color = "red";
		document.dqtsForm.elements['packagePriority'].style.backgroundColor = "yellow";
		alert("Package Priority is a required field.");
		return false;
	} else {
		document.dqtsForm.elements['packagePriority'].style.color = "black";
		document.dqtsForm.elements['packagePriority'].style.backgroundColor = "white";
	}

	// Reason for Release
	if ((document.dqtsForm.elements['reasonForReleaseMemo'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['reasonForReleaseMemo'].value))) {
		document.dqtsForm.elements['reasonForReleaseMemo'].style.color = "red";
		document.dqtsForm.elements['reasonForReleaseMemo'].style.backgroundColor = "yellow";
		alert("Reason for Release" + text);
		return false;
	} else if ((document.dqtsForm.elements['reasonForReleaseMemo'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['reasonForReleaseMemo'].value))
			&& (document.dqtsForm.elements['reasonForReleaseMemo'].value.length > 255)) {
		document.dqtsForm.elements['reasonForReleaseMemo'].style.color = "red";
		document.dqtsForm.elements['reasonForReleaseMemo'].style.backgroundColor = "yellow";
		alert("Reason for Release can not be greater than 255 characters");
		return false;
	} else {
		document.dqtsForm.elements['reasonForReleaseMemo'].style.color = "black";
		document.dqtsForm.elements['reasonForReleaseMemo'].style.backgroundColor = "white";
	}

	return true;
}

function validateWrapperDetailInfo() {

	var text = " contains invalid characters.  May contain only a-z,A-Z,0-9";
	// Part Number
	if (document.dqtsForm.elements['partNumber'] == null
			|| (document.dqtsForm.elements['partNumber'] != null && document.dqtsForm.elements['partNumber'].value.length == 0)) {
		document.dqtsForm.elements['partNumber'].style.color = "red";
		document.dqtsForm.elements['partNumber'].style.backgroundColor = "yellow";
		alert("Part Number is a required field.");
		return false;
	} else if ((document.dqtsForm.elements['partNumber'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['partNumber'].value))) {
		document.dqtsForm.elements['partNumber'].style.color = "red";
		document.dqtsForm.elements['partNumber'].style.backgroundColor = "yellow";
		alert("Part Number " + text);
		return false;
	} else if ((document.dqtsForm.elements['partNumber'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['partNumber'].value))
			&& (document.dqtsForm.elements['partNumber'].value.length > 7)) {
		document.dqtsForm.elements['partNumber'].style.color = "red";
		document.dqtsForm.elements['partNumber'].style.backgroundColor = "yellow";
		alert("Part Number can not be greater than 7 characters");
		return false;
	} else {
		document.dqtsForm.elements['partNumber'].style.color = "black";
		document.dqtsForm.elements['partNumber'].style.backgroundColor = "white";
	}

	// Part Type
	if (document.dqtsForm.elements['inputPartTypeList'] == null
			|| (document.dqtsForm.elements['inputPartTypeList'].options[document.dqtsForm.elements['inputPartTypeList'].selectedIndex].value = null
					&& document.dqtsForm.elements['inputPartTypeList'].options[document.dqtsForm.elements['inputPartTypeList'].selectedIndex].value.length == 0)) {
		document.dqtsForm.elements['inputPartTypeList'].style.color = "red";
		document.dqtsForm.elements['inputPartTypeList'].style.backgroundColor = "yellow";
		alert("Part Type is a required field.");
		return false;
	} else {
		document.dqtsForm.elements['inputPartTypeList'].style.color = "black";
		document.dqtsForm.elements['inputPartTypeList'].style.backgroundColor = "white";
	}

	// Engineering Change Level
	if (document.dqtsForm.elements['engineeringChangeLevel'] == null
			|| (document.dqtsForm.elements['engineeringChangeLevel'] != null && document.dqtsForm.elements['engineeringChangeLevel'].value.length == 0)) {
		document.dqtsForm.elements['engineeringChangeLevel'].style.color = "red";
		document.dqtsForm.elements['engineeringChangeLevel'].style.backgroundColor = "yellow";
		alert("Engineering Change Level is a required field.");
		return false;
	} else if ((document.dqtsForm.elements['engineeringChangeLevel'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['engineeringChangeLevel'].value))) {
		document.dqtsForm.elements['engineeringChangeLevel'].style.color = "red";
		document.dqtsForm.elements['engineeringChangeLevel'].style.backgroundColor = "yellow";
		alert("Engineering Change Level " + text);
		return false;
	} else if ((document.dqtsForm.elements['engineeringChangeLevel'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['engineeringChangeLevel'].value))
			&& (document.dqtsForm.elements['engineeringChangeLevel'].value.length > 5)) {
		document.dqtsForm.elements['engineeringChangeLevel'].style.color = "red";
		document.dqtsForm.elements['engineeringChangeLevel'].style.backgroundColor = "yellow";
		alert("Engineering Change Level can not be greater than 5 characters");
		return false;
	} else {
		document.dqtsForm.elements['engineeringChangeLevel'].style.color = "black";
		document.dqtsForm.elements['engineeringChangeLevel'].style.backgroundColor = "white";
	}

	// Engineering Version
	if ((document.dqtsForm.elements['engineeringVersion'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['engineeringVersion'].value))) {
		document.dqtsForm.elements['engineeringVersion'].style.color = "red";
		document.dqtsForm.elements['engineeringVersion'].style.backgroundColor = "yellow";
		alert("Engineering Version " + text);
		return false;
	} else if ((document.dqtsForm.elements['engineeringVersion'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['engineeringVersion'].value))
			&& (document.dqtsForm.elements['engineeringVersion'].value.length > 3)) {
		document.dqtsForm.elements['engineeringVersion'].style.color = "red";
		document.dqtsForm.elements['engineeringVersion'].style.backgroundColor = "yellow";
		alert("Engineering Version can not be greater than 3 characters");
		return false;
	} else {
		document.dqtsForm.elements['engineeringVersion'].style.color = "black";
		document.dqtsForm.elements['engineeringVersion'].style.backgroundColor = "white";
	}

	// EDS Name
	if (document.dqtsForm.elements['edsName'] == null
			|| (document.dqtsForm.elements['edsName'] != null && document.dqtsForm.elements['edsName'].value.length == 0)) {
		document.dqtsForm.elements['edsName'].style.color = "red";
		document.dqtsForm.elements['edsName'].style.backgroundColor = "yellow";
		alert("EDS Name is a required field.");
		return false;
	} else if ((document.dqtsForm.elements['edsName'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['edsName'].value))) {
		document.dqtsForm.elements['edsName'].style.color = "red";
		document.dqtsForm.elements['edsName'].style.backgroundColor = "yellow";
		alert("EDS Name " + text);
		return false;
	} else if ((document.dqtsForm.elements['edsName'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['edsName'].value))
			&& (document.dqtsForm.elements['edsName'].value.length > 50)) {
		document.dqtsForm.elements['edsName'].style.color = "red";
		document.dqtsForm.elements['edsName'].style.backgroundColor = "yellow";
		alert("EDS Name can not be greater than 50 characters");
		return false;
	} else {
		document.dqtsForm.elements['edsName'].style.color = "black";
		document.dqtsForm.elements['edsName'].style.backgroundColor = "white";
	}

	// Job Part Number Type
	if (document.dqtsForm.elements['inputJobPartNumberTypeList'] == null
			|| (document.dqtsForm.elements['inputJobPartNumberTypeList'].options[document.dqtsForm.elements['inputJobPartNumberTypeList'].selectedIndex].value = null
					&& document.dqtsForm.elements['inputJobPartNumberTypeList'].options[document.dqtsForm.elements['inputJobPartNumberTypeList'].selectedIndex].value.length == 0)) {
		document.dqtsForm.elements['inputJobPartNumberTypeList'].style.color = "red";
		document.dqtsForm.elements['inputJobPartNumberTypeList'].style.backgroundColor = "yellow";
		alert("Job Part Number Type is a required field.");
		return false;
	} else {
		document.dqtsForm.elements['inputJobPartNumberTypeList'].style.color = "black";
		document.dqtsForm.elements['inputJobPartNumberTypeList'].style.backgroundColor = "white";
	}

	// Planning Job Number
	if ((document.dqtsForm.elements['planningJobNumber'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['planningJobNumber'].value))) {
		document.dqtsForm.elements['planningJobNumber'].style.color = "red";
		document.dqtsForm.elements['planningJobNumber'].style.backgroundColor = "yellow";
		alert("Planning Job Number " + text);
		return false;
	} else if ((document.dqtsForm.elements['planningJobNumber'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['planningJobNumber'].value))
			&& (document.dqtsForm.elements['planningJobNumber'].value.length > 15)) {
		document.dqtsForm.elements['planningJobNumber'].style.color = "red";
		document.dqtsForm.elements['planningJobNumber'].style.backgroundColor = "yellow";
		alert("Planning Job Number can not be greater than 15 characters");
		return false;
	} else {
		document.dqtsForm.elements['planningJobNumber'].style.color = "black";
		document.dqtsForm.elements['planningJobNumber'].style.backgroundColor = "white";
	}

	// Design Control
	if (document.dqtsForm.elements['designControl'] == null
			|| (document.dqtsForm.elements['designControl'] != null && document.dqtsForm.elements['designControl'].value.length == 0)) {
		document.dqtsForm.elements['designControl'].style.color = "red";
		document.dqtsForm.elements['designControl'].style.backgroundColor = "yellow";
		alert("Design Control is a required field.");
		return false;
	} else if ((document.dqtsForm.elements['designControl'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['designControl'].value))) {
		document.dqtsForm.elements['designControl'].style.color = "red";
		document.dqtsForm.elements['designControl'].style.backgroundColor = "yellow";
		alert("Design Control " + text);
		return false;
	} else if ((document.dqtsForm.elements['designControl'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['designControl'].value))
			&& (document.dqtsForm.elements['designControl'].value.length > 15)) {
		document.dqtsForm.elements['designControl'].style.color = "red";
		document.dqtsForm.elements['designControl'].style.backgroundColor = "yellow";
		alert("Design Control can not be greater than 15 characters");
		return false;
	} else {
		document.dqtsForm.elements['designControl'].style.color = "black";
		document.dqtsForm.elements['designControl'].style.backgroundColor = "white";
	}

	// Designer CwsId
	if ((document.dqtsForm.elements['designerDisplayName'] != null)
			&& (!checkInputAlphaNumericDT(document.dqtsForm.elements['designerDisplayName'].value))) {
		document.dqtsForm.elements['designerDisplayName'].style.color = "red";
		document.dqtsForm.elements['designerDisplayName'].style.backgroundColor = "yellow";
		alert("Designer CwsId " + text);
		return false;
	} else if ((document.dqtsForm.elements['designerDisplayName'] != null)
			&& (checkInputAlphaNumericDT(document.dqtsForm.elements['designerDisplayName'].value))
			&& (document.dqtsForm.elements['designerDisplayName'].value.length > 20)) {
		document.dqtsForm.elements['designerDisplayName'].style.color = "red";
		document.dqtsForm.elements['designerDisplayName'].style.backgroundColor = "yellow";
		alert("Designer CwsId can not be greater than 20 characters");
		return false;
	} else {
		document.dqtsForm.elements['designerDisplayName'].style.color = "black";
		document.dqtsForm.elements['designerDisplayName'].style.backgroundColor = "white";
	}

	// Detailer CwsId
	if (document.dqtsForm.elements['detailerDisplayName'] == null
			|| (document.dqtsForm.elements['detailerDisplayName'] != null && document.dqtsForm.elements['detailerDisplayName'].value.length == 0)) {
		document.dqtsForm.elements['detailerDisplayName'].style.color = "red";
		document.dqtsForm.elements['detailerDisplayName'].style.backgroundColor = "yellow";
		alert("Detailer CwsId is a required field.");
		return false;
	} else if ((document.dqtsForm.elements['detailerDisplayName'] != null)
			&& (!checkInputAlphaNumericDT(document.dqtsForm.elements['detailerDisplayName'].value))) {
		document.dqtsForm.elements['detailerDisplayName'].style.color = "red";
		document.dqtsForm.elements['detailerDisplayName'].style.backgroundColor = "yellow";
		alert("Detailer CwsId " + text);
		return false;
	} else if ((document.dqtsForm.elements['detailerDisplayName'] != null)
			&& (checkInputAlphaNumericDT(document.dqtsForm.elements['detailerDisplayName'].value))
			&& (document.dqtsForm.elements['detailerDisplayName'].value.length > 20)) {
		document.dqtsForm.elements['detailerDisplayName'].style.color = "red";
		document.dqtsForm.elements['detailerDisplayName'].style.backgroundColor = "yellow";
		alert("Detailer CwsId can not be greater than 20 characters");
		return false;
	} else {
		document.dqtsForm.elements['detailerDisplayName'].style.color = "black";
		document.dqtsForm.elements['detailerDisplayName'].style.backgroundColor = "white";
	}

	// DetailerAffiliation
	if (document.dqtsForm.elements['inputDetailerAffiliationList'] == null
			|| (document.dqtsForm.elements['inputDetailerAffiliationList'].options[document.dqtsForm.elements['inputDetailerAffiliationList'].selectedIndex].value != null && document.dqtsForm.elements['inputDetailerAffiliationList'].options[document.dqtsForm.elements['inputDetailerAffiliationList'].selectedIndex].value.length == 0)) {
		document.dqtsForm.elements['inputDetailerAffiliationList'].style.color = "red";
		document.dqtsForm.elements['inputDetailerAffiliationList'].style.backgroundColor = "yellow";
		alert("Detailer Affiliation is a required field.");
		return false;
	} else {
		document.dqtsForm.elements['inputDetailerAffiliationList'].style.color = "black";
		document.dqtsForm.elements['inputDetailerAffiliationList'].style.backgroundColor = "white";
	}

	return true;
}

function validateDetailTable(tableID) {

	var table = document.getElementById(tableID);
	rowCount = table.rows.length;
	rowsChecked = false;
	var text = " contains invalid characters.  May contain only a-z,A-Z,0-9";
	
	if (rowCount > 1) {
		var j = 0;
		for (i = 1; i < table.rows.length; i++) {
			row = table.rows[i];
//			alert(row.cells[1].childNodes[0].value);
			// Part Number
			if (row.cells[0].childNodes[0] == null
					|| (row.cells[0].childNodes[0] != null && row.cells[0].childNodes[0].value.length == 0)) {
				row.cells[0].childNodes[0].style.color = "red";
				row.cells[0].childNodes[0].style.backgroundColor = "yellow";
				alert("Part Number is required");
				return false;
			} else if ((row.cells[0].childNodes[0] != null)
					&& (!checkInputAlphaNumericDT(row.cells[0].childNodes[0].value))) {
				row.cells[0].childNodes[0].style.color = "red";
				row.cells[0].childNodes[0].style.backgroundColor = "yellow";
				alert("Part Number" + text);
				return false;
			} else if ((row.cells[0].childNodes[0] != null)
					&& (checkInputAlphaNumericDT(row.cells[0].childNodes[0].value))
					&& (row.cells[0].childNodes[0].value.length > 7)) {
				row.cells[0].childNodes[0].style.color = "red";
				row.cells[0].childNodes[0].style.backgroundColor = "yellow";
				alert("Part Number can not be greater than 7 characters");
				return false;
			} else {
				row.cells[0].childNodes[0].style.color = "black";
				row.cells[0].childNodes[0].style.backgroundColor = "white";
			}

			// Part Type
			if (row.cells[2].childNodes[0] == null
					|| ((row.cells[2].childNodes[j].options[row.cells[2].childNodes[j].selectedIndex].value != null) && (row.cells[2].childNodes[j].options[row.cells[2].childNodes[j].selectedIndex].value.length <= 0))) {
				row.cells[2].childNodes[j].style.color = "red";
				row.cells[2].childNodes[j].style.backgroundColor = "yellow";
				alert("Part Type is a required field.");
				return false;
			} else {
				row.cells[2].childNodes[j].style.color = "black";
				row.cells[2].childNodes[j].style.backgroundColor = "white";
			}

			// Engineering Change Level
			if (row.cells[3].childNodes[0] == null
					|| (row.cells[3].childNodes[0] != null && row.cells[3].childNodes[0].value.length == 0)) {
				row.cells[3].childNodes[0].style.color = "red";
				row.cells[3].childNodes[0].style.backgroundColor = "yellow";
				alert("Engineering Change Level is required");
				return false;
			} else if ((row.cells[3].childNodes[0] != null)
					&& (!checkInputAlphaNumericDT(row.cells[3].childNodes[0].value))) {
				row.cells[3].childNodes[0].style.color = "red";
				row.cells[3].childNodes[0].style.backgroundColor = "yellow";
				alert("Engineering Change Level" + text);
				return false;
			} else if ((row.cells[3].childNodes[0] != null)
					&& (checkInputAlphaNumericDT(row.cells[3].childNodes[0].value))
					&& (row.cells[3].childNodes[0].value.length > 5)) {
				row.cells[3].childNodes[0].style.color = "red";
				row.cells[3].childNodes[0].style.backgroundColor = "yellow";
				alert("Engineering Change Level can not be greater than 5 characters");
				return false;
			} else {
				row.cells[3].childNodes[0].style.color = "black";
				row.cells[3].childNodes[0].style.backgroundColor = "white";
			}

			// Engineering Version
			if ((row.cells[4].childNodes[0] != null)
					&& (!checkInputAlphaNumericSpecialCharDT(row.cells[4].childNodes[0].value))) {
				row.cells[4].childNodes[0].style.color = "red";
				row.cells[4].childNodes[0].style.backgroundColor = "yellow";
				alert("Engineering Version" + text);
				return false;
			} else if ((row.cells[4].childNodes[0] != null)
					&& (checkInputAlphaNumericSpecialCharDT(row.cells[4].childNodes[0].value))
					&& (row.cells[4].childNodes[0].value.length > 4)) {
				row.cells[4].childNodes[0].style.color = "red";
				row.cells[4].childNodes[0].style.backgroundColor = "yellow";
				alert("Engineering Version can not be greater than 4 characters");
				return false;
			} else {
				row.cells[4].childNodes[0].style.color = "black";
				row.cells[4].childNodes[0].style.backgroundColor = "white";
			}

			// EDS Name
			if (row.cells[5].childNodes[0] == null
					|| (row.cells[5].childNodes[0] != null && row.cells[5].childNodes[0].value.length == 0)) {
				row.cells[5].childNodes[0].style.color = "red";
				row.cells[5].childNodes[0].style.backgroundColor = "yellow";
				alert("EDS Name is required");
				return false;
			} else if ((row.cells[5].childNodes[0] != null)
					&& (!checkInputAlphaNumericSpecialCharDT(row.cells[5].childNodes[0].value))) {
				row.cells[5].childNodes[0].style.color = "red";
				row.cells[5].childNodes[0].style.backgroundColor = "yellow";
				alert("EDS Name" + text);
				return false;
			} else if ((row.cells[5].childNodes[0] != null)
					&& (checkInputAlphaNumericSpecialCharDT(row.cells[5].childNodes[0].value))
					&& (row.cells[5].childNodes[0].value.length > 50)) {
				row.cells[5].childNodes[0].style.color = "red";
				row.cells[5].childNodes[0].style.backgroundColor = "yellow";
				alert("EDS Name can not be greater than 50 characters");
				return false;
			} else {
				row.cells[5].childNodes[0].style.color = "black";
				row.cells[5].childNodes[0].style.backgroundColor = "white";
			}

			// Job Part Number Type
			if (row.cells[6].childNodes[0] == null
					|| ((row.cells[6].childNodes[j].options[row.cells[6].childNodes[j].selectedIndex].value != null) && (row.cells[6].childNodes[j].options[row.cells[6].childNodes[j].selectedIndex].value.length <= 0))) {
				row.cells[6].childNodes[j].style.color = "red";
				row.cells[6].childNodes[j].style.backgroundColor = "yellow";
				alert("Job Part Number Type is a required field.");
				return false;
			} else {
				
				row.cells[6].childNodes[j].style.color = "black";
				row.cells[6].childNodes[j].style.backgroundColor = "white";
			}
			
			// Planning Job Number
			if ((row.cells[7].childNodes[0] != null)
					&& (!checkInputAlphaNumericDT(row.cells[7].childNodes[0].value))) {
				row.cells[7].childNodes[0].style.color = "red";
				row.cells[7].childNodes[0].style.backgroundColor = "yellow";
				alert("Planning Job Number" + text);
				return false;
			} else if ((row.cells[7].childNodes[0] != null)
					&& (checkInputAlphaNumericDT(row.cells[7].childNodes[0].value))
					&& (row.cells[6].childNodes[0].value.length > 15)) {
				row.cells[7].childNodes[0].style.color = "red";
				row.cells[7].childNodes[0].style.backgroundColor = "yellow";
				alert("Planning Job Number can not be greater than 15 characters");
				return false;
			} else {
				row.cells[7].childNodes[0].style.color = "black";
				row.cells[7].childNodes[0].style.backgroundColor = "white";
			}

			// Design Control
			if (row.cells[8].childNodes[0] == null
					|| (row.cells[8].childNodes[0] != null && row.cells[8].childNodes[0].value.length == 0)) {
				row.cells[8].childNodes[0].style.color = "red";
				row.cells[8].childNodes[0].style.backgroundColor = "yellow";
				alert("Design Control is required");
				return false;
			} else if ((row.cells[8].childNodes[0] != null)
					&& (!checkInputAlphaNumericDT(row.cells[7].childNodes[0].value))) {
				row.cells[8].childNodes[0].style.color = "red";
				row.cells[8].childNodes[0].style.backgroundColor = "yellow";
				alert("Design Control" + text);
				return false;
			} else if ((row.cells[8].childNodes[0] != null)
					&& (checkInputAlphaNumericDT(row.cells[7].childNodes[0].value))
					&& (row.cells[8].childNodes[0].value.length > 15)) {
				row.cells[8].childNodes[0].style.color = "red";
				row.cells[8].childNodes[0].style.backgroundColor = "yellow";
				alert("Design Control can not be greater than 15 characters");
				return false;
			} else {
				row.cells[8].childNodes[0].style.color = "black";
				row.cells[8].childNodes[0].style.backgroundColor = "white";
			}

			// Designer CwsId
			if ((row.cells[9].childNodes[0] != null)
					&& (!checkInputAlphaNumericDT(row.cells[9].childNodes[0].value))) {
				row.cells[9].childNodes[0].style.color = "red";
				row.cells[9].childNodes[0].style.backgroundColor = "yellow";
				alert("Designer CwsId" + text);
				return false;
			} else if ((row.cells[9].childNodes[0] != null)
					&& (checkInputAlphaNumericDT(row.cells[9].childNodes[0].value))
					&& (row.cells[9].childNodes[0].value.length > 20)) {
				row.cells[9].childNodes[0].style.color = "red";
				row.cells[9].childNodes[0].style.backgroundColor = "yellow";
				alert("Designer CwsId can not be greater than 20 characters");
				return false;
			} else {
				row.cells[9].childNodes[0].style.color = "black";
				row.cells[9].childNodes[0].style.backgroundColor = "white";
			}

			// Detailer CwsId
			if (row.cells[10].childNodes[0] == null
					|| (row.cells[10].childNodes[0] != null && row.cells[10].childNodes[0].value.length == 0)) {
				row.cells[10].childNodes[0].style.color = "red";
				row.cells[10].childNodes[0].style.backgroundColor = "yellow";
				alert("Detailer Control is required");
				return false;
			} else if ((row.cells[10].childNodes[0] != null)
					&& (!checkInputAlphaNumericDT(row.cells[10].childNodes[0].value))) {
				row.cells[10].childNodes[0].style.color = "red";
				row.cells[10].childNodes[0].style.backgroundColor = "yellow";
				alert("Detailer CwsId" + text);
				return false;
			} else if ((row.cells[10].childNodes[0] != null)
					&& (checkInputAlphaNumericDT(row.cells[10].childNodes[0].value))
					&& (row.cells[10].childNodes[0].value.length > 20)) {
				row.cells[10].childNodes[0].style.color = "red";
				row.cells[10].childNodes[0].style.backgroundColor = "yellow";
				alert("Detailer CwsId can not be greater than 20 characters");
				return false;
			} else {
				row.cells[10].childNodes[0].style.color = "black";
				row.cells[10].childNodes[0].style.backgroundColor = "white";
			}

			// Detailer Affiliation
			if (((row.cells[11].childNodes[j].options[row.cells[11].childNodes[j].selectedIndex].value != null) && (row.cells[11].childNodes[j].options[row.cells[11].childNodes[j].selectedIndex].value.length <= 0))) {
				row.cells[11].childNodes[j].style.color = "red";
				row.cells[11].childNodes[j].style.backgroundColor = "yellow";
				alert("Detailer Affiliation is a required field.");
				return false;
			} else {
				row.cells[11].childNodes[j].style.color = "black";
				row.cells[11].childNodes[j].style.backgroundColor = "white";
			}

			if (((row.cells[0].childNodes[0] == null) || (row.cells[0].childNodes[0].value.length == 0))
					&& ((row.cells[1].childNodes[0] == null) || (row.cells[1].childNodes[0].value.length == 0))) {
				alert("Both Part Number and Engineering Change Level must be entered");
				return false;
			}

			if ((row.cells[0].childNodes[0] == null || row.cells[0].childNodes[0].value.length <= 0)
					&& (row.cells[2].childNodes[0] == null || row.cells[2].childNodes[0].value.length <= 0)
					&& (row.cells[3].childNodes[0] == null || row.cells[3].childNodes[0].value.length <= 0)
					&& (row.cells[4].childNodes[0] == null || row.cells[4].childNodes[0].value.length <= 0)
					&& (row.cells[5].childNodes[0] == null || row.cells[5].childNodes[0].value.length <= 0)
					&& (row.cells[6].childNodes[0] == null || row.cells[6].childNodes[0].value.length <= 0)
					&& (row.cells[7].childNodes[0] == null || row.cells[7].childNodes[0].value.length <= 0)
					&& (row.cells[8].childNodes[0] == null || row.cells[8].childNodes[0].value.length <= 0)
					&& (row.cells[9].childNodes[0] == null || row.cells[9].childNodes[0].value.length <= 0)
					&& (row.cells[10].childNodes[0] == null || row.cells[10].childNodes[0].value.length <= 0)
					&& (row.cells[11].childNodes[0] == null || row.cells[11].childNodes[0].value.length <= 0)) {
				alert("Wrapper Detail row cannot be blank");
				return false;
			}
		}
	}

	return true;
}

function validateAssignmentTable(tableID) {

	var table = document.getElementById(tableID);
	rowCount = table.rows.length;
	rowsChecked = false;

	if (rowCount > 1) {
		for (i = 1; i < table.rows.length; i++) {
			row = table.rows[i];

			if ((row.cells[6].childNodes[0] != null && row.cells[6].childNodes[0].text.length > 0)
					&& (row.cells[5].childNodes[0] == null || (row.cells[5].childNodes[0] != null && row.cells[5].childNodes[0].text.length <= 0))) {
				alert("Checker must be selected before Mentor can be assigned");
				return false;
			}
		}
	}

	return true;
}

function saveValue(tableId, elementId) {

	var table = document.getElementById(tableId);
	rowCount = table.rows.length;
	rowsChecked = false;

	if (rowCount > 1) {
		for (i = 1; i < table.rows.length; i++) {
			row = table.rows[i];
			chkbox = row.cells[8].childNodes[0];

			if (null != chkbox && true == chkbox.checked) {
				rowsChecked = true;
				table.deleteRow(i);
				rowCount--;
				i--;
			}
		}
	}
	if (false == rowsChecked) {
		alert("You must first select Package Detail via checkbox on the right");
	}

	return true;
}

function showHide(_myDiv) {
	var myDivToChange = document.getElementById(_myDiv);
	if (myDivToChange.style.display == 'block') {
		myDivToChange.style.display = 'none';
	} else {
		myDivToChange.style.display = 'block';
	}
}

function hideShow(_myDiv) {
	var myDivToChange = document.getElementById(_myDiv);
	if (myDivToChange.style.display == 'none') {
		myDivToChange.style.display = 'block';
	} else {
		myDivToChange.style.display = 'none';
	}
}

function showHideMentorBlock(_myDiv, checker) {

	setChecker(checker);

	var myDivToChange = document.getElementById(_myDiv);

	if (checker != null && checker.length > 0) {
		// alert("In display block");
		myDivToChange.style.display = 'block';
		return false;
	} else {
		// alert("In display none");
		myDivToChange.style.display = 'none';
		return false;
	}

	return true;
}

var chk = "";
;

function setChecker(val) {

	if (val == null || val.length == 0) {
		chk = "";
	} else {
		chk = val;
	}
	return true;
}

function isCheckerSelected(mentor, checker) {

	var c = checker;
	var m = mentor;
	if ((m != null && m != '') && (c == null || c == '' || c.length == 0)) {
		alert("Checker must be selected before mentor may be assigned.");
		setChecker("");
		return false;
	}

	setChecker("");
	return true;
}

function showHideErrorChecklistCommentMetrics(_myDiv, checker) {
	try {
		setChecker(checker);

		var myDivToChange = document.getElementById(_myDiv);

		if (checker != null && checker.length > 0) {
			// alert("In display block");
			myDivToChange.style.display = 'block';
			return false;
		} else {
			// alert("In display none");
			myDivToChange.style.display = 'none';
			return false;
		}

	} catch (e) {
	}

	return true;
}

function saveRejectionComments(trackingNumber, value, source) {

	// var val = document.dqtsForm.elements['reasonForRejection'].value;
	var val = value;
	// alert(val);

	if (val != null) {
		if (val.length > 255) {
			alert("Rejection Comments can not be greater than 255 characters");
			return false;
		} else if (!checkInputAlphaNumericSpecialCharDT(val)) {
			alert("Rejection Comments contains invalid characters.  May contain only a-z,A-Z,0-9");
			return false;
		} else if (confirm("Reject wrapper " + trackingNumber
				+ " from Checking?")) {
			if (val.length > 0 && checkInputAlphaNumericDT(trackingNumber)) {

				if (source == 'workload') {
					var xmlhttp;
					var params = 'crumb=reset&method=REJECT Submit to Checking&selectedTrackingNumber='
							+ trackingNumber
							+ '&source='
							+ source
							+ '&reasonForRejection='
							+ val
							+ '&x='
							+ Math.random();

					// document.getElementById('UpdateMsg').style.display =
					// 'block';
					showUpdatingByTrackingNumber(trackingNumber);

					if (window.XMLHttpRequest) {// code for IE7+, Firefox,
												// Chrome, Opera, Safari
						xmlhttp = new XMLHttpRequest();
					} else {// code for IE6, IE5
						xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
					}

					xmlhttp.onreadystatechange = function() {

						if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

							var output = xmlhttp.responseText;

							if (output.indexOf("<form") > 0) {
								var tmp = output.substring(output
										.indexOf("<form"), output
										.indexOf("</form>")); // div segment

								tmp = tmp.substring(tmp.indexOf(">") + 1);

								document.getElementById("Data").innerHTML = tmp;
								document.getElementById('UpdateMsg').style.display = 'none';

							}
							return false;

						}
					}
					xmlhttp.open("POST",
							'/dqts/admin/package/packageManagementAjaxCall.do',
							true);
					xmlhttp.setRequestHeader("Content-type",
							"application/x-www-form-urlencoded");
					xmlhttp.send(params);
				} else {
					openModal();
					var url = '/dqts/admin/package/workload.do?crumb=reset&method=REJECT+Submit+to+Checking&selectedTrackingNumber='
							+ trackingNumber
							+ '&source='
							+ source
							+ '&x='
							+ Math.random();
					location.href = url + '&reasonForRejection=' + val;
				}
			} else {
				alert("Please enter rejection comments");
				return false;
			}
		}
	}
	return false;
}

function setAuditRetrieveVals(url) {
	// alert("I'm in here");
	// alert("I'm in here: " + url);

	var facility = document.getElementById('releaseFacility').value;
	var begDate = document.getElementById('begDate').value;
	var endDate = document.getElementById('endDate').value;
	var numParts = document.getElementById('numberPartsForAudit').value;

	// alert("facility: "+facility);
	// alert("begDate: "+begDate);
	// alert("endDate: "+endDate);
	// alert("numParts: "+numParts);

	if (begDate.length > 0 && endDate.length > 0) {
		location.href = url + '&endDate=' + endDate + '&begDate=' + begDate
				+ '&x=' + Math.random();

	} else {
		alert("Please enter all fields");
	}
}

function retrieveChangeNoticeDetails(changeNoticeNumber, jobTitle) {
	// if(checkInputAlphaNumericSpecialCharDT(changeNoticeNumber,jobTitle)){
	if (changeNoticeNumber) {
		// alert('retrieveChangeNoticeDetails '+ changeNoticeNumber);//for
		// testing
		// method = admin.package.retrieveChangeNoticeDetails.action
		openModal();
		// alert("breaking here");
		window
				.open(
						'/dqts/admin/package/reviewChangeNoticeDetail.do?crumb=reset&method=Retrieve+Change+Notice+Details&changeNoticeNumber='
								+ changeNoticeNumber
								+ '&jobTitle='
								+ jobTitle
								+ '&x=' + Math.random(), 'maincontent');
	} else {
		alert("Invalid input.");
	}
}

function retrieveWrapper(trackingNumber) {
	if (checkInputAlphaNumericDT(trackingNumber)) {
		// alert('retrieveWrapper '+ trackingNumber);//for testing
		// method = admin.package.retrieve.wrapper.action
		// location.href =
		// '/dqts/admin/package/viewWrapper.do?crumb=reset&method=View+Wrapper&selectedTrackingNumber='
		// + trackingNumber;
		openModal();
		window
				.open(
						'/dqts/admin/package/viewWrapper.do?crumb=reset&method=View+Wrapper&selectedTrackingNumber='
								+ trackingNumber + '&x=' + Math.random(),
						'maincontent');
	} else {
		alert("Invalid input.");
	}
}
function rowOfLinks(trackingNumberList) {
	if (trackingNumberList.length == 0) {
		alert("Invalid input.");
	} else {

	}
}

function retrieveWrapperDetail(trackingNumber, partNumber) {

	if (checkInputAlphaNumericDT(trackingNumber)
			&& checkInputAlphaNumericDT(partNumber)) {
		// alert('retrieveWrapperDetail '+
		// trackingNumber+'&nbsp;'+partNumber);//for testing
		// method = admin.package.view.wrapperDetail.action
		// location.href =
		// '/dqts/admin/package/viewWrapperDetail.do?crumb=reset&method=View+Wrapper+Detail&selectedTrackingNumber='
		// +trackingNumber+'&selectedPartNumber='+partNumber;
		openModal();
		window
				.open(
						'/dqts/admin/package/viewWrapperDetail.do?crumb=reset&method=View+Wrapper+Detail&selectedTrackingNumber='
								+ trackingNumber
								+ '&selectedPartNumber='
								+ partNumber + '&x=' + Math.random(),
						'maincontent');
	} else {
		alert("Invalid input.");
	}
}

function editWrapperDetail(trackingNumber, partNumber) {
	if (checkInputAlphaNumericDT(trackingNumber)
			&& checkInputAlphaNumericDT(partNumber)) {
		// alert('retrieveWrapperDetail '+
		// trackingNumber+'&nbsp;'+partNumber);//for testing
		// method = admin.package.create.action
		// location.href =
		// '/dqts/admin/package/editWrapperDetail.do?crumb=reset&method=Create+Package&editFlag=true&&editFunction=Update+Wrapper+Detail&selectedTrackingNumber='
		// +trackingNumber+'&selectedPartNumber='+partNumber;
		window
				.open(
						'/dqts/admin/package/editWrapperDetail.do?crumb=reset&method=Create+Package&editFlag=true&&editFunction=Update+Wrapper+Detail&selectedTrackingNumber='
								+ trackingNumber
								+ '&selectedPartNumber='
								+ partNumber + '&x=' + Math.random(),
						'maincontent');
	} else {
		alert("Invalid input.");
	}
}

function editWrapper(trackingNumber) {
	if (checkInputAlphaNumericDT(trackingNumber)) {
		// alert('editWrapper '+ trackingNumber);//for testing
		// method = admin.package.create.action
		// location.href =
		// '/dqts/admin/package/editWrapper.do?crumb=reset&method=Create+Package&editFlag=true&editFunction=Update+Wrapper&selectedTrackingNumber='
		// +trackingNumber;
		window
				.open(
						'/dqts/admin/package/editWrapper.do?crumb=reset&method=Create+Package&editFlag=true&editFunction=Update+Wrapper&selectedTrackingNumber='
								+ trackingNumber + '&x=' + Math.random(),
						'maincontent');
	} else {
		alert("Invalid input.");
	}
}

function saveWrapperComments(trackingNumber) {
	var comments = document.dqtsForm.elements['wrapperComments'].value;

	if (comments != null && comments.length > 0) {
		if (comments.length > 1000) {
			document.dqtsForm.elements['wrapperComments'].style.color = "red";
			document.dqtsForm.elements['wrapperComments'].style.backgroundColor = "yellow";
			alert("Wrapper Comments can not be greater than 1000 characters");
		} else if (confirm("Save comments for " + trackingNumber + "?")) {
			// if(checkInputAlphaNumericDT(trackingNumber) &&
			// checkInputAlphaNumericSpecialCharDT(comments)){
			if (checkInputAlphaNumericDT(trackingNumber)
					&& testSpecialChar(comments)) {
				// alert('Comments: '+ comments);//for testing
				// method = admin.package.edit.save.action
				openModal();
				window
						.open(
								'/dqts/admin/package/editWrapper.do?crumb=reset&method=Save&editFlag=true&editFunction=Save+Wrapper+Comments&selectedTrackingNumber='
										+ trackingNumber
										+ '&wrapperComments='
										+ comments + '&x=' + Math.random(),
								'maincontent');
			} else {
				document.dqtsForm.elements['wrapperComments'].style.color = "red";
				document.dqtsForm.elements['wrapperComments'].style.backgroundColor = "yellow";
				alert("Wrapper Comments contains invalid characters.  The following are not allowed ~`#%&\'<>|");
			}
		}
	}
}
function saveWrapperEmails(trackingNumber) {
	var emails = document.dqtsForm.elements['wrapperEmails'].value;
//	alert(emails);
	if (emails != null && emails.length > 0) {
		if (emails.length > 1000) {
			document.dqtsForm.elements['wrapperEmails'].style.color = "red";
			document.dqtsForm.elements['wrapperEmails'].style.backgroundColor = "yellow";
			alert("Total Email text can not be greater than 1000 characters");
		} else if (confirm("Save Extra Email Recipients for " + trackingNumber
				+ "?")) {
			if (checkInputAlphaNumericDT(trackingNumber)
					&& testSpecialChar(emails)) {
				// alert('emails: '+ emails);//for testing
				// method = admin.package.edit.save.action
				window
						.open(
								'/dqts/admin/package/editWrapper.do?crumb=reset&method=Save&editFlag=true&editFunction=Save+Email+Recipients&selectedTrackingNumber='
										+ trackingNumber
										+ '&wrapperExtraEmails='
										+ emails
										+ '&x=' + Math.random(), 'maincontent');
			} else {
				document.dqtsForm.elements['wrapperEmails'].style.color = "red";
				document.dqtsForm.elements['wrapperEmails'].style.backgroundColor = "yellow";
				alert("Wrapper emails contains invalid characters.  The following are not allowed ~`#%&\'<>|");
			}
		}
	}
}

function addWrapperDetail(trackingNumber) {
	if (checkInputAlphaNumericDT(trackingNumber)) {
		// alert('addWrapperDetail '+ trackingNumber);//for testing
		// method = admin.package.create.action
		// location.href =
		// '/dqts/admin/package/addWrapperDetails.do?crumb=reset&method=Create+Package&editFlag=true&editFunction=Add+Wrapper+Detail&selectedTrackingNumber='
		// +trackingNumber;
		openModal();
		window
				.open(
						'/dqts/admin/package/addWrapperDetails.do?crumb=reset&method=Create+Package&editFlag=true&editFunction=Add+Wrapper+Detail&selectedTrackingNumber='
								+ trackingNumber + '&x=' + Math.random(),
						'maincontent');
	} else {
		alert("Invalid input.");
	}
}

function deleteWrapper(trackingNumber) {
	if (confirm("Delete wrapper " + trackingNumber + "?")) {
		if (checkInputAlphaNumericDT(trackingNumber)) {
			// alert('deleteWrapper '+ trackingNumber);//for testing
			// method = admin.package.edit.save.action
			// location.href =
			// '/dqts/admin/package/list.do?crumb=reset&method=Save&editFlag=true&editFunction=Delete+Wrapper&selectedTrackingNumber='
			// +trackingNumber;
			openModal();
			window
					.open(
							'/dqts/admin/package/list.do?crumb=reset&method=Save&editFlag=true&editFunction=Delete+Wrapper&selectedTrackingNumber='
									+ trackingNumber + '&x=' + Math.random(),
							'maincontent');
		} else {
			alert("Invalid input.");
		}
	}
}

function duplicateWrapper(trackingNumber) {
	if (confirm("Duplicate wrapper " + trackingNumber + "?")) {
		if (checkInputAlphaNumericDT(trackingNumber)) {
			// alert('deleteWrapper '+ trackingNumber);//for testing
			// method = admin.package.edit.save.action
			// location.href =
			// '/dqts/admin/package/list.do?crumb=reset&method=Save&editFlag=true&editFunction=Delete+Wrapper&selectedTrackingNumber='
			// +trackingNumber;
			openModal();
			window
					.open(
							'/dqts/admin/package/list.do?crumb=reset&method=Save&editFlag=true&editFunction=Duplicate+Wrapper&selectedTrackingNumber='
									+ trackingNumber + '&x=' + Math.random(),
							'maincontent');
		} else {
			alert("Invalid input.");
		}
	}
}

function deleteWrapperDetail(trackingNumber, partNumber) {
	if (confirm("Delete wrapper detail " + trackingNumber + "-" + partNumber
			+ "?")) {
		if (checkInputAlphaNumericDT(trackingNumber)
				&& checkInputAlphaNumericDT(partNumber)) {
			// alert('deleteWrapperDetail '+ trackingNumber
			// +'&nbsp;'+partNumber);//for testing
			// method = admin.package.edit.save.action
			// location.href =
			// '/dqts/admin/package/wrapperDetailList.do?crumb=reset&method=Save&editFlag=true&editFunction=Delete+Wrapper+Detail&selectedTrackingNumber='
			// +trackingNumber+'&selectedPartNumber='+partNumber;
			window
					.open(
							'/dqts/admin/package/wrapperDetailList.do?crumb=reset&method=Save&editFlag=true&editFunction=Delete+Wrapper+Detail&selectedTrackingNumber='
									+ trackingNumber
									+ '&selectedPartNumber='
									+ partNumber + '&x=' + Math.random(),
							'maincontent');
		} else {
			alert("Invalid input.");
		}
	}
}

function removeWrapperDetailFromWrapper(trackingNumber, partNumber) {
	if (confirm("Remove wrapper detail " + trackingNumber + "-" + partNumber
			+ " from wrapper?")) {
		if (checkInputAlphaNumericDT(trackingNumber)
				&& checkInputAlphaNumericDT(partNumber)) {
			// alert('removeWrapperDetailFromWrapper '+ trackingNumber
			// +'&nbsp;'+partNumber);//for testing
			// method = admin.package.edit.save.action
			// location.href =
			// '/dqts/admin/package/wrapperDetailList.do?crumb=reset&method=Save&editFlag=true&editFunction=Remove+Wrapper+Detail+From+Wrapper&selectedTrackingNumber='
			// +trackingNumber+'&selectedPartNumber='+partNumber;
			window
					.open(
							'/dqts/admin/package/wrapperDetailList.do?crumb=reset&method=Save&editFlag=true&editFunction=Remove+Wrapper+Detail+From+Wrapper&selectedTrackingNumber='
									+ trackingNumber
									+ '&selectedPartNumber='
									+ partNumber + '&x=' + Math.random(),
							'maincontent');
		} else {
			alert("Invalid input.");
		}
	}
}

function completeCAErrorChecklist(trackingNumber, partNumber,
		engineeringChangeLevel) {
	if (checkInputAlphaNumericDT(trackingNumber)
			&& checkInputAlphaNumericDT(partNumber)
			&& checkInputAlphaNumericSpecialCharDT(engineeringChangeLevel)) {
		// alert('completeCAErrorChecklist '+ trackingNumber
		// +'&nbsp;'+partNumber+'&nbsp;'+engineeringChangeLevel);//for testing
		// method = admin.package.errorChecklist.entry.action
		// location.href =
		// '/dqts/admin/package/errorChecklist.do?crumb=reset&method=Complete+Error+Checklist&selectedTrackingNumber='
		// +trackingNumber+'&selectedPartNumber='+partNumber+'&selectedEngineeringChangeLevel='+engineeringChangeLevel;
		window
				.open(
						'/dqts/admin/package/errorChecklist.do?crumb=reset&method=Complete+Error+Checklist&selectedTrackingNumber='
								+ trackingNumber
								+ '&selectedPartNumber='
								+ partNumber
								+ '&selectedEngineeringChangeLevel='
								+ engineeringChangeLevel
								+ '&x='
								+ Math.random(), 'maincontent');
	} else {
		alert("Invalid input.");
	}
}

function completeErrorChecklist(trackingNumber, partNumber,
		engineeringChangeLevel, checker, source) {
	if (checkInputAlphaNumericDT(trackingNumber)
			&& checkInputAlphaNumericDT(partNumber)
			&& checkInputAlphaNumericSpecialCharDT(engineeringChangeLevel)
			&& checkInputAlphaNumericDT(checker)) {
		// alert('completeErrorChecklist '+ trackingNumber
		// +'&nbsp;'+partNumber+'&nbsp;'+engineeringChangeLevel+'&nbsp;'+checker);//for
		// testing
		// method = admin.package.errorChecklist.entry.action
		// location.href =
		// '/dqts/admin/package/errorChecklist.do?crumb=reset&method=Complete+Error+Checklist&selectedTrackingNumber='
		// +trackingNumber+'&selectedPartNumber='+partNumber+'&selectedEngineeringChangeLevel='+engineeringChangeLevel+'&assignedChecker='+checker;
		window
				.open(
						'/dqts/admin/package/errorChecklist.do?crumb=reset&method=Complete+Error+Checklist&selectedTrackingNumber='
								+ trackingNumber
								+ '&selectedPartNumber='
								+ partNumber
								+ '&selectedEngineeringChangeLevel='
								+ engineeringChangeLevel
								+ '&assignedChecker='
								+ checker
								+ '&source='
								+ source
								+ '&x='
								+ Math.random(), 'maincontent');
	} else {
		alert("Invalid input.");
	}
}

function completeErrorChecklistNoChk(trackingNumber, partNumber,
		engineeringChangeLevel, source) {
	if (checkInputAlphaNumericDT(trackingNumber)
			&& checkInputAlphaNumericDT(partNumber)
			&& checkInputAlphaNumericSpecialCharDT(engineeringChangeLevel)) {
		// alert('completeErrorChecklist '+ trackingNumber
		// +'&nbsp;'+partNumber+'&nbsp;'+engineeringChangeLevel);//for testing
		// method = admin.package.errorChecklist.entry.action
		// location.href =
		// '/dqts/admin/package/errorChecklist.do?crumb=reset&method=Complete+Error+Checklist&selectedTrackingNumber='
		// +trackingNumber+'&selectedPartNumber='+partNumber+'&selectedEngineeringChangeLevel='+engineeringChangeLevel;
		window
				.open(
						'/dqts/admin/package/errorChecklist.do?crumb=reset&method=Complete+Error+Checklist&selectedTrackingNumber='
								+ trackingNumber
								+ '&selectedPartNumber='
								+ partNumber
								+ '&selectedEngineeringChangeLevel='
								+ engineeringChangeLevel
								+ '&source='
								+ source
								+ '&x=' + Math.random(), 'maincontent');
	} else {
		alert("Invalid input.");
	}
}

function completeMentorErrorChecklist(trackingNumber, partNumber,
		engineeringChangeLevel, source) {
	if (checkInputAlphaNumericDT(trackingNumber)
			&& checkInputAlphaNumericDT(partNumber)
			&& checkInputAlphaNumericSpecialCharDT(engineeringChangeLevel)) {
		// alert('completeMentorErrorChecklist '+ trackingNumber
		// +'&nbsp;'+partNumber+'&nbsp;'+engineeringChangeLevel);//for testing
		// method = admin.package.errorChecklist.retrieve.action
		// location.href =
		// '/dqts/admin/package/mentorErrorChecklist.do?crumb=reset&method=Complete+Error+Checklist&editFlag=false&role=07&selectedTrackingNumber='
		// +trackingNumber+'&selectedPartNumber='+partNumber+'&selectedEngineeringChangeLevel='+engineeringChangeLevel;
		window
				.open(
						'/dqts/admin/package/mentorErrorChecklist.do?crumb=reset&method=Complete+Error+Checklist&editFlag=false&role=07&selectedTrackingNumber='
								+ trackingNumber
								+ '&selectedPartNumber='
								+ partNumber
								+ '&selectedEngineeringChangeLevel='
								+ engineeringChangeLevel
								+ '&source='
								+ source
								+ '&x=' + Math.random(), 'maincontent');
	} else {
		alert("Invalid input.");
	}
}

function captureNoErrors(trackingNumber, partNumber, engineeringChangeLevel) {
	if (checkInputAlphaNumericDT(trackingNumber)
			&& checkInputAlphaNumericDT(partNumber)
			&& checkInputAlphaNumericSpecialCharDT(engineeringChangeLevel)) {
		// alert('captureNoErrors '+ trackingNumber
		// +'&nbsp;'+partNumber+'&nbsp;'+engineeringChangeLevel);//for testing
		// method = admin.package.corpAudit.recordNoErrors.action
		// location.href =
		// '/dqts/admin/package/auditList.do?crumb=reset&method=Record+No+Errors&selectedTrackingNumber='
		// +trackingNumber+'&selectedPartNumber='+partNumber+'&selectedEngineeringChangeLevel='+engineeringChangeLevel;
		window
				.open(
						'/dqts/admin/package/auditList.do?crumb=reset&method=Record+No+Errors&selectedTrackingNumber='
								+ trackingNumber
								+ '&selectedPartNumber='
								+ partNumber
								+ '&selectedEngineeringChangeLevel='
								+ engineeringChangeLevel
								+ '&x='
								+ Math.random(), 'maincontent');
	} else {
		alert("Invalid input.");
	}
}

function retrieveWrapperList(assignedCheckerCupid) {
	if (checkInputAlphaNumericDT(assignedCheckerCupid)) {
		// alert('retrieveWrapperList '+ assignedCheckerCupid);//for testing
		// method = admin.package.wrapperDetail.list.action
		// location.href =
		// '/dqts/admin/package/wrapperDetailList.do?crumb=reset&method=Retrieve+Wrapper+Detail+List&allocationReview=true&selectedAssignedCheckerCupid='
		// +assignedCheckerCupid;
		openModal();
		window
				.open(
						'/dqts/admin/package/wrapperDetailList.do?crumb=reset&method=Retrieve+Wrapper+Detail+List&allocationReview=true&selectedAssignedCheckerCupid='
								+ assignedCheckerCupid + '&x=' + Math.random(),
						'maincontent');
	} else {
		alert("Invalid input.");
	}
}

function approveSubmitForChecking(trackingNumber, source) {
	if (confirm("Approve wrapper " + trackingNumber + " for Checking?")) {
		if (checkInputAlphaNumericDT(trackingNumber)) {
			// alert('approveSubmitForChecking '+ trackingNumber);//for testing
			// method = admin.package.submitToChecking.approve.action
			// window.open('/dqts/admin/package/workload.do?crumb=reset&method=APPROVE+Submit+to+Checking&selectedTrackingNumber='
			// +trackingNumber+'&source='+source, 'maincontent');}

			if (source == 'workload') {
				var xmlhttp;
				var params = 'crumb=reset&method=APPROVE Submit to Checking&selectedTrackingNumber='
						+ trackingNumber
						+ '&source='
						+ source
						+ '&x='
						+ Math.random();

				// document.getElementById('UpdateMsg').style.display = 'block';
				showUpdatingByTrackingNumber(trackingNumber);

				if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome,
											// Opera, Safari
					xmlhttp = new XMLHttpRequest();
				} else {// code for IE6, IE5
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}

				xmlhttp.onreadystatechange = function() {

					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

						var output = xmlhttp.responseText;

						if (output.indexOf("<form") > 0) {
							var tmp = output.substring(output.indexOf("<form"),
									output.indexOf("</form>")); // div segment

							tmp = tmp.substring(tmp.indexOf(">") + 1);

							document.getElementById("Data").innerHTML = tmp;
							document.getElementById('UpdateMsg').style.display = 'none';

						}
						return false;
					}
				}
				xmlhttp.open("POST",
						'/dqts/admin/package/packageManagementAjaxCall.do',
						true);
				xmlhttp.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xmlhttp.send(params);
			} else {
				openModal();
				window
						.open(
								'/dqts/admin/package/workload.do?crumb=reset&method=APPROVE+Submit+to+Checking&selectedTrackingNumber='
										+ trackingNumber
										+ '&source='
										+ source
										+ '&x=' + Math.random(), 'maincontent');
			}
		} else {
			alert("Invalid input.");
		}
	}
}

function rejectSubmitForChecking(trackingNumber, reason) {
	if (confirm("Reject wrapper " + trackingNumber + " from Checking?")) {
		if (checkInputAlphaNumericSpecialCharDT(trackingNumber)) {
			// alert('rejectSubmitForChecking '+
			// trackingNumber+'&nbsp;'+reason);//for testing
			// method = admin.package.submitToChecking.reject.action
			// window.open('/dqts/admin/package/workload.do?crumb=reset&method=REJECT+Submit+to+Checking&selectedTrackingNumber='
			// +trackingNumber+'&reasonForRejection='+reason+'&source='+source,
			// 'maincontent');

			if (source == 'workload') {
				var xmlhttp;
				var params = 'crumb=reset&method=REJECT Submit to Checking&selectedTrackingNumber='
						+ trackingNumber
						+ '&reasonForRejection='
						+ reason
						+ '&source=' + source + '&x=' + Math.random();

				// document.getElementById('UpdateMsg').style.display = 'block';
				showUpdatingByTrackingNumber(trackingNumber);

				if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome,
											// Opera, Safari
					xmlhttp = new XMLHttpRequest();
				} else {// code for IE6, IE5
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}

				xmlhttp.onreadystatechange = function() {

					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

						var output = xmlhttp.responseText;

						if (output.indexOf("<form") > 0) {
							var tmp = output.substring(output.indexOf("<form"),
									output.indexOf("</form>")); // div segment

							tmp = tmp.substring(tmp.indexOf(">") + 1);

							document.getElementById("Data").innerHTML = tmp;
							document.getElementById('UpdateMsg').style.display = 'none';

						}
						return false;
					}
				}
				xmlhttp.open("POST",
						'/dqts/admin/package/packageManagementAjaxCall.do',
						true);
				xmlhttp.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xmlhttp.send(params);
			} else {
				openModal();
				window
						.open(
								'/dqts/admin/package/workload.do?crumb=reset&method=REJECT+Submit+to+Checking&selectedTrackingNumber='
										+ trackingNumber
										+ '&reasonForRejection='
										+ reason
										+ '&source='
										+ source
										+ '&x='
										+ Math.random(), 'maincontent');
			}

		} else {
			alert("Invalid input.");
		}
	}
}

function updateErrorChecklist(trackingNumber, partNumber, assignedChecker,
		engineeringChangeLevel, role, source) {
	// alert('updateErrorChecklist '+
	// trackingNumber+'&nbsp;'+partNumber+'&nbsp;'+assignedChecker+'&nbsp;'+engineeringChangeLevel+'&nbsp;'+role);//for
	// testing
	if (role == 09 && checkInputAlphaNumericDT(trackingNumber)
			&& checkInputAlphaNumericDT(partNumber)
			&& checkInputAlphaNumericSpecialCharDT(engineeringChangeLevel)
			&& checkInputNumericDT(role)) {
		// alert('updateErrorChecklist '+
		// trackingNumber+'&nbsp;'+partNumber+'&nbsp;'+engineeringChangeLevel+'&nbsp;'+role);//for
		// testing
		// method = admin.package.errorChecklist.retrieve.action
		// location.href =
		// '/dqts/admin/package/errorChecklist.do?crumb=reset&method=Edit+Error+Checklist&editFlag=true&selectedTrackingNumber='
		// +trackingNumber+'&selectedPartNumber='+partNumber+'&selectedEngineeringChangeLevel='+engineeringChangeLevel+'&role='+role;
		window
				.open(
						'/dqts/admin/package/errorChecklist.do?crumb=reset&method=Edit+Error+Checklist&editFlag=true&selectedTrackingNumber='
								+ trackingNumber
								+ '&selectedPartNumber='
								+ partNumber
								+ '&selectedEngineeringChangeLevel='
								+ engineeringChangeLevel
								+ '&role='
								+ role
								+ '&source=' + source + '&x=' + Math.random(),
						'maincontent');
	} else if (checkInputAlphaNumericDT(trackingNumber)
			&& checkInputAlphaNumericDT(partNumber)
			&& checkInputAlphaNumericDT(assignedChecker)
			&& checkInputAlphaNumericSpecialCharDT(engineeringChangeLevel)
			&& checkInputNumericDT(role)) {
		// alert('updateErrorChecklist '+
		// trackingNumber+'&nbsp;'+partNumber+'&nbsp;'+assignedChecker+'&nbsp;'+engineeringChangeLevel+'&nbsp;'+role);//for
		// testing
		// method = admin.package.errorChecklist.retrieve.action
		// location.href =
		// '/dqts/admin/package/errorChecklist.do?crumb=reset&method=Edit+Error+Checklist&editFlag=true&selectedTrackingNumber='
		// +trackingNumber+'&selectedPartNumber='+partNumber+'&assignedChecker='+assignedChecker+'&selectedEngineeringChangeLevel='+engineeringChangeLevel+'&role='+role;
		window
				.open(
						'/dqts/admin/package/errorChecklist.do?crumb=reset&method=Edit+Error+Checklist&editFlag=true&selectedTrackingNumber='
								+ trackingNumber
								+ '&selectedPartNumber='
								+ partNumber
								+ '&assignedChecker='
								+ assignedChecker
								+ '&selectedEngineeringChangeLevel='
								+ engineeringChangeLevel
								+ '&role='
								+ role
								+ '&source=' + source + '&x=' + Math.random(),
						'maincontent');
	} else {
		alert("Invalid input.");
	}
}

function updateMentorErrorChecklist(trackingNumber, partNumber,
		assignedChecker, engineeringChangeLevel, role, source) {
	if (checkInputAlphaNumericDT(trackingNumber)
			&& checkInputAlphaNumericDT(partNumber)
			&& checkInputAlphaNumericDT(assignedChecker)
			&& checkInputAlphaNumericSpecialCharDT(engineeringChangeLevel)
			&& checkInputNumericDT(role)) {
		// alert('updateMentorErrorChecklist '+
		// trackingNumber+'&nbsp;'+partNumber+'&nbsp;'+assignedChecker+'&nbsp;'+engineeringChangeLevel+'&nbsp;'+role);//for
		// testing
		// method = admin.package.errorChecklist.retrieve.action
		// location.href =
		// '/dqts/admin/package/mentorErrorChecklist.do?crumb=reset&method=Edit+Error+Checklist&editFlag=true&selectedTrackingNumber='
		// +trackingNumber+'&selectedPartNumber='+partNumber+'&assignedChecker='+assignedChecker+'&selectedEngineeringChangeLevel='+engineeringChangeLevel+'&role='+role;
		window
				.open(
						'/dqts/admin/package/mentorErrorChecklist.do?crumb=reset&method=Edit+Error+Checklist&editFlag=true&selectedTrackingNumber='
								+ trackingNumber
								+ '&selectedPartNumber='
								+ partNumber
								+ '&assignedChecker='
								+ assignedChecker
								+ '&selectedEngineeringChangeLevel='
								+ engineeringChangeLevel
								+ '&role='
								+ role
								+ '&source=' + source + '&x=' + Math.random(),
						'maincontent');
	} else {
		alert("Invalid input.");
	}
}

function claim(role, trackingNumber, partNumber, source) {
	/*
	 * method = admin.package.wrapperDetail.claim.action
	 * window.open('/dqts/admin/package/workload.do?crumb=reset&method=Begin+Review&role='+role+'&selectedTrackingNumber='
	 * +trackingNumber+'&selectedPartNumber='+partNumber+'&source='+source,
	 * 'maincontent');
	 */
	
	if (confirm("Claim " + trackingNumber + "-" + partNumber + "?")) {
		if (checkInputNumericDT(role)
				&& checkInputAlphaNumericDT(trackingNumber)
				&& checkInputAlphaNumericDT(partNumber)) {
			if (source == 'workload') {
				showUpdating(trackingNumber, partNumber);
				var xmlhttp;
				var params = 'crumb=reset&method=Begin Review&role=' + role
						+ '&selectedTrackingNumber=' + trackingNumber
						+ '&selectedPartNumber=' + partNumber + '&source='
						+ source + '&x=' + Math.random();

				if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome,
											// Opera, Safari
					xmlhttp = new XMLHttpRequest();
				} else {// code for IE6, IE5
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}

				xmlhttp.onreadystatechange = function() {

					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

						var output = xmlhttp.responseText;

						if (output.indexOf("<form") > 0) {
							var tmp = output.substring(output.indexOf("<form"),
									output.indexOf("</form>")); // div segment
							tmp = tmp.substring(tmp.indexOf(">") + 1);

							document.getElementById("Data").innerHTML = tmp;
							document.getElementById('UpdateMsg').style.display = 'none';

						}
						return false;
					}
				}
				xmlhttp.open("POST",
						'/dqts/admin/package/packageManagementAjaxCall.do',
						true);
				xmlhttp.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xmlhttp.send(params);
			} else {
				window.open(
						'/dqts/admin/package/workload.do?crumb=reset&method=Begin+Review&role='
								+ role + '&selectedTrackingNumber='
								+ trackingNumber + '&selectedPartNumber='
								+ partNumber + '&source=' + source + '&x='
								+ Math.random(), 'maincontent');
			}
		} else {
			alert("Invalid input.");
		}
	}
}

function claimAll(role, trackingNumber, partNumber, source) {
	/*
	 * method = admin.package.allWrapperDetails.claim.actionn
	 * window.open('/dqts/admin/package/workload.do?crumb=reset&method=Claim+All+Package+Parts&role='+role+'&selectedTrackingNumber='+trackingNumber+'&source='+source,
	 * 'maincontent');
	 */

	if (confirm("Claim available " + trackingNumber + " parts?")) {
		if (checkInputNumericDT(role)
				&& checkInputAlphaNumericDT(trackingNumber)) {

			if (source == 'workload') {
				var xmlhttp;
				var params = 'crumb=reset&method=Claim All Package Parts&role='
						+ role + '&selectedTrackingNumber=' + trackingNumber
						+ '&source=' + source + '&x=' + Math.random();

				// document.getElementById('UpdateMsg').style.display = 'block';
				showUpdatingByTrackingNumber(trackingNumber);

				if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome,
											// Opera, Safari
					xmlhttp = new XMLHttpRequest();
				} else {// code for IE6, IE5
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}

				xmlhttp.onreadystatechange = function() {

					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

						var output = xmlhttp.responseText;

						if (output.indexOf("<form") > 0) {
							var tmp = output.substring(output.indexOf("<form"),
									output.indexOf("</form>")); // div segment

							tmp = tmp.substring(tmp.indexOf(">") + 1);

							document.getElementById("Data").innerHTML = tmp;
							document.getElementById('UpdateMsg').style.display = 'none';

						}
						return false;
					}
				}
				xmlhttp.open("POST",
						'/dqts/admin/package/packageManagementAjaxCall.do',
						true);
				xmlhttp.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xmlhttp.send(params);
			} else {
				window
						.open(
								'/dqts/admin/package/workload.do?crumb=reset&method=Claim+All+Package+Parts&role='
										+ role
										+ '&selectedTrackingNumber='
										+ trackingNumber
										+ '&source='
										+ source
										+ '&x=' + Math.random(), 'maincontent');
			}
		} else {
			alert("Invalid input.");
		}
	}
}

function receiveFromEngineer(role, trackingNumber, partNumber, source) {
	if (confirm("Receive " + trackingNumber + " parts from Engineer?")) {
		if (checkInputNumericDT(role)
				&& checkInputAlphaNumericDT(trackingNumber)
				&& checkInputAlphaNumericDT(partNumber)) {
			// alert('claim '+ trackingNumber+'&nbsp;'+partNumber);//for testing
			// admin.package.wrapperDetail.receiveFromEngineer.action
			// window.open('/dqts/admin/package/workload.do?crumb=reset&method=Receive+from+Engineer&editFlag=true&role='
			// +role+'&selectedTrackingNumber='
			// +trackingNumber+'&selectedPartNumber='+partNumber+'&source='+source,
			// 'maincontent');

			if (source == 'workload') {
				// showUpdating(trackingNumber,partNumber);
				showUpdatingByTrackingNumber(trackingNumber);
				var xmlhttp;
				var params = 'crumb=reset&method=Receive from Engineer&editFlag=true&role='
						+ role
						+ '&selectedTrackingNumber='
						+ trackingNumber
						+ '&selectedPartNumber='
						+ partNumber
						+ '&source='
						+ source + '&x=' + Math.random();

				if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome,
											// Opera, Safari
					xmlhttp = new XMLHttpRequest();
				} else {// code for IE6, IE5
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}

				xmlhttp.onreadystatechange = function() {

					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

						var output = xmlhttp.responseText;

						if (output.indexOf("<form") > 0) {
							var tmp = output.substring(output.indexOf("<form"),
									output.indexOf("</form>")); // div segment
							tmp = tmp.substring(tmp.indexOf(">") + 1);

							document.getElementById("Data").innerHTML = tmp;
							document.getElementById('UpdateMsg').style.display = 'none';

						}
						return false;

					}
				}
				xmlhttp.open("POST",
						'/dqts/admin/package/packageManagementAjaxCall.do',
						true);
				xmlhttp.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xmlhttp.send(params);
			} else {
				window
						.open(
								'/dqts/admin/package/workload.do?crumb=reset&method=Receive+from+Engineer&editFlag=true&role='
										+ role
										+ '&selectedTrackingNumber='
										+ trackingNumber
										+ '&selectedPartNumber='
										+ partNumber
										+ '&source='
										+ source
										+ '&x='
										+ Math.random(), 'maincontent');
			}

		} else {
			alert("Invalid input.");
		}
	}
}
function receiveBackCheck(role, trackingNumber, partNumber, source) {
	if (confirm("Receive " + trackingNumber + "-" + partNumber
			+ " from Checker?")) {
		if (checkInputNumericDT(role)
				&& checkInputAlphaNumericDT(trackingNumber)
				&& checkInputAlphaNumericDT(partNumber)) {
			// alert('claim '+ trackingNumber+'&nbsp;'+partNumber);//for testing
			// method = admin.package.wrapperDetail.claim.action
			// window.open('/dqts/admin/package/workload.do?crumb=reset&method=Begin+Review&editFlag=true&role='
			// +role+'&selectedTrackingNumber='
			// +trackingNumber+'&selectedPartNumber='+partNumber+'&source='+source,
			// 'maincontent');

			if (source == 'workload') {
				showUpdating(trackingNumber, partNumber);
				var xmlhttp;
				var params = 'crumb=reset&method=Begin Review&editFlag=true&role='
						+ role
						+ '&selectedTrackingNumber='
						+ trackingNumber
						+ '&selectedPartNumber='
						+ partNumber
						+ '&source='
						+ source + '&x=' + Math.random();

				if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome,
											// Opera, Safari
					xmlhttp = new XMLHttpRequest();
				} else {// code for IE6, IE5
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}

				xmlhttp.onreadystatechange = function() {

					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

						var output = xmlhttp.responseText;

						if (output.indexOf("<form") > 0) {
							var tmp = output.substring(output.indexOf("<form"),
									output.indexOf("</form>")); // div segment
							tmp = tmp.substring(tmp.indexOf(">") + 1);

							document.getElementById("Data").innerHTML = tmp;
							document.getElementById('UpdateMsg').style.display = 'none';

						}
						return false;
					}
				}
				xmlhttp.open("POST",
						'/dqts/admin/package/packageManagementAjaxCall.do',
						true);
				xmlhttp.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xmlhttp.send(params);
			} else {
				window
						.open(
								'/dqts/admin/package/workload.do?crumb=reset&method=Begin+Review&editFlag=true&role='
										+ role
										+ '&selectedTrackingNumber='
										+ trackingNumber
										+ '&selectedPartNumber='
										+ partNumber
										+ '&source='
										+ source
										+ '&x='
										+ Math.random(), 'maincontent');
			}

		} else {
			alert("Invalid input.");
		}
	}
}

function sendToMentor(trackingNumber, partNumber, checkingMentor, source) {
	// method = admin.package.wrapperDetail.sendToMentor.action
	// window.open('/dqts/admin/package/workload.do?crumb=reset&method=Send+to+Mentor&selectedTrackingNumber='
	// +trackingNumber+'&selectedPartNumber='+partNumber+'&checkingMentor='+checkingMentor+'&source='+source,
	// 'maincontent');

	if (confirm("Send " + trackingNumber + "-" + partNumber + " to Mentor?")) {
		if (checkInputAlphaNumericDT(trackingNumber)
				&& checkInputAlphaNumericDT(partNumber)
				&& checkInputAlphaNumericDT(checkingMentor)) {

			if (source == 'workload') {
				showUpdating(trackingNumber, partNumber);
				var xmlhttp;
				var params = 'crumb=reset&method=Send to Mentor&selectedTrackingNumber='
						+ trackingNumber
						+ '&selectedPartNumber='
						+ partNumber
						+ '&checkingMentor='
						+ checkingMentor
						+ '&source='
						+ source + '&x=' + Math.random();

				if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome,
											// Opera, Safari
					xmlhttp = new XMLHttpRequest();
				} else {// code for IE6, IE5
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}

				xmlhttp.onreadystatechange = function() {

					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

						var output = xmlhttp.responseText;

						if (output.indexOf("<form") > 0) {
							var tmp = output.substring(output.indexOf("<form"),
									output.indexOf("</form>")); // div segment
							tmp = tmp.substring(tmp.indexOf(">") + 1);

							document.getElementById("Data").innerHTML = tmp;
							document.getElementById('UpdateMsg').style.display = 'none';

						}
						return false;
					}
				}
				xmlhttp.open("POST",
						'/dqts/admin/package/packageManagementAjaxCall.do',
						true);
				xmlhttp.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xmlhttp.send(params);
			} else {
				window
						.open(
								'/dqts/admin/package/workload.do?crumb=reset&method=Send+to+Mentor&selectedTrackingNumber='
										+ trackingNumber
										+ '&selectedPartNumber='
										+ partNumber
										+ '&checkingMentor='
										+ checkingMentor
										+ '&source='
										+ source
										+ '&x='
										+ Math.random(), 'maincontent');
			}
		} else {
			alert("Invalid input.");
		}
	}
}

function sendAllToMentor(trackingNumber, partNumber, checkingMentor,
		assignedChecker, source) {
	// method = admin.package.wrapperDetail.sendToMentor.action
	// window.open('/dqts/admin/package/workload.do?crumb=reset&method=Send+to+Mentor&selectedTrackingNumber='
	// +trackingNumber+'&selectedPartNumber='+partNumber+'&checkingMentor='+checkingMentor+'&source='+source,
	// 'maincontent');

	if (confirm("Send " + trackingNumber + " parts to Mentor?")) {
		if (checkInputAlphaNumericDT(trackingNumber)
				&& checkInputAlphaNumericDT(checkingMentor)) {

			if (source == 'workload') {
				showUpdatingByTrackingNumber(trackingNumber);
				var xmlhttp;
				var params = 'crumb=reset&method=Send to Mentor&selectedTrackingNumber='
						+ trackingNumber
						+ '&checkingMentor='
						+ checkingMentor
						+ '&assignedChecker='
						+ assignedChecker
						+ '&source='
						+ source + '&x=' + Math.random();

				if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome,
											// Opera, Safari
					xmlhttp = new XMLHttpRequest();
				} else {// code for IE6, IE5
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}

				xmlhttp.onreadystatechange = function() {

					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

						var output = xmlhttp.responseText;

						if (output.indexOf("<form") > 0) {
							var tmp = output.substring(output.indexOf("<form"),
									output.indexOf("</form>")); // div segment
							tmp = tmp.substring(tmp.indexOf(">") + 1);

							document.getElementById("Data").innerHTML = tmp;
							document.getElementById('UpdateMsg').style.display = 'none';

						}
						return false;
					}
				}
				xmlhttp.open("POST",
						'/dqts/admin/package/packageManagementAjaxCall.do',
						true);
				xmlhttp.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xmlhttp.send(params);
			} else {
				window
						.open(
								'/dqts/admin/package/workload.do?crumb=reset&method=Send+to+Mentor&selectedTrackingNumber='
										+ trackingNumber
										+ '&checkingMentor='
										+ checkingMentor
										+ '&assignedChecker='
										+ assignedChecker
										+ '&source='
										+ source
										+ '&x=' + Math.random(), 'maincontent');
			}
		} else {
			alert("Invalid input.");
		}
	}
}

function returnToMentor(trackingNumber, partNumber, checkingMentor, source) {
	// method = admin.package.wrapperDetail.sendToMentor.action
	// window.open('/dqts/admin/package/workload.do?crumb=reset&method=Send+to+Mentor&editFunction=return&selectedTrackingNumber='
	// +trackingNumber+'&selectedPartNumber='+partNumber+'&checkingMentor='+checkingMentor+'&source='+source,
	// 'maincontent');

	if (confirm("Return " + trackingNumber + "-" + partNumber + " to Mentor?")) {
		if (checkInputAlphaNumericDT(trackingNumber)
				&& checkInputAlphaNumericDT(partNumber)
				&& checkInputAlphaNumericDT(checkingMentor)) {

			if (source == 'workload') {
				showUpdating(trackingNumber, partNumber);
				var xmlhttp;
				var params = 'crumb=reset&method=Send to Mentor&editFunction=return&selectedTrackingNumber='
						+ trackingNumber
						+ '&selectedPartNumber='
						+ partNumber
						+ '&checkingMentor='
						+ checkingMentor
						+ '&source='
						+ source + '&x=' + Math.random();

				if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome,
											// Opera, Safari
					xmlhttp = new XMLHttpRequest();
				} else {// code for IE6, IE5
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}

				xmlhttp.onreadystatechange = function() {

					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

						var output = xmlhttp.responseText;

						if (output.indexOf("<form") > 0) {
							var tmp = output.substring(output.indexOf("<form"),
									output.indexOf("</form>")); // div segment

							tmp = tmp.substring(tmp.indexOf(">") + 1);

							document.getElementById("Data").innerHTML = tmp;
							document.getElementById('UpdateMsg').style.display = 'none';

						}
						return false;
					}
				}
				xmlhttp.open("POST",
						'/dqts/admin/package/packageManagementAjaxCall.do',
						true);
				xmlhttp.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xmlhttp.send(params);
			} else {
				window
						.open(
								'/dqts/admin/package/workload.do?crumb=reset&method=Send+to+Mentor&editFunction=return&selectedTrackingNumber='
										+ trackingNumber
										+ '&selectedPartNumber='
										+ partNumber
										+ '&checkingMentor='
										+ checkingMentor
										+ '&source='
										+ source
										+ '&x='
										+ Math.random(), 'maincontent');
			}
		} else {
			alert("Invalid input.");
		}
	}
}

function returnToEngineer(role, trackingNumber, partNumber, assignedChecker,
		source) {
	if (confirm("Return " + trackingNumber + " parts to Engineer?")) {
		if (checkInputNumericDT(role)
				&& checkInputAlphaNumericDT(trackingNumber)
				&& checkInputAlphaNumericDT(partNumber)
				&& checkInputAlphaNumericDT(assignedChecker)) {
			// alert('returnToEngineer '+
			// trackingNumber+'&nbsp;'+partNumber+'&nbsp;'+assignedChecker);//for
			// testing
			// method = admin.package.wrapperDetail.returnToEngineer.action
			// window.open('/dqts/admin/package/workload.do?crumb=reset&method=Return+to+Engineer&role='
			// +role+'&selectedTrackingNumber='
			// +trackingNumber+'&selectedPartNumber='+partNumber+'&assignedCheckerCupid='+assignedChecker+'&source='+source,
			// 'maincontent');

			if (source == 'workload') {
				// showUpdating(trackingNumber,partNumber);
				showUpdatingByTrackingNumber(trackingNumber);
				var xmlhttp;
				var params = 'crumb=reset&method=Return to Engineer&role='
						+ role + '&selectedTrackingNumber=' + trackingNumber
						+ '&selectedPartNumber=' + partNumber
						+ '&assignedCheckerCupid=' + assignedChecker
						+ '&source=' + source + '&x=' + Math.random();

				if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome,
											// Opera, Safari
					xmlhttp = new XMLHttpRequest();
				} else {// code for IE6, IE5
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}

				xmlhttp.onreadystatechange = function() {

					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

						var output = xmlhttp.responseText;

						if (output.indexOf("<form") > 0) {
							var tmp = output.substring(output.indexOf("<form"),
									output.indexOf("</form>")); // div segment
							tmp = tmp.substring(tmp.indexOf(">") + 1);

							document.getElementById("Data").innerHTML = tmp;
							document.getElementById('UpdateMsg').style.display = 'none';

						}
						return false;
					}
				}
				xmlhttp.open("POST",
						'/dqts/admin/package/packageManagementAjaxCall.do',
						true);
				xmlhttp.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xmlhttp.send(params);
			} else {
				window.open(
						'/dqts/admin/package/workload.do?crumb=reset&method=Return+to+Engineer&role='
								+ role + '&selectedTrackingNumber='
								+ trackingNumber + '&selectedPartNumber='
								+ partNumber + '&assignedCheckerCupid='
								+ assignedChecker + '&source=' + source + '&x='
								+ Math.random(), 'maincontent');
			}

		} else {
			alert("Invalid input.");
		}
	}
}

function sendToReleasing(trackingNumber, partNumber, source) {
	if (confirm("Send " + trackingNumber + " to Releasing?")) {
		if (checkInputAlphaNumericDT(trackingNumber)
				&& checkInputAlphaNumericDT(partNumber)) {
			// alert('sentToReleasing '+
			// trackingNumber+'&nbsp;'+partNumber+'&nbsp;'+checkingMentor);//for
			// testing
			// method = admin.package.wrapperDetail.sendToReleasing.action
			// location.href =
			// '/dqts/admin/package/workload.do?crumb=reset&method=Send+to+Releasing&selectedTrackingNumber='
			// +trackingNumber+'&selectedPartNumber='+partNumber+'&checkingMentor='+checkingMentor;

			if (source == 'workload') {
				var xmlhttp;
				var params = 'crumb=reset&method=Send to Releasing&selectedTrackingNumber='
						+ trackingNumber
						+ '&selectedPartNumber='
						+ partNumber
						+ '&source=' + source + '&x=' + Math.random();

				// document.getElementById('UpdateMsg').style.display = 'block';
				showUpdatingByTrackingNumber(trackingNumber);

				if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome,
											// Opera, Safari
					xmlhttp = new XMLHttpRequest();
				} else {// code for IE6, IE5
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}

				xmlhttp.onreadystatechange = function() {

					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

						var output = xmlhttp.responseText;

						if (output.indexOf("<form") > 0) {
							var tmp = output.substring(output.indexOf("<form"),
									output.indexOf("</form>")); // div segment

							tmp = tmp.substring(tmp.indexOf(">") + 1);

							document.getElementById("Data").innerHTML = tmp;
							document.getElementById('UpdateMsg').style.display = 'none';

						}
						return false;
					}
				}
				xmlhttp.open("POST",
						'/dqts/admin/package/packageManagementAjaxCall.do',
						true);
				xmlhttp.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xmlhttp.send(params);
			} else {
				window
						.open(
								'/dqts/admin/package/workload.do?crumb=reset&method=Send+to+Releasing&selectedTrackingNumber='
										+ trackingNumber
										+ '&selectedPartNumber='
										+ partNumber
										+ '&source='
										+ source
										+ '&x='
										+ Math.random(), 'maincontent');
			}
		} else {
			alert("Invalid input.");
		}
	}
}

function returnToReleasing(trackingNumber, partNumber, source) {
	if (confirm("Return " + trackingNumber + "-" + partNumber + "to Releasing?")) {
		if (checkInputAlphaNumericDT(trackingNumber)
				&& checkInputAlphaNumericDT(partNumber)) {
			// alert('sentToReleasing '+
			// trackingNumber+'&nbsp;'+partNumber+'&nbsp;'+checkingMentor);//for
			// testing
			// method = admin.package.wrapperDetail.sendToReleasing.action
			// window.open('/dqts/admin/package/workload.do?crumb=reset&method=Send+to+Releasing&editFlag=true&selectedTrackingNumber='+trackingNumber+'&selectedPartNumber='+partNumber+'&source='+source+'&x='+Math.random(),
			// 'maincontent');}

			if (source == 'workload') {
				showUpdating(trackingNumber, partNumber);
				var xmlhttp;
				var params = 'crumb=reset&method=Send to Releasing&editFlag=true&selectedTrackingNumber='
						+ trackingNumber
						+ '&selectedPartNumber='
						+ partNumber
						+ '&source=' + source + '&x=' + Math.random();

				if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome,
											// Opera, Safari
					xmlhttp = new XMLHttpRequest();
				} else {// code for IE6, IE5
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}

				xmlhttp.onreadystatechange = function() {

					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

						var output = xmlhttp.responseText;

						if (output.indexOf("<form") > 0) {
							var tmp = output.substring(output.indexOf("<form"),
									output.indexOf("</form>")); // div segment

							tmp = tmp.substring(tmp.indexOf(">") + 1);

							document.getElementById("Data").innerHTML = tmp;
							document.getElementById('UpdateMsg').style.display = 'none';

						}
						return false;
					}
				}
				xmlhttp.open("POST",
						'/dqts/admin/package/packageManagementAjaxCall.do',
						true);
				xmlhttp.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xmlhttp.send(params);
			} else {
				window
						.open(
								'/dqts/admin/package/workload.do?crumb=reset&method=Send+to+Releasing&editFlag=true&selectedTrackingNumber='
										+ trackingNumber
										+ '&selectedPartNumber='
										+ partNumber
										+ '&source='
										+ source
										+ '&x='
										+ Math.random(), 'maincontent');
			}
		} else {
			alert("Invalid input.");
		}
	}
}

function sendToChecker(trackingNumber, partNumber, checker, source) {
	if (confirm("Send " + trackingNumber + " - All Parts to checker?")) {
		if (checkInputAlphaNumericDT(trackingNumber)
				&& checkInputAlphaNumericDT(partNumber)
				&& checkInputAlphaNumericDT(checker)) {
			// alert('sendToChecker '+
			// trackingNumber+'&nbsp;'+partNumber+'&nbsp;'+checker);//for
			// testing
			// method = admin.package.wrapperDetail.returnToChecker.action
			// window.open('/dqts/admin/package/workload.do?crumb=reset&method=Return+to+Checker&selectedTrackingNumber='
			// +trackingNumber+'&selectedPartNumber='+partNumber+'&assignedChecker='+checker+'&source='+source+'&x='+Math.random(),
			// 'maincontent');

			if (source == 'workload') {
				showUpdatingByTrackingNumber(trackingNumber);
				var xmlhttp;
				var params = 'crumb=reset&method=Return to Checker&selectedTrackingNumber='
						+ trackingNumber
						+ '&selectedPartNumber='
						+ partNumber
						+ '&assignedChecker='
						+ checker
						+ '&source='
						+ source
						+ '&x=' + Math.random();

				if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome,
											// Opera, Safari
					xmlhttp = new XMLHttpRequest();
				} else {// code for IE6, IE5
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}

				xmlhttp.onreadystatechange = function() {

					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

						var output = xmlhttp.responseText;

						if (output.indexOf("<form") > 0) {
							var tmp = output.substring(output.indexOf("<form"),
									output.indexOf("</form>")); // div segment

							tmp = tmp.substring(tmp.indexOf(">") + 1);

							document.getElementById("Data").innerHTML = tmp;
							document.getElementById('UpdateMsg').style.display = 'none';

						}
						return false;
					}
				}
				xmlhttp.open("POST",
						'/dqts/admin/package/packageManagementAjaxCall.do',
						true);
				xmlhttp.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xmlhttp.send(params);
			} else {
				window
						.open(
								'/dqts/admin/package/workload.do?crumb=reset&method=Return+to+Checker&selectedTrackingNumber='
										+ trackingNumber
										+ '&selectedPartNumber='
										+ partNumber
										+ '&assignedChecker='
										+ checker
										+ '&source='
										+ source
										+ '&x='
										+ Math.random(), 'maincontent');
			}
		} else {
			alert("Invalid input.");
		}
	}
}

function resetCheckerReviewDecision(trackingNumber, partNumber, source) {
	if (confirm("Reset " + trackingNumber + "-" + partNumber
			+ " checker review decision?")) {
		if (checkInputAlphaNumericDT(trackingNumber)
				&& checkInputAlphaNumericDT(partNumber)) {
			// method = admin.package.wrapperDetail.reviewDecision.action
			// window.open('/dqts/admin/package/workload.do?crumb=reset&method=Review+Decision&selectedTrackingNumber='+trackingNumber+'&selectedPartNumber='+partNumber+'&checkerReviewDecision=00&editFunction=Reset&source='+source+'&x='+Math.random(),
			// 'maincontent');

			if (source == 'workload') {
				showUpdating(trackingNumber, partNumber);
				var xmlhttp;
				var params = 'crumb=reset&method=Review Decision&selectedTrackingNumber='
						+ trackingNumber
						+ '&selectedPartNumber='
						+ partNumber
						+ '&checkerReviewDecision=00&editFunction=Reset&source='
						+ source + '&x=' + Math.random();

				if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome,
											// Opera, Safari
					xmlhttp = new XMLHttpRequest();
				} else {// code for IE6, IE5
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}

				xmlhttp.onreadystatechange = function() {

					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

						var output = xmlhttp.responseText;

						if (output.indexOf("<form") > 0) {
							var tmp = output.substring(output.indexOf("<form"),
									output.indexOf("</form>")); // div segment
							tmp = tmp.substring(tmp.indexOf(">") + 1);

							document.getElementById("Data").innerHTML = tmp;
							document.getElementById('UpdateMsg').style.display = 'none';

						}
						return false;
					}
				}
				xmlhttp.open("POST",
						'/dqts/admin/package/packageManagementAjaxCall.do',
						true);
				xmlhttp.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xmlhttp.send(params);
			} else {
				window
						.open(
								'/dqts/admin/package/workload.do?crumb=reset&method=Review+Decision&selectedTrackingNumber='
										+ trackingNumber
										+ '&selectedPartNumber='
										+ partNumber
										+ '&checkerReviewDecision=00&editFunction=Reset&source='
										+ source + '&x=' + Math.random(),
								'maincontent');
			}

		} else {
			alert("Invalid input.");
		}
	}
}

function resetReleaserReviewDecision(trackingNumber, partNumber, source) {
	if (confirm("Reset " + trackingNumber + "-" + partNumber
			+ " releaser review decision?")) {
		if (checkInputAlphaNumericDT(trackingNumber)
				&& checkInputAlphaNumericDT(partNumber)) {
			// method = admin.package.wrapperDetail.reviewDecision.action
			// window.open('/dqts/admin/package/workload.do?crumb=reset&method=Review+Decision&selectedTrackingNumber='+trackingNumber+'&selectedPartNumber='+partNumber+'&releaserReviewDecision=00&editFunction=Reset&source='+source+'&x='+Math.random(),
			// 'maincontent');

			if (source == 'workload') {
				showUpdating(trackingNumber, partNumber);
				var xmlhttp;
				var params = 'crumb=reset&method=Review Decision&selectedTrackingNumber='
						+ trackingNumber
						+ '&selectedPartNumber='
						+ partNumber
						+ '&releaserReviewDecision=00&editFunction=Reset&source='
						+ source + '&x=' + Math.random();

				if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome,
											// Opera, Safari
					xmlhttp = new XMLHttpRequest();
				} else {// code for IE6, IE5
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}

				xmlhttp.onreadystatechange = function() {

					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

						var output = xmlhttp.responseText;

						if (output.indexOf("<form") > 0) {
							var tmp = output.substring(output.indexOf("<form"),
									output.indexOf("</form>")); // div segment
							tmp = tmp.substring(tmp.indexOf(">") + 1);

							document.getElementById("Data").innerHTML = tmp;
							document.getElementById('UpdateMsg').style.display = 'none';

						}
						return false;
					}
				}
				xmlhttp.open("POST",
						'/dqts/admin/package/packageManagementAjaxCall.do',
						true);
				xmlhttp.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xmlhttp.send(params);
			} else {
				window
						.open(
								'/dqts/admin/package/workload.do?crumb=reset&method=Review+Decision&selectedTrackingNumber='
										+ trackingNumber
										+ '&selectedPartNumber='
										+ partNumber
										+ '&releaserReviewDecision=00&editFunction=Reset&source='
										+ source + '&x=' + Math.random(),
								'maincontent');
			}

		} else {
			alert("Invalid input.");
		}
	}
}

function resetMentorReviewDecision(trackingNumber, partNumber, source) {
	if (confirm("Reset " + trackingNumber + "-" + partNumber
			+ " mentor review decision?")) {
		if (checkInputAlphaNumericDT(trackingNumber)
				&& checkInputAlphaNumericDT(partNumber)) {
			// method = admin.package.wrapperDetail.reviewDecision.action
			// window.open('/dqts/admin/package/workload.do?crumb=reset&method=Review+Decision&selectedTrackingNumber='+trackingNumber+'&selectedPartNumber='+partNumber+'&mentorReviewDecision=00&editFunction=Reset&source='+source+'&x='+Math.random(),
			// 'maincontent');

			if (source == 'workload') {
				showUpdating(trackingNumber, partNumber);
				var xmlhttp;
				var params = 'crumb=reset&method=Review Decision&selectedTrackingNumber='
						+ trackingNumber
						+ '&selectedPartNumber='
						+ partNumber
						+ '&mentorReviewDecision=00&editFunction=Reset&source='
						+ source + '&x=' + Math.random();

				if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome,
											// Opera, Safari
					xmlhttp = new XMLHttpRequest();
				} else {// code for IE6, IE5
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}

				xmlhttp.onreadystatechange = function() {

					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

						var output = xmlhttp.responseText;

						if (output.indexOf("<form") > 0) {
							var tmp = output.substring(output.indexOf("<form"),
									output.indexOf("</form>")); // div segment
							tmp = tmp.substring(tmp.indexOf(">") + 1);

							document.getElementById("Data").innerHTML = tmp;
							document.getElementById('UpdateMsg').style.display = 'none';

						}
						return false;
					}
				}
				xmlhttp.open("POST",
						'/dqts/admin/package/packageManagementAjaxCall.do',
						true);
				xmlhttp.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xmlhttp.send(params);
			} else {
				window
						.open(
								'/dqts/admin/package/workload.do?crumb=reset&method=Review+Decision&selectedTrackingNumber='
										+ trackingNumber
										+ '&selectedPartNumber='
										+ partNumber
										+ '&mentorReviewDecision=00&editFunction=Reset&source='
										+ source + '&x=' + Math.random(),
								'maincontent');
			}

		} else {
			alert("Invalid input.");
		}
	}
}

function submitCheckerReviewDecision(trackingNumber, partNumber,
		assignedChecker, decision, reason, source) {
	if (confirm("Submit selected review decision?")) {
		if (reason == '' && checkInputAlphaNumericDT(trackingNumber)
				&& checkInputAlphaNumericDT(partNumber)
				&& checkInputAlphaNumericDT(assignedChecker)
				&& checkInputNumericDT(decision)) {
			// alert('APPROVE: submitMentorReviewDecision '+
			// trackingNumber+'&nbsp;'+partNumber+'&nbsp;'+assignedChecker+'&nbsp;'+decision);//for
			// testing
			// method = admin.package.wrapperDetail.reviewDecision.action
			// location.href =
			// '/dqts/admin/package/workload.do?crumb=reset&method=Review+Decision&selectedTrackingNumber='
			// +trackingNumber+'&selectedPartNumber='+partNumber+'&assignedChecker='+assignedChecker+'&checkerReviewDecision='+decision;
			// window.open('/dqts/admin/package/workload.do?crumb=reset&method=Review+Decision&selectedTrackingNumber='
			// +trackingNumber+'&selectedPartNumber='+partNumber+'&assignedChecker='+assignedChecker+'&checkerReviewDecision='+decision+'&source='+source+'&x='+Math.random(),
			// 'maincontent');

			if (source == 'workload') {
				showUpdating(trackingNumber, partNumber);
				var xmlhttp;
				var params = 'crumb=reset&method=Review Decision&selectedTrackingNumber='
						+ trackingNumber
						+ '&selectedPartNumber='
						+ partNumber
						+ '&assignedChecker='
						+ assignedChecker
						+ '&checkerReviewDecision='
						+ decision
						+ '&source='
						+ source;

				if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome,
											// Opera, Safari
					xmlhttp = new XMLHttpRequest();
				} else {// code for IE6, IE5
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}

				xmlhttp.onreadystatechange = function() {

					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

						var output = xmlhttp.responseText;

						if (output.indexOf("<form") > 0) {
							var tmp = output.substring(output.indexOf("<form"),
									output.indexOf("</form>")); // div segment
							tmp = tmp.substring(tmp.indexOf(">") + 1);

							document.getElementById("Data").innerHTML = tmp;
							document.getElementById('UpdateMsg').style.display = 'none';

						}
						return false;
					}
				}
				xmlhttp.open("POST",
						'/dqts/admin/package/packageManagementAjaxCall.do',
						true);
				xmlhttp.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xmlhttp.send(params);
			} else {
				window
						.open(
								'/dqts/admin/package/workload.do?crumb=reset&method=Review+Decision&selectedTrackingNumber='
										+ trackingNumber
										+ '&selectedPartNumber='
										+ partNumber
										+ '&assignedChecker='
										+ assignedChecker
										+ '&checkerReviewDecision='
										+ decision
										+ '&source='
										+ source
										+ '&x='
										+ Math.random(), 'maincontent');
			}

		} else if (checkInputAlphaNumericDT(trackingNumber)
				&& checkInputAlphaNumericDT(partNumber)
				&& checkInputAlphaNumericDT(assignedChecker)
				&& checkInputNumericDT(decision) && checkInputNumericDT(reason)) {
			// alert('REJECT: submitCheckerReviewDecision '+
			// trackingNumber+'&nbsp;'+partNumber+'&nbsp;'+assignedChecker+'&nbsp;'+decision+'&nbsp;'+reason);//for
			// testing
			// method = admin.package.wrapperDetail.reviewDecision.action
			// location.href =
			// '/dqts/admin/package/workload.do?crumb=reset&method=Review+Decision&selectedTrackingNumber='
			// +trackingNumber+'&selectedPartNumber='+partNumber+'&assignedChecker='+assignedChecker+'&checkerReviewDecision='+decision+'&reasonForRejection='+reason;
			// window.open('/dqts/admin/package/workload.do?crumb=reset&method=Review+Decision&selectedTrackingNumber='
			// +trackingNumber+'&selectedPartNumber='+partNumber+'&assignedChecker='+assignedChecker+'&checkerReviewDecision='+decision+'&reasonForRejection='+reason+'&source='+source+'&x='+Math.random(),
			// 'maincontent');

			if (source == 'workload') {
				showUpdating(trackingNumber, partNumber);
				var xmlhttp;
				var params = 'crumb=reset&method=Review Decision&selectedTrackingNumber='
						+ trackingNumber
						+ '&selectedPartNumber='
						+ partNumber
						+ '&assignedChecker='
						+ assignedChecker
						+ '&checkerReviewDecision='
						+ decision
						+ '&reasonForRejection='
						+ reason
						+ '&source='
						+ source
						+ '&x=' + Math.random();

				if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome,
											// Opera, Safari
					xmlhttp = new XMLHttpRequest();
				} else {// code for IE6, IE5
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}

				xmlhttp.onreadystatechange = function() {

					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

						var output = xmlhttp.responseText;

						if (output.indexOf("<form") > 0) {
							var tmp = output.substring(output.indexOf("<form"),
									output.indexOf("</form>")); // div segment
							tmp = tmp.substring(tmp.indexOf(">") + 1);

							document.getElementById("Data").innerHTML = tmp;
							document.getElementById('UpdateMsg').style.display = 'none';

						}
						return false;
					}
				}
				xmlhttp.open("POST",
						'/dqts/admin/package/packageManagementAjaxCall.do',
						true);
				xmlhttp.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xmlhttp.send(params);
			} else {
				window
						.open(
								'/dqts/admin/package/workload.do?crumb=reset&method=Review+Decision&selectedTrackingNumber='
										+ trackingNumber
										+ '&selectedPartNumber='
										+ partNumber
										+ '&assignedChecker='
										+ assignedChecker
										+ '&checkerReviewDecision='
										+ decision
										+ '&reasonForRejection='
										+ reason
										+ '&source='
										+ source
										+ '&x='
										+ Math.random(), 'maincontent');
			}
		} else {
			alert("Invalid input.");
		}
	}
}

function submitCheckerSubsequentReviewDecision(trackingNumber, partNumber,
		assignedChecker, decision, reason, source) {
	if (confirm("Submit selected review decision?")) {
		if (reason == '' && checkInputAlphaNumericDT(trackingNumber)
				&& checkInputAlphaNumericDT(partNumber)
				&& checkInputAlphaNumericDT(assignedChecker)
				&& checkInputNumericDT(decision)) {
			// alert('APPROVE: submitMentorReviewDecision '+
			// trackingNumber+'&nbsp;'+partNumber+'&nbsp;'+assignedChecker+'&nbsp;'+decision);//for
			// testing
			// method = admin.package.wrapperDetail.reviewDecision.action
			// location.href =
			// '/dqts/admin/package/workload.do?crumb=reset&method=Review+Decision&selectedTrackingNumber='
			// +trackingNumber+'&selectedPartNumber='+partNumber+'&assignedChecker='+assignedChecker+'&checkerReviewDecision='+decision;

			if (source == 'workload') {
				showUpdating(trackingNumber, partNumber);
				var xmlhttp;
				var params = 'crumb=reset&method=Review Decision&editFlag=true&selectedTrackingNumber='
						+ trackingNumber
						+ '&selectedPartNumber='
						+ partNumber
						+ '&assignedChecker='
						+ assignedChecker
						+ '&checkerReviewDecision='
						+ decision
						+ '&source='
						+ source + '&x=' + Math.random();

				if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome,
											// Opera, Safari
					xmlhttp = new XMLHttpRequest();
				} else {// code for IE6, IE5
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}

				xmlhttp.onreadystatechange = function() {

					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

						var output = xmlhttp.responseText;

						if (output.indexOf("<form") > 0) {
							var tmp = output.substring(output.indexOf("<form"),
									output.indexOf("</form>")); // div segment
							tmp = tmp.substring(tmp.indexOf(">") + 1);

							document.getElementById("Data").innerHTML = tmp;
							document.getElementById('UpdateMsg').style.display = 'none';

						}
						return false;
					}
				}
				xmlhttp.open("POST",
						'/dqts/admin/package/packageManagementAjaxCall.do',
						true);
				xmlhttp.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xmlhttp.send(params);
			} else {
				window
						.open(
								'/dqts/admin/package/workload.do?crumb=reset&method=Review+Decision&editFlag=true&selectedTrackingNumber='
										+ trackingNumber
										+ '&selectedPartNumber='
										+ partNumber
										+ '&assignedChecker='
										+ assignedChecker
										+ '&checkerReviewDecision='
										+ decision
										+ '&source='
										+ source
										+ '&x='
										+ Math.random(), 'maincontent');
			}
		} else if (checkInputAlphaNumericDT(trackingNumber)
				&& checkInputAlphaNumericDT(partNumber)
				&& checkInputAlphaNumericDT(assignedChecker)
				&& checkInputNumericDT(decision) && checkInputNumericDT(reason)) {
			// alert('REJECT: submitCheckerReviewDecision '+
			// trackingNumber+'&nbsp;'+partNumber+'&nbsp;'+assignedChecker+'&nbsp;'+decision+'&nbsp;'+reason);//for
			// testing
			// method = admin.package.wrapperDetail.reviewDecision.action
			// location.href =
			// '/dqts/admin/package/workload.do?crumb=reset&method=Review+Decision&selectedTrackingNumber='
			// +trackingNumber+'&selectedPartNumber='+partNumber+'&assignedChecker='+assignedChecker+'&checkerReviewDecision='+decision+'&reasonForRejection='+reason;

			if (source == 'workload') {
				showUpdating(trackingNumber, partNumber);
				var xmlhttp;
				var params = 'crumb=reset&method=Review Decision&editFlag=true&selectedTrackingNumber='
						+ trackingNumber
						+ '&selectedPartNumber='
						+ partNumber
						+ '&assignedChecker='
						+ assignedChecker
						+ '&checkerReviewDecision='
						+ decision
						+ '&reasonForRejection='
						+ reason
						+ '&source='
						+ source
						+ '&x=' + Math.random();

				if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome,
											// Opera, Safari
					xmlhttp = new XMLHttpRequest();
				} else {// code for IE6, IE5
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}

				xmlhttp.onreadystatechange = function() {

					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

						var output = xmlhttp.responseText;

						if (output.indexOf("<form") > 0) {
							var tmp = output.substring(output.indexOf("<form"),
									output.indexOf("</form>")); // div segment
							tmp = tmp.substring(tmp.indexOf(">") + 1);

							document.getElementById("Data").innerHTML = tmp;
							document.getElementById('UpdateMsg').style.display = 'none';

						}
						return false;
					}
				}
				xmlhttp.open("POST",
						'/dqts/admin/package/packageManagementAjaxCall.do',
						true);
				xmlhttp.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xmlhttp.send(params);
			} else {
				window
						.open(
								'/dqts/admin/package/workload.do?crumb=reset&method=Review+Decision&editFlag=true&selectedTrackingNumber='
										+ trackingNumber
										+ '&selectedPartNumber='
										+ partNumber
										+ '&assignedChecker='
										+ assignedChecker
										+ '&checkerReviewDecision='
										+ decision
										+ '&reasonForRejection='
										+ reason
										+ '&source='
										+ source
										+ '&x='
										+ Math.random(), 'maincontent');
			}
		} else {
			alert("Invalid input.");
		}
	}
}

function submitMentorReviewDecision(trackingNumber, partNumber, mentor,
		decision, reason, source) {
	if (confirm("Submit selected review decision?")) {
		if (reason == '' && checkInputAlphaNumericDT(trackingNumber)
				&& checkInputAlphaNumericDT(partNumber)
				&& checkInputAlphaNumericDT(mentor)
				&& checkInputNumericDT(decision)) {
			// alert('submitMentorReviewDecision '+
			// trackingNumber+'&nbsp;'+partNumber+'&nbsp;'+mentor+'&nbsp;'+decision);//for
			// testing
			// method = admin.package.wrapperDetail.reviewDecision.action
			// window.open('/dqts/admin/package/workload.do?crumb=reset&method=Review+Decision&selectedTrackingNumber='
			// +trackingNumber+'&selectedPartNumber='+partNumber+'&checkingMentor='+mentor+'&mentorReviewDecision='+decision+'&source='+source+'&x='+Math.random(),
			// 'maincontent');

			if (source == 'workload') {
				showUpdating(trackingNumber, partNumber);
				var xmlhttp;
				var params = 'crumb=reset&method=Review Decision&selectedTrackingNumber='
						+ trackingNumber
						+ '&selectedPartNumber='
						+ partNumber
						+ '&checkingMentor='
						+ mentor
						+ '&mentorReviewDecision='
						+ decision
						+ '&source='
						+ source + '&x=' + Math.random();

				if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome,
											// Opera, Safari
					xmlhttp = new XMLHttpRequest();
				} else {// code for IE6, IE5
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}

				xmlhttp.onreadystatechange = function() {

					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

						var output = xmlhttp.responseText;

						if (output.indexOf("<form") > 0) {
							var tmp = output.substring(output.indexOf("<form"),
									output.indexOf("</form>")); // div segment
							tmp = tmp.substring(tmp.indexOf(">") + 1);

							document.getElementById("Data").innerHTML = tmp;
							document.getElementById('UpdateMsg').style.display = 'none';

						}
						return false;
					}
				}
				xmlhttp.open("POST",
						'/dqts/admin/package/packageManagementAjaxCall.do',
						true);
				xmlhttp.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xmlhttp.send(params);
			} else {
				window
						.open(
								'/dqts/admin/package/workload.do?crumb=reset&method=Review+Decision&selectedTrackingNumber='
										+ trackingNumber
										+ '&selectedPartNumber='
										+ partNumber
										+ '&checkingMentor='
										+ mentor
										+ '&mentorReviewDecision='
										+ decision
										+ '&source='
										+ source
										+ '&x='
										+ Math.random(), 'maincontent');
			}
		} else if (checkInputAlphaNumericDT(trackingNumber)
				&& checkInputAlphaNumericDT(partNumber)
				&& checkInputAlphaNumericDT(mentor)
				&& checkInputNumericDT(decision) && checkInputNumericDT(reason)) {
			// alert('submitMentorReviewDecision '+
			// trackingNumber+'&nbsp;'+partNumber+'&nbsp;'+mentor+'&nbsp;'+decision+'&nbsp;'+reason);//for
			// testing
			// method = admin.package.wrapperDetail.reviewDecision.action
			// window.open('/dqts/admin/package/workload.do?crumb=reset&method=Review+Decision&selectedTrackingNumber='
			// +trackingNumber+'&selectedPartNumber='+partNumber+'&checkingMentor='+mentor+'&mentorReviewDecision='+decision+'&reasonForRejection='+reason+'&source='+source+'&x='+Math.random(),
			// 'maincontent');

			if (source == 'workload') {
				showUpdating(trackingNumber, partNumber);
				var xmlhttp;
				var params = 'crumb=reset&method=Review Decision&selectedTrackingNumber='
						+ trackingNumber
						+ '&selectedPartNumber='
						+ partNumber
						+ '&checkingMentor='
						+ mentor
						+ '&mentorReviewDecision='
						+ decision
						+ '&reasonForRejection='
						+ reason
						+ '&source='
						+ source
						+ '&x=' + Math.random();

				if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome,
											// Opera, Safari
					xmlhttp = new XMLHttpRequest();
				} else {// code for IE6, IE5
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}

				xmlhttp.onreadystatechange = function() {

					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

						var output = xmlhttp.responseText;

						if (output.indexOf("<form") > 0) {
							var tmp = output.substring(output.indexOf("<form"),
									output.indexOf("</form>")); // div segment
							tmp = tmp.substring(tmp.indexOf(">") + 1);

							document.getElementById("Data").innerHTML = tmp;
							document.getElementById('UpdateMsg').style.display = 'none';

						}
						return false;

					}
				}
				xmlhttp.open("POST",
						'/dqts/admin/package/packageManagementAjaxCall.do',
						true);
				xmlhttp.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xmlhttp.send(params);
			} else {
				window
						.open(
								'/dqts/admin/package/workload.do?crumb=reset&method=Review+Decision&selectedTrackingNumber='
										+ trackingNumber
										+ '&selectedPartNumber='
										+ partNumber
										+ '&checkingMentor='
										+ mentor
										+ '&mentorReviewDecision='
										+ decision
										+ '&reasonForRejection='
										+ reason
										+ '&source='
										+ source
										+ '&x='
										+ Math.random(), 'maincontent');
			}
		} else {
			alert("Invalid input.");
		}
	}
}

function submitReleaseReviewDecision(trackingNumber, partNumber, releaser,
		decision, reason, source) {
	if (confirm("Submit selected review decision?")) {
		if (reason == '' && checkInputAlphaNumericDT(trackingNumber)
				&& checkInputAlphaNumericDT(partNumber)
				&& checkInputAlphaNumericDT(releaser)
				&& checkInputNumericDT(decision)) {
			// alert('submitMentorReviewDecision '+
			// trackingNumber+'&nbsp;'+partNumber+'&nbsp;'+releaser+'&nbsp;'+decision);//for
			// testing
			// method = admin.package.wrapperDetail.reviewDecision.action
			// window.open('/dqts/admin/package/workload.do?crumb=reset&method=Review+Decision&selectedTrackingNumber='
			// +trackingNumber+'&selectedPartNumber='+partNumber+'&releaseReviewer='+releaser+'&releaseReviewDecision='+decision+'&source='+source+'&x='+Math.random(),
			// 'maincontent');

			if (source == 'workload') {
				showUpdating(trackingNumber, partNumber);
				var xmlhttp;
				var params = 'crumb=reset&method=Review Decision&selectedTrackingNumber='
						+ trackingNumber
						+ '&selectedPartNumber='
						+ partNumber
						+ '&releaseReviewer='
						+ releaser
						+ '&releaseReviewDecision='
						+ decision
						+ '&source='
						+ source + '&x=' + Math.random();

				if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome,
											// Opera, Safari
					xmlhttp = new XMLHttpRequest();
				} else {// code for IE6, IE5
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}

				xmlhttp.onreadystatechange = function() {

					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

						var output = xmlhttp.responseText;

						if (output.indexOf("<form") > 0) {
							var tmp = output.substring(output.indexOf("<form"),
									output.indexOf("</form>")); // div segment
							tmp = tmp.substring(tmp.indexOf(">") + 1);

							document.getElementById("Data").innerHTML = tmp;
							document.getElementById('UpdateMsg').style.display = 'none';

						}
						return false;
					}
				}
				xmlhttp.open("POST",
						'/dqts/admin/package/packageManagementAjaxCall.do',
						true);
				xmlhttp.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xmlhttp.send(params);
			} else {
				window
						.open(
								'/dqts/admin/package/workload.do?crumb=reset&method=Review+Decision&selectedTrackingNumber='
										+ trackingNumber
										+ '&selectedPartNumber='
										+ partNumber
										+ '&releaseReviewer='
										+ releaser
										+ '&releaseReviewDecision='
										+ decision
										+ '&source='
										+ source
										+ '&x='
										+ Math.random(), 'maincontent');
			}

		} else if (checkInputAlphaNumericDT(trackingNumber)
				&& checkInputAlphaNumericDT(partNumber)
				&& checkInputAlphaNumericDT(releaser)
				&& checkInputNumericDT(decision) && checkInputNumericDT(reason)) {
			// alert('submitMentorReviewDecision '+
			// trackingNumber+'&nbsp;'+partNumber+'&nbsp;'+releaser+'&nbsp;'+decision+'&nbsp;'+reason);//for
			// testing
			// method = admin.package.wrapperDetail.reviewDecision.action
			// window.open('/dqts/admin/package/workload.do?crumb=reset&method=Review+Decision&selectedTrackingNumber='
			// +trackingNumber+'&selectedPartNumber='+partNumber+'&releaseReviewer='+releaser+'&releaseReviewDecision='+decision+'&reasonForRejection='+reason+'&source='+source+'&x='+Math.random(),
			// 'maincontent');

			if (source == 'workload') {
				showUpdating(trackingNumber, partNumber);
				var xmlhttp;
				var params = 'crumb=reset&method=Review Decision&selectedTrackingNumber='
						+ trackingNumber
						+ '&selectedPartNumber='
						+ partNumber
						+ '&releaseReviewer='
						+ releaser
						+ '&releaseReviewDecision='
						+ decision
						+ '&reasonForRejection='
						+ reason
						+ '&source='
						+ source
						+ '&x=' + Math.random();

				if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome,
											// Opera, Safari
					xmlhttp = new XMLHttpRequest();
				} else {// code for IE6, IE5
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}

				xmlhttp.onreadystatechange = function() {

					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

						var output = xmlhttp.responseText;

						if (output.indexOf("<form") > 0) {
							var tmp = output.substring(output.indexOf("<form"),
									output.indexOf("</form>")); // div segment
							tmp = tmp.substring(tmp.indexOf(">") + 1);

							document.getElementById("Data").innerHTML = tmp;
							document.getElementById('UpdateMsg').style.display = 'none';

						}
						return false;
					}
				}
				xmlhttp.open("POST",
						'/dqts/admin/package/packageManagementAjaxCall.do',
						true);
				xmlhttp.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xmlhttp.send(params);
			} else {
				window
						.open(
								'/dqts/admin/package/workload.do?crumb=reset&method=Review+Decision&selectedTrackingNumber='
										+ trackingNumber
										+ '&selectedPartNumber='
										+ partNumber
										+ '&releaseReviewer='
										+ releaser
										+ '&releaseReviewDecision='
										+ decision
										+ '&reasonForRejection='
										+ reason
										+ '&source='
										+ source
										+ '&x='
										+ Math.random(), 'maincontent');
			}
		} else {
			alert("Invalid input.");
		}
	}
}

function markComplete(trackingNumber, source) {
	if (confirm("Mark wrapper " + trackingNumber + " complete?")) {
		if (checkInputAlphaNumericDT(trackingNumber)) {
			// alert('submitMentorReviewDecision '+
			// trackingNumber+'&nbsp;'+partNumber+'&nbsp;'+releaser+'&nbsp;'+decision+'&nbsp;'+reason);//for
			// testing
			// method = admin.package.wrapperDetail.markComplete.action
			// window.open('/dqts/admin/package/workload.do?crumb=reset&method=Mark+Complete&selectedTrackingNumber='
			// +trackingNumber+'&source='+source+'&x='+Math.random(),
			// 'maincontent');

			if (source == 'workload') {
				var xmlhttp;
				var params = 'crumb=reset&method=Mark Complete&selectedTrackingNumber='
						+ trackingNumber
						+ '&source='
						+ source
						+ '&x='
						+ Math.random();

				// document.getElementById('UpdateMsg').style.display = 'block';
				showUpdatingByTrackingNumber(trackingNumber);

				if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome,
											// Opera, Safari
					xmlhttp = new XMLHttpRequest();
				} else {// code for IE6, IE5
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}

				xmlhttp.onreadystatechange = function() {

					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

						var output = xmlhttp.responseText;

						if (output.indexOf("<form") > 0) {
							var tmp = output.substring(output.indexOf("<form"),
									output.indexOf("</form>")); // div segment

							tmp = tmp.substring(tmp.indexOf(">") + 1);

							document.getElementById("Data").innerHTML = tmp;
							document.getElementById('UpdateMsg').style.display = 'none';

						}
						return false;
					}
				}
				xmlhttp.open("POST",
						'/dqts/admin/package/packageManagementAjaxCall.do',
						true);
				xmlhttp.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xmlhttp.send(params);
			} else {
				window
						.open(
								'/dqts/admin/package/workload.do?crumb=reset&method=Mark+Complete&selectedTrackingNumber='
										+ trackingNumber
										+ '&source='
										+ source
										+ '&x=' + Math.random(), 'maincontent');
			}
		} else {
			alert("Invalid input.");
		}
	}
}

function reinstate(trackingNumber, source) {
	if (confirm("Reinstate wrapper " + trackingNumber + "?")) {
		if (checkInputAlphaNumericDT(trackingNumber)) {
			// alert('reinstate '+ trackingNumber);//for testing
			// method = admin.package.withDrawHold.action
			// window.open('/dqts/admin/package/workload.do?crumb=reset&method=Withdraw+or+Place+On-Hold&selectedTrackingNumber='
			// +trackingNumber+'&source='+source+'&x='+Math.random(),
			// 'maincontent');

			if (source == 'workload') {
				var xmlhttp;
				var params = 'crumb=reset&method=Withdraw+or+Place+On-Hold&selectedTrackingNumber='
						+ trackingNumber
						+ '&source='
						+ source
						+ '&x='
						+ Math.random();

				// document.getElementById('UpdateMsg').style.display = 'block';
				showUpdatingByTrackingNumber(trackingNumber);

				if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome,
											// Opera, Safari
					xmlhttp = new XMLHttpRequest();
				} else {// code for IE6, IE5
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}

				xmlhttp.onreadystatechange = function() {

					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

						var output = xmlhttp.responseText;

						if (output.indexOf("<form") > 0) {
							var tmp = output.substring(output.indexOf("<form"),
									output.indexOf("</form>")); // div segment

							tmp = tmp.substring(tmp.indexOf(">") + 1);

							document.getElementById("Data").innerHTML = tmp;
							document.getElementById('UpdateMsg').style.display = 'none';

						}
						return false;
					}
				}
				xmlhttp.open("POST",
						'/dqts/admin/package/packageManagementAjaxCall.do',
						true);
				xmlhttp.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xmlhttp.send(params);
			} else {
				openModal();
				window
						.open(
								'/dqts/admin/package/workload.do?crumb=reset&method=Withdraw+or+Place+On-Hold&selectedTrackingNumber='
										+ trackingNumber
										+ '&source='
										+ source
										+ '&x=' + Math.random(), 'maincontent');
			}
		} else {
			alert("Invalid input.");
		}
	}
}

function withdraw(trackingNumber, source) {
	if (confirm("Withdraw wrapper " + trackingNumber + "?")) {
		if (checkInputAlphaNumericDT(trackingNumber)) {
			// alert('withdraw '+ trackingNumber);//for testing
			// method = admin.package.withDrawHold.action
			// window.open('/dqts/admin/package/workload.do?crumb=reset&method=Withdraw+or+Place+On-Hold&editFunction=06&selectedTrackingNumber='
			// +trackingNumber+'&source='+source+'&x='+Math.random(),
			// 'maincontent');

			if (source == 'workload') {
				var xmlhttp;
				var params = 'crumb=reset&method=Withdraw or Place On-Hold&editFunction=06&selectedTrackingNumber='
						+ trackingNumber
						+ '&source='
						+ source
						+ '&x='
						+ Math.random();

				// document.getElementById('UpdateMsg').style.display = 'block';
				showUpdatingByTrackingNumber(trackingNumber);

				if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome,
											// Opera, Safari
					xmlhttp = new XMLHttpRequest();
				} else {// code for IE6, IE5
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}

				xmlhttp.onreadystatechange = function() {

					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

						var output = xmlhttp.responseText;

						if (output.indexOf("<form") > 0) {
							var tmp = output.substring(output.indexOf("<form"),
									output.indexOf("</form>")); // div segment

							tmp = tmp.substring(tmp.indexOf(">") + 1);

							document.getElementById("Data").innerHTML = tmp;
							document.getElementById('UpdateMsg').style.display = 'none';

						}
						return false;
					}
				}
				xmlhttp.open("POST",
						'/dqts/admin/package/packageManagementAjaxCall.do',
						true);
				xmlhttp.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xmlhttp.send(params);
			} else {
				openModal();
				window
						.open(
								'/dqts/admin/package/workload.do?crumb=reset&method=Withdraw+or+Place+On-Hold&editFunction=06&selectedTrackingNumber='
										+ trackingNumber
										+ '&source='
										+ source
										+ '&x=' + Math.random(), 'maincontent');
			}

		} else {
			alert("Invalid input.");
		}
	}
}

function onhold(trackingNumber, source) {
	if (confirm("Place wrapper " + trackingNumber + " on-hold?")) {
		if (checkInputAlphaNumericDT(trackingNumber)) {
			// alert('onhold '+ trackingNumber);//for testing
			// method = admin.package.withDrawHold.action
			// window.open('/dqts/admin/package/workload.do?crumb=reset&method=Withdraw+or+Place+On-Hold&editFunction=08&selectedTrackingNumber='
			// +trackingNumber+'&source='+source+'&x='+Math.random(),
			// 'maincontent');

			if (source == 'workload') {
				var xmlhttp;
				var params = 'crumb=reset&method=Withdraw or Place On-Hold&editFunction=08&selectedTrackingNumber='
						+ trackingNumber
						+ '&source='
						+ source
						+ '&x='
						+ Math.random();

				// document.getElementById('UpdateMsg').style.display = 'block';
				showUpdatingByTrackingNumber(trackingNumber);

				if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome,
											// Opera, Safari
					xmlhttp = new XMLHttpRequest();
				} else {// code for IE6, IE5
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}

				xmlhttp.onreadystatechange = function() {

					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

						var output = xmlhttp.responseText;

						if (output.indexOf("<form") > 0) {
							var tmp = output.substring(output.indexOf("<form"),
									output.indexOf("</form>")); // div segment

							tmp = tmp.substring(tmp.indexOf(">") + 1);

							document.getElementById("Data").innerHTML = tmp;
							document.getElementById('UpdateMsg').style.display = 'none';

						}
						return false;
					}
				}
				xmlhttp.open("POST",
						'/dqts/admin/package/packageManagementAjaxCall.do',
						true);
				xmlhttp.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xmlhttp.send(params);
			} else {
				openModal();
				window
						.open(
								'/dqts/admin/package/workload.do?crumb=reset&method=Withdraw+or+Place+On-Hold&editFunction=08&selectedTrackingNumber='
										+ trackingNumber
										+ '&source='
										+ source
										+ '&x=' + Math.random(), 'maincontent');
			}
		} else {
			alert("Invalid input.");
		}
	}
}

function getCAPNSearchMode() {
	// alert('getCAPNSearchMode - no parameters');//for testing
	// method = admin.package.corpAudit.partSearch.init.action
	// location.href =
	// '/dqts/admin/package/corpAuditPartSearch.do?crumb=reset&method=Initialize+Audit+Parts+Retrieval&editFunction=PN';
	window
			.open(
					'/dqts/admin/package/corpAuditPartSearch.do?crumb=reset&method=Initialize+Audit+Parts+Retrieval&editFunction=PN'
							+ '&x=' + Math.random(), 'maincontent');
}

function getCADTSearchMode() {
	// alert('getCADTSearchMode - no parameters');//for testing
	// method = admin.package.corpAudit.partSearch.init.action
	// location.href =
	// '/dqts/admin/package/corpAuditPartSearch.do?crumb=reset&method=Initialize+Audit+Parts+Retrieval';
	window
			.open(
					'/dqts/admin/package/corpAuditPartSearch.do?crumb=reset&method=Initialize+Audit+Parts+Retrieval'
							+ '&x=' + Math.random(), 'maincontent');
}

function editWrapperDetail(trackingNumber, partNumber) {
	// alert('editWrapperDetail '+trackingNumber+'&nbsp;'+partNumber);//for
	// testing
	// method = admin.package.create.action
	// location.href =
	// '/dqts/admin/package/editWrapperDetail.do?crumb=reset&method=Create+Package&editFlag=true&editFunction=Update+Wrapper+Detail&selectedTrackingNumber='
	// +trackingNumber+'&selectedPartNumber='+partNumber;
	openModal();
	window
			.open(
					'/dqts/admin/package/editWrapperDetail.do?crumb=reset&method=Create+Package&editFlag=true&editFunction=Update+Wrapper+Detail&selectedTrackingNumber='
							+ trackingNumber
							+ '&selectedPartNumber='
							+ partNumber + '&x=' + Math.random(), 'maincontent');
}

function deleteWrapperDetail(trackingNumber, partNumber) {
	if (confirm("Delete wrapper detail " + trackingNumber + "-" + partNumber
			+ "?")) {
		if (checkInputAlphaNumericDT(trackingNumber)
				&& checkInputAlphaNumericDT(partNumber)) {
			// alert('deleteWrapperDetail
			// '+trackingNumber+'&nbsp;'+partNumber);//for testing
			// method = admin.package.edit.save.action
			// location.href =
			// '/dqts/admin/package/wrapperDetailList.do?crumb=reset&method=Save&editFlag=true&editFunction=Delete+Wrapper+Detail&selectedTrackingNumber='
			// +trackingNumber+'&selectedPartNumber='+partNumber;
			openModal();
			window
					.open(
							'/dqts/admin/package/wrapperDetailList.do?crumb=reset&method=Save&editFlag=true&editFunction=Delete+Wrapper+Detail&selectedTrackingNumber='
									+ trackingNumber
									+ '&selectedPartNumber='
									+ partNumber + '&x=' + Math.random(),
							'maincontent');
		} else {
			alert("Invalid input.");
		}
	}
}

function viewErrorChecklist(trackingNumber, partNumber, assignedChecker,
		engineeringChangeLevel, changeNoticeNumber, role) {
	// alert('viewErrorChecklist
	// '+trackingNumber+'&nbsp;'+partNumber+'&nbsp;'+assignedChecker+'&nbsp;'+engineeringChangeLevel+'&nbsp;'+role);
	// method = admin.package.errorChecklist.retrieve.action
	if (role == '09' && checkInputAlphaNumericDT(trackingNumber)
			&& checkInputAlphaNumericDT(partNumber)
			&& checkInputAlphaNumericSpecialCharDT(engineeringChangeLevel)
			&& checkInputNumericDT(role)) {
		// location.href =
		// '/dqts/admin/package/viewErrorChecklist.do?crumb=reset&method=Edit+Error+Checklist&editFlag=false&selectedTrackingNumber='
		// +trackingNumber+'&selectedPartNumber='+partNumber+'&selectedEngineeringChangeLevel='+engineeringChangeLevel+'&role='+role;
		openModal();
		window
				.open(
						'/dqts/admin/package/viewErrorChecklist.do?crumb=reset&method=Edit+Error+Checklist&editFlag=false&selectedTrackingNumber='
								+ trackingNumber
								+ '&selectedPartNumber='
								+ partNumber
								+ '&selectedEngineeringChangeLevel='
								+ engineeringChangeLevel
								+ '&role='
								+ role
								+ '&changeNoticeNumber='
								+ changeNoticeNumber
								+ '&x=' + Math.random(), 'maincontent');
	} else if (role == '07' && checkInputAlphaNumericDT(trackingNumber)
			&& checkInputAlphaNumericDT(partNumber)
			&& checkInputAlphaNumericSpecialCharDT(assignedChecker)
			&& checkInputAlphaNumericSpecialCharDT(engineeringChangeLevel)
			&& checkInputNumericDT(role)) {
		// location.href =
		// '/dqts/admin/package/viewErrorChecklist.do?crumb=reset&method=Edit+Error+Checklist&editFlag=false&selectedTrackingNumber='
		// +trackingNumber+'&selectedPartNumber='+partNumber+'&selectedEngineeringChangeLevel='+engineeringChangeLevel+'&role='+role;
		openModal();
		window
				.open(
						'/dqts/admin/package/viewMentorErrorChecklist.do?crumb=reset&method=Edit+Error+Checklist&editFlag=false&selectedTrackingNumber='
								+ trackingNumber
								+ '&selectedPartNumber='
								+ partNumber
								+ '&assignedChecker='
								+ assignedChecker
								+ '&selectedEngineeringChangeLevel='
								+ engineeringChangeLevel
								+ '&role='
								+ role
								+ '&changeNoticeNumber='
								+ changeNoticeNumber
								+ '&x=' + Math.random(), 'maincontent');
	} else if (checkInputAlphaNumericDT(trackingNumber)
			&& checkInputAlphaNumericDT(partNumber)
			&& checkInputAlphaNumericSpecialCharDT(assignedChecker)
			&& checkInputAlphaNumericSpecialCharDT(engineeringChangeLevel)
			&& checkInputNumericDT(role)) {
		// alert('viewErrorChecklist
		// '+trackingNumber+'&nbsp;'+partNumber+'&nbsp;'+assignedChecker+'&nbsp;'+engineeringChangeLevel+'&nbsp;'+role);//for
		// testing
		// location.href =
		// '/dqts/admin/package/viewErrorChecklist.do?crumb=reset&method=Edit+Error+Checklist&editFlag=false&selectedTrackingNumber='
		// +trackingNumber+'&selectedPartNumber='+partNumber+'&assignedChecker='+assignedChecker+'&selectedEngineeringChangeLevel='+engineeringChangeLevel+'&role='+role;
		openModal();
		window
				.open(
						'/dqts/admin/package/viewErrorChecklist.do?crumb=reset&method=Edit+Error+Checklist&editFlag=false&selectedTrackingNumber='
								+ trackingNumber
								+ '&selectedPartNumber='
								+ partNumber
								+ '&assignedChecker='
								+ assignedChecker
								+ '&selectedEngineeringChangeLevel='
								+ engineeringChangeLevel
								+ '&role='
								+ role
								+ '&changeNoticeNumber='
								+ changeNoticeNumber
								+ '&x=' + Math.random(), 'maincontent');
	} else {
		alert("Invalid input.");
	}
}





















































function checkDate(date) {

	alert("checkDate" + date);

	// var rlse = document.dqtsForm.elements['releaseDate'].value;
	// var want = document.dqtsForm.elements['wantDate'].value;

	var currentTime = new Date();
	var month = currentTime.getMonth() + 1;
	var day = currentTime.getDate();
	var year = currentTime.getFullYear();

	if (date != null && date != '') {

		var yyyy = eval(date.substring(6, 10)); // alert(yyyy);
		var mm = eval(date.substring(0, 2)); // alert(mm);
		var dd = eval(date.substring(3, 5)); // alert(dd);

		if (yyyy < year || (dd < day && mm == month)) {

			alert("Selected Date must be current or future date.");
			return false;
		}

	}

	return true;

}


function checkInputNumericDT(text) {

	var ip = text;

	// var legalChars = /[0-9]/;

	if (!testNumeric(ip)) {
		return false;
	}

	return true;
}

function checkInputNumeric(fieldName, text, len) {

	var ip = text;
	var text = " contains invalid characters.  May contain only 0-9";
	var text2 = " cannot be greater than the following number of characters: ";

	// var legalChars = /[0-9]/;

	if (!testNumeric(ip)) {
		document.getElementById(fieldName).style.color = "red";
		document.getElementById(fieldName).style.backgroundColor = "yellow";
		alert(fieldName + text);
		document.getElementById(fieldName).focus;
		return false;
	} else if (ip.length > len) {
		document.getElementById(fieldName).style.color = "red";
		document.getElementById(fieldName).style.backgroundColor = "yellow";
		alert(fieldName + text2 + len);
		document.getElementById(fieldName).focus;
		return false;
	} else {
		document.getElementById(fieldName).style.color = "black";
		document.getElementById(fieldName).style.backgroundColor = "white";
		return true;
	}
}

function checkInputAlphaNumericDT(text) {

	var ip = text;

	// var legalChars = /[a-zA-Z0-9]/;

	// alert("checkInputAlphaNumeric");
	if (!testAlphaNumeric(ip)) {

		// alert("checkInputAlphaNumeric false");
		return false;
	}
	// alert("checkInputAlphaNumeric true");
	return true;
}

function checkInputAlphaNumeric(fieldName, text, len) {

	var ip = text;
	var text = " contains invalid characters.  May contain only a-z,A-Z,0-9";
	var text2 = " cannot be greater than the following number of characters: ";

	// var legalChars = /[a-zA-Z0-9]/;

	if (!testAlphaNumeric(ip)) {
		document.getElementById(fieldName).style.color = "red";
		document.getElementById(fieldName).style.backgroundColor = "yellow";
		alert(fieldName + text);
		document.getElementById(fieldName).focus;
		return false;
	} else if (ip.length > len) {
		document.getElementById(fieldName).style.color = "red";
		document.getElementById(fieldName).style.backgroundColor = "yellow";
		alert(fieldName + text2 + len);
		document.getElementById(fieldName).focus;
		return false;
	} else {
		document.getElementById(fieldName).style.color = "black";
		document.getElementById(fieldName).style.backgroundColor = "white";
		return true;
	}
}

function checkInputAlphaNumericSpecialCharDT(text) {

	var ip = text;

	if (!testAlphaNumericSpecialChar(ip)) {
		return false;
	}

	return true;
}

function checkInputAlphaNumericSpecialChar(fieldName, text, len) {

	var ip = text;
	var text = " contains invalid characters.  May contain only a-z,A-Z,0-9";
	var text2 = " cannot be greater than the following number of characters: ";

	// alert(ip);

	// alert(""+testAlphaNumericSpecialChar(ip));
	// alert(""+len);

	if (!testAlphaNumericSpecialChar(ip)) {
		document.getElementById(fieldName).style.color = "red";
		document.getElementById(fieldName).style.backgroundColor = "yellow";
		alert(fieldName + text);
		document.getElementById(fieldName).focus;
		return false;
	} else if (ip.length > len) {
		document.getElementById(fieldName).style.color = "red";
		document.getElementById(fieldName).style.backgroundColor = "yellow";
		document.getElementById(fieldName).focus;
		alert(fieldName + text2 + len);
		return false;
	} else {
		document.getElementById(fieldName).style.color = "black";
		document.getElementById(fieldName).style.backgroundColor = "white";
		return true;
	}
}

function testAlphaNumericSpecialChar(string) {

	var iChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz&-().[]\/|\" ";
	var count = string.length;

	for (var i = 0; i < count; i++) {
		// alert(document.formname.Text1.value.charAt(i));

		if (iChars.indexOf(string.charAt(i)) == -1) {
			// alert("Containts invalid characters. \n These are not allowed.\n
			// Please remove them and try again.");

			return false;
		}
	}
	return true;
}

function testSpecialChar(string) {

	var iChars = "~`#%&\'<>|";
	var count = string.length;

	for (var i = 0; i < count; i++) {
		if (iChars.indexOf(string.charAt(i)) != -1) {
			return false;
		}
	}
	return true;
}

function testNumeric(string) {

	var iChars = "0123456789";
	var count = string.length;

	for (var i = 0; i < count; i++) {
		// alert(document.formname.Text1.value.charAt(i));

		if (iChars.indexOf(string.charAt(i)) == -1) {
			// alert("Containts special characters. \n These are not allowed.\n
			// Please remove them and try again.");
			return false;
		}
	}
	return true;
}
function testAlphaNumeric(string) {

	var iChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	var count = string.length;

	for (var i = 0; i < count; i++) {
		// alert(document.formname.Text1.value.charAt(i));

		if (iChars.indexOf(string.charAt(i)) == -1) {
			// alert("Containts invalid characters. \n These are not allowed.\n
			// Please remove them and try again.");
			return false;
		}
	}
	return true;
}

function checkErrorChecklistComment(commentName, metricName, editStatus) {

	if (document.dqtsForm.elements[commentName].value.length == 0) {
		alert('Corresponding comment is required');
		document.dqtsForm.elements[metricName].value = "0";
		return false;
	}
	return true;
}

function checkALLErrorChecklistFields() {

	// alert("checkALLErrorChecklistComments");

	// var text = " contains invalid characters. May contain only a-z,A-Z,0-9";

	if (validateErrorChecklist()) {
		if (document.dqtsForm.elements('fMM1ACMNT') != null
				&& document.dqtsForm.elements['fMM1ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['fMM1A[0]'] == null
						|| document.dqtsForm.elements['fMM1A[0]'].value.length == 0 || document.dqtsForm.elements['fMM1A[0]'].value == "0")
						&& (document.dqtsForm.elements['fMM1A[1]'] == null
								|| document.dqtsForm.elements['fMM1A[1]'].value.length == 0 || document.dqtsForm.elements['fMM1A[1]'].value == "0") && (document.dqtsForm.elements['fMM1A[2]'] == null
						|| document.dqtsForm.elements['fMM1A[2]'].value.length == 0 || document.dqtsForm.elements['fMM1A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['fMM1ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('fMM2ACMNT') != null
				&& document.dqtsForm.elements['fMM2ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['fMM2A[0]'] == null
						|| document.dqtsForm.elements['fMM2A[0]'].value.length == 0 || document.dqtsForm.elements['fMM2A[0]'].value == "0")
						&& (document.dqtsForm.elements['fMM2A[1]'] == null
								|| document.dqtsForm.elements['fMM2A[1]'].value.length == 0 || document.dqtsForm.elements['fMM2A[1]'].value == "0") && (document.dqtsForm.elements['fMM2A[2]'] == null
						|| document.dqtsForm.elements['fMM2A[2]'].value.length == 0 || document.dqtsForm.elements['fMM2A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['fMM2ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('fMM3ACMNT') != null
				&& document.dqtsForm.elements['fMM3ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['fMM3A[0]'] == null
						|| document.dqtsForm.elements['fMM3A[0]'].value.length == 0 || document.dqtsForm.elements['fMM3A[0]'].value == "0")
						&& (document.dqtsForm.elements['fMM3A[1]'] == null
								|| document.dqtsForm.elements['fMM3A[1]'].value.length == 0 || document.dqtsForm.elements['fMM3A[1]'].value == "0") && (document.dqtsForm.elements['fMM3A[2]'] == null
						|| document.dqtsForm.elements['fMM3A[2]'].value.length == 0 || document.dqtsForm.elements['fMM3A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['fMM3ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('fMM4ACMNT') != null
				&& document.dqtsForm.elements['fMM4ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['fMM4A[0]'] == null
						|| document.dqtsForm.elements['fMM4A[0]'].value.length == 0 || document.dqtsForm.elements['fMM4A[0]'].value == "0")
						&& (document.dqtsForm.elements['fMM4A[1]'] == null
								|| document.dqtsForm.elements['fMM4A[1]'].value.length == 0 || document.dqtsForm.elements['fMM4A[1]'].value == "0") && (document.dqtsForm.elements['fMM4A[2]'] == null
						|| document.dqtsForm.elements['fMM4A[2]'].value.length == 0 || document.dqtsForm.elements['fMM4A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['fMM4ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('fMM5ADESC') != null
				&& document.dqtsForm.elements['fMM5ADESC'].value.length == 0
				&& ((document.dqtsForm.elements['fMM5A[0]'].value.length != 0 && document.dqtsForm.elements['fMM5A[0]'].value != "0")
						|| (document.dqtsForm.elements['fMM5A[1]'].value.length != 0 && document.dqtsForm.elements['fMM5A[1]'].value != "0") || (document.dqtsForm.elements['fMM5A[2]'].value.length != 0 && document.dqtsForm.elements['fMM5A[2]'].value != "0"))) {
			alert('Corresponding comment is required');
			document.dqtsForm.elements['fMM5ADESC'].focus;
			return false;
		}/*
			 * else if(document.dqtsForm.elements('fMM5ADESC')!=null &&
			 * document.dqtsForm.elements['fMM5ADESC'].value.length>0 && (
			 * (document.dqtsForm.elements['fMM5A[0]']==null ||
			 * document.dqtsForm.elements['fMM5A[0]'].value.length==0 ||
			 * document.dqtsForm.elements['fMM5A[0]'].value=="0") &&
			 * (document.dqtsForm.elements['fMM5A[1]']==null ||
			 * document.dqtsForm.elements['fMM5A[1]'].value.length==0 ||
			 * document.dqtsForm.elements['fMM5A[1]'].value=="0") &&
			 * (document.dqtsForm.elements['fMM5A[2]']==null ||
			 * document.dqtsForm.elements['fMM5A[2]'].value.length==0 ||
			 * document.dqtsForm.elements['fMM5A[2]'].value=="0") ) ){
			 * alert('Corresponding error is required when comment is entered');
			 * //document.dqtsForm.elements['fMM5ADESC'].focus; return false; }
			 */

		else if (document.dqtsForm.elements('tB1ACMNT') != null
				&& document.dqtsForm.elements['tB1ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['tB1A[0]'] == null
						|| document.dqtsForm.elements['tB1A[0]'].value.length == 0 || document.dqtsForm.elements['tB1A[0]'].value == "0")
						&& (document.dqtsForm.elements['tB1A[1]'] == null
								|| document.dqtsForm.elements['tB1A[1]'].value.length == 0 || document.dqtsForm.elements['tB1A[1]'].value == "0") && (document.dqtsForm.elements['tB1A[2]'] == null
						|| document.dqtsForm.elements['tB1A[2]'].value.length == 0 || document.dqtsForm.elements['tB1A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['tB1ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('tB2ACMNT') != null
				&& document.dqtsForm.elements['tB2ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['tB2A[0]'] == null
						|| document.dqtsForm.elements['tB2A[0]'].value.length == 0 || document.dqtsForm.elements['tB2A[0]'].value == "0")
						&& (document.dqtsForm.elements['tB2A[1]'] == null
								|| document.dqtsForm.elements['tB2A[1]'].value.length == 0 || document.dqtsForm.elements['tB2A[1]'].value == "0") && (document.dqtsForm.elements['tB2A[2]'] == null
						|| document.dqtsForm.elements['tB2A[2]'].value.length == 0 || document.dqtsForm.elements['tB2A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['tB2ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('tB3ADESC') != null
				&& document.dqtsForm.elements['tB3ADESC'].value.length == 0
				&& ((document.dqtsForm.elements['tB3A[0]'].value.length != 0 && document.dqtsForm.elements['tB3A[0]'].value != "0")
						|| (document.dqtsForm.elements['tB3A[1]'].value.length != 0 && document.dqtsForm.elements['tB3A[1]'].value != "0") || (document.dqtsForm.elements['tB3A[2]'].value.length != 0 && document.dqtsForm.elements['tB3A[2]'].value != "0"))) {
			alert('Corresponding comment is required');
			document.dqtsForm.elements['tB3ADESC'].focus;
			return false;
		}/*
			 * else if(document.dqtsForm.elements('tB3ADESC')!=null &&
			 * document.dqtsForm.elements['tB3ADESC'].value.length>0 && (
			 * (document.dqtsForm.elements['tB3A[0]']==null ||
			 * document.dqtsForm.elements['tB3A[0]'].value.length==0 ||
			 * document.dqtsForm.elements['tB3A[0]'].value=="0") &&
			 * (document.dqtsForm.elements['tB3A[1]']==null ||
			 * document.dqtsForm.elements['tB3A[1]'].value.length==0 ||
			 * document.dqtsForm.elements['tB3A[1]'].value=="0") &&
			 * (document.dqtsForm.elements['tB3A[2]']==null ||
			 * document.dqtsForm.elements['tB3A[2]'].value.length==0 ||
			 * document.dqtsForm.elements['tB3A[2]'].value=="0") ) ){
			 * alert('Corresponding error is required when comment is entered');
			 * //document.dqtsForm.elements['tB3ADESC'].focus; return false; }
			 */

		else if (document.dqtsForm.elements('s1ACMNT') != null
				&& document.dqtsForm.elements['s1ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['s1A[0]'] == null
						|| document.dqtsForm.elements['s1A[0]'].value.length == 0 || document.dqtsForm.elements['s1A[0]'].value == "0")
						&& (document.dqtsForm.elements['s1A[1]'] == null
								|| document.dqtsForm.elements['s1A[1]'].value.length == 0 || document.dqtsForm.elements['s1A[1]'].value == "0") && (document.dqtsForm.elements['s1A[2]'] == null
						|| document.dqtsForm.elements['s1A[2]'].value.length == 0 || document.dqtsForm.elements['s1A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['s1ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('s2ACMNT') != null
				&& document.dqtsForm.elements['s2ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['s2A[0]'] == null
						|| document.dqtsForm.elements['s2A[0]'].value.length == 0 || document.dqtsForm.elements['s2A[0]'].value == "0")
						&& (document.dqtsForm.elements['s2A[1]'] == null
								|| document.dqtsForm.elements['s2A[1]'].value.length == 0 || document.dqtsForm.elements['s2A[1]'].value == "0") && (document.dqtsForm.elements['s2A[2]'] == null
						|| document.dqtsForm.elements['s2A[2]'].value.length == 0 || document.dqtsForm.elements['s2A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['s2ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('s3ACMNT') != null
				&& document.dqtsForm.elements['s3ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['s3A[0]'] == null
						|| document.dqtsForm.elements['s3A[0]'].value.length == 0 || document.dqtsForm.elements['s3A[0]'].value == "0")
						&& (document.dqtsForm.elements['s3A[1]'] == null
								|| document.dqtsForm.elements['s3A[1]'].value.length == 0 || document.dqtsForm.elements['s3A[1]'].value == "0") && (document.dqtsForm.elements['s3A[2]'] == null
						|| document.dqtsForm.elements['s3A[2]'].value.length == 0 || document.dqtsForm.elements['s3A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['s3ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('s4ACMNT') != null
				&& document.dqtsForm.elements['s4ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['s4A[0]'] == null
						|| document.dqtsForm.elements['s4A[0]'].value.length == 0 || document.dqtsForm.elements['s4A[0]'].value == "0")
						&& (document.dqtsForm.elements['s4A[1]'] == null
								|| document.dqtsForm.elements['s4A[1]'].value.length == 0 || document.dqtsForm.elements['s4A[1]'].value == "0") && (document.dqtsForm.elements['s4A[2]'] == null
						|| document.dqtsForm.elements['s4A[2]'].value.length == 0 || document.dqtsForm.elements['s4A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['s4ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('s5ACMNT') != null
				&& document.dqtsForm.elements['s5ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['s5A[0]'] == null
						|| document.dqtsForm.elements['s5A[0]'].value.length == 0 || document.dqtsForm.elements['s5A[0]'].value == "0")
						&& (document.dqtsForm.elements['s5A[1]'] == null
								|| document.dqtsForm.elements['s5A[1]'].value.length == 0 || document.dqtsForm.elements['s5A[1]'].value == "0") && (document.dqtsForm.elements['s5A[2]'] == null
						|| document.dqtsForm.elements['s5A[2]'].value.length == 0 || document.dqtsForm.elements['s5A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['s5ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('s6ACMNT') != null
				&& document.dqtsForm.elements['s6ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['s6A[0]'] == null
						|| document.dqtsForm.elements['s6A[0]'].value.length == 0 || document.dqtsForm.elements['s6A[0]'].value == "0")
						&& (document.dqtsForm.elements['s6A[1]'] == null
								|| document.dqtsForm.elements['s6A[1]'].value.length == 0 || document.dqtsForm.elements['s6A[1]'].value == "0") && (document.dqtsForm.elements['s6A[2]'] == null
						|| document.dqtsForm.elements['s6A[2]'].value.length == 0 || document.dqtsForm.elements['s6A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['s6ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('s7ACMNT') != null
				&& document.dqtsForm.elements['s7ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['s7A[0]'] == null
						|| document.dqtsForm.elements['s7A[0]'].value.length == 0 || document.dqtsForm.elements['s7A[0]'].value == "0")
						&& (document.dqtsForm.elements['s7A[1]'] == null
								|| document.dqtsForm.elements['s7A[1]'].value.length == 0 || document.dqtsForm.elements['s7A[1]'].value == "0") && (document.dqtsForm.elements['s7A[2]'] == null
						|| document.dqtsForm.elements['s7A[2]'].value.length == 0 || document.dqtsForm.elements['s7A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['s7ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('s8ACMNT') != null
				&& document.dqtsForm.elements['s8ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['s8A[0]'] == null
						|| document.dqtsForm.elements['s8A[0]'].value.length == 0 || document.dqtsForm.elements['s8A[0]'].value == "0")
						&& (document.dqtsForm.elements['s8A[1]'] == null
								|| document.dqtsForm.elements['s8A[1]'].value.length == 0 || document.dqtsForm.elements['s8A[1]'].value == "0") && (document.dqtsForm.elements['s8A[2]'] == null
						|| document.dqtsForm.elements['s8A[2]'].value.length == 0 || document.dqtsForm.elements['s8A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['s8ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('s9ACMNT') != null
				&& document.dqtsForm.elements['s9ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['s9A[0]'] == null
						|| document.dqtsForm.elements['s9A[0]'].value.length == 0 || document.dqtsForm.elements['s9A[0]'].value == "0")
						&& (document.dqtsForm.elements['s9A[1]'] == null
								|| document.dqtsForm.elements['s9A[1]'].value.length == 0 || document.dqtsForm.elements['s9A[1]'].value == "0") && (document.dqtsForm.elements['s9A[2]'] == null
						|| document.dqtsForm.elements['s9A[2]'].value.length == 0 || document.dqtsForm.elements['s9A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['s9ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('s10ACMNT') != null
				&& document.dqtsForm.elements['s10ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['s10A[0]'] == null
						|| document.dqtsForm.elements['s10A[0]'].value.length == 0 || document.dqtsForm.elements['s10A[0]'].value == "0")
						&& (document.dqtsForm.elements['s10A[1]'] == null
								|| document.dqtsForm.elements['s10A[1]'].value.length == 0 || document.dqtsForm.elements['s10A[1]'].value == "0") && (document.dqtsForm.elements['s10A[2]'] == null
						|| document.dqtsForm.elements['s10A[2]'].value.length == 0 || document.dqtsForm.elements['s10A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['s10ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('s11ACMNT') != null
				&& document.dqtsForm.elements['s11ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['s11A[0]'] == null
						|| document.dqtsForm.elements['s11A[0]'].value.length == 0 || document.dqtsForm.elements['s11A[0]'].value == "0")
						&& (document.dqtsForm.elements['s11A[1]'] == null
								|| document.dqtsForm.elements['s11A[1]'].value.length == 0 || document.dqtsForm.elements['s11A[1]'].value == "0") && (document.dqtsForm.elements['s11A[2]'] == null
						|| document.dqtsForm.elements['s11A[2]'].value.length == 0 || document.dqtsForm.elements['s11A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['s11ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('s12ACMNT') != null
				&& document.dqtsForm.elements['s12ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['s12A[0]'] == null
						|| document.dqtsForm.elements['s12A[0]'].value.length == 0 || document.dqtsForm.elements['s12A[0]'].value == "0")
						&& (document.dqtsForm.elements['s12A[1]'] == null
								|| document.dqtsForm.elements['s12A[1]'].value.length == 0 || document.dqtsForm.elements['s12A[1]'].value == "0") && (document.dqtsForm.elements['s12A[2]'] == null
						|| document.dqtsForm.elements['s12A[2]'].value.length == 0 || document.dqtsForm.elements['s12A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['s12ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('s13ADESC') != null
				&& document.dqtsForm.elements['s13ADESC'].value.length == 0
				&& ((document.dqtsForm.elements['s13A[0]'].value.length != 0 && document.dqtsForm.elements['s13A[0]'].value != "0")
						|| (document.dqtsForm.elements['s13A[1]'].value.length != 0 && document.dqtsForm.elements['s13A[1]'].value != "0") || (document.dqtsForm.elements['s13A[2]'].value.length != 0 && document.dqtsForm.elements['s13A[2]'].value != "0"))) {
			alert('Corresponding comment is required');
			document.dqtsForm.elements['s13ADESC'].focus;
			return false;
		}/*
			 * else if(document.dqtsForm.elements('s13ADESC')!=null &&
			 * document.dqtsForm.elements['s13ADESC'].value.length>0 && (
			 * (document.dqtsForm.elements['s13A[0]']==null ||
			 * document.dqtsForm.elements['s13A[0]'].value.length==0 ||
			 * document.dqtsForm.elements['s13A[0]'].value=="0") &&
			 * (document.dqtsForm.elements['s13A[1]']==null ||
			 * document.dqtsForm.elements['s13A[1]'].value.length==0 ||
			 * document.dqtsForm.elements['s13A[1]'].value=="0") &&
			 * (document.dqtsForm.elements['s13A[2]']==null ||
			 * document.dqtsForm.elements['s13A[2]'].value.length==0 ||
			 * document.dqtsForm.elements['s13A[2]'].value=="0") ) ){
			 * alert('Corresponding error is required when comment is entered');
			 * //document.dqtsForm.elements['s13ADESC'].focus; return false; }
			 */

		else if (document.dqtsForm.elements('pC1ACMNT') != null
				&& document.dqtsForm.elements['pC1ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['pC1A[0]'] == null
						|| document.dqtsForm.elements['pC1A[0]'].value.length == 0 || document.dqtsForm.elements['pC1A[0]'].value == "0")
						&& (document.dqtsForm.elements['pC1A[1]'] == null
								|| document.dqtsForm.elements['pC1A[1]'].value.length == 0 || document.dqtsForm.elements['pC1A[1]'].value == "0") && (document.dqtsForm.elements['pC1A[2]'] == null
						|| document.dqtsForm.elements['pC1A[2]'].value.length == 0 || document.dqtsForm.elements['pC1A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['pC1ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('pC2ACMNT') != null
				&& document.dqtsForm.elements['pC2ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['pC2A[0]'] == null
						|| document.dqtsForm.elements['pC2A[0]'].value.length == 0 || document.dqtsForm.elements['pC2A[0]'].value == "0")
						&& (document.dqtsForm.elements['pC2A[1]'] == null
								|| document.dqtsForm.elements['pC2A[1]'].value.length == 0 || document.dqtsForm.elements['pC2A[1]'].value == "0") && (document.dqtsForm.elements['pC2A[2]'] == null
						|| document.dqtsForm.elements['pC2A[2]'].value.length == 0 || document.dqtsForm.elements['pC2A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['pC2ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('pC3ACMNT') != null
				&& document.dqtsForm.elements['pC3ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['pC3A[0]'] == null
						|| document.dqtsForm.elements['pC3A[0]'].value.length == 0 || document.dqtsForm.elements['pC3A[0]'].value == "0")
						&& (document.dqtsForm.elements['pC3A[1]'] == null
								|| document.dqtsForm.elements['pC3A[1]'].value.length == 0 || document.dqtsForm.elements['pC3A[1]'].value == "0") && (document.dqtsForm.elements['pC3A[2]'] == null
						|| document.dqtsForm.elements['pC3A[2]'].value.length == 0 || document.dqtsForm.elements['pC3A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['pC3ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('pC4ACMNT') != null
				&& document.dqtsForm.elements['pC4ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['pC4A[0]'] == null
						|| document.dqtsForm.elements['pC4A[0]'].value.length == 0 || document.dqtsForm.elements['pC4A[0]'].value == "0")
						&& (document.dqtsForm.elements['pC4A[1]'] == null
								|| document.dqtsForm.elements['pC4A[1]'].value.length == 0 || document.dqtsForm.elements['pC4A[1]'].value == "0") && (document.dqtsForm.elements['pC4A[2]'] == null
						|| document.dqtsForm.elements['pC4A[2]'].value.length == 0 || document.dqtsForm.elements['pC4A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['pC4ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('pC5ACMNT') != null
				&& document.dqtsForm.elements['pC5ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['pC5A[0]'] == null
						|| document.dqtsForm.elements['pC5A[0]'].value.length == 0 || document.dqtsForm.elements['pC5A[0]'].value == "0")
						&& (document.dqtsForm.elements['pC5A[1]'] == null
								|| document.dqtsForm.elements['pC5A[1]'].value.length == 0 || document.dqtsForm.elements['pC5A[1]'].value == "0") && (document.dqtsForm.elements['pC5A[2]'] == null
						|| document.dqtsForm.elements['pC5A[2]'].value.length == 0 || document.dqtsForm.elements['pC5A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['pC5ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('pC6ACMNT') != null
				&& document.dqtsForm.elements['pC6ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['pC6A[0]'] == null
						|| document.dqtsForm.elements['pC6A[0]'].value.length == 0 || document.dqtsForm.elements['pC6A[0]'].value == "0")
						&& (document.dqtsForm.elements['pC6A[1]'] == null
								|| document.dqtsForm.elements['pC6A[1]'].value.length == 0 || document.dqtsForm.elements['pC6A[1]'].value == "0") && (document.dqtsForm.elements['pC6A[2]'] == null
						|| document.dqtsForm.elements['pC6A[2]'].value.length == 0 || document.dqtsForm.elements['pC6A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['pC6ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('pC7ADESC') != null
				&& document.dqtsForm.elements['pC7ADESC'].value.length == 0
				&& ((document.dqtsForm.elements['pC7A[0]'].value.length != 0 && document.dqtsForm.elements['pC7A[0]'].value != "0")
						|| (document.dqtsForm.elements['pC7A[1]'].value.length != 0 && document.dqtsForm.elements['pC7A[1]'].value != "0") || (document.dqtsForm.elements['pC7A[2]'].value.length != 0 && document.dqtsForm.elements['pC7A[2]'].value != "0"))) {
			alert('Corresponding comment is required');
			document.dqtsForm.elements['pC7ADESC'].focus;
			return false;
		}/*
			 * else if(document.dqtsForm.elements('pC7ADESC')!=null &&
			 * document.dqtsForm.elements['pC7ADESC'].value.length>0 && (
			 * (document.dqtsForm.elements['pC7A[0]']==null ||
			 * document.dqtsForm.elements['pC7A[0]'].value.length==0 ||
			 * document.dqtsForm.elements['pC7A[0]'].value=="0") &&
			 * (document.dqtsForm.elements['pC7A[1]']==null ||
			 * document.dqtsForm.elements['pC7A[1]'].value.length==0 ||
			 * document.dqtsForm.elements['pC7A[1]'].value=="0") &&
			 * (document.dqtsForm.elements['pC7A[2]']==null ||
			 * document.dqtsForm.elements['pC7A[2]'].value.length==0 ||
			 * document.dqtsForm.elements['pC7A[2]'].value=="0") ) ){
			 * alert('Corresponding error is required when comment is entered');
			 * //document.dqtsForm.elements['pC7ADESC'].focus; return false; }
			 */

		else if (document.dqtsForm.elements('dL1ACMNT') != null
				&& document.dqtsForm.elements['dL1ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['dL1A[0]'] == null
						|| document.dqtsForm.elements['dL1A[0]'].value.length == 0 || document.dqtsForm.elements['dL1A[0]'].value == "0")
						&& (document.dqtsForm.elements['dL1A[1]'] == null
								|| document.dqtsForm.elements['dL1A[1]'].value.length == 0 || document.dqtsForm.elements['dL1A[1]'].value == "0") && (document.dqtsForm.elements['dL1A[2]'] == null
						|| document.dqtsForm.elements['dL1A[2]'].value.length == 0 || document.dqtsForm.elements['dL1A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['dL1ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('dL2ACMNT') != null
				&& document.dqtsForm.elements['dL2ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['dL2A[0]'] == null
						|| document.dqtsForm.elements['dL2A[0]'].value.length == 0 || document.dqtsForm.elements['dL2A[0]'].value == "0")
						&& (document.dqtsForm.elements['dL2A[1]'] == null
								|| document.dqtsForm.elements['dL2A[1]'].value.length == 0 || document.dqtsForm.elements['dL2A[1]'].value == "0") && (document.dqtsForm.elements['dL2A[2]'] == null
						|| document.dqtsForm.elements['dL2A[2]'].value.length == 0 || document.dqtsForm.elements['dL2A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['dL2ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('dL3ACMNT') != null
				&& document.dqtsForm.elements['dL3ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['dL3A[0]'] == null
						|| document.dqtsForm.elements['dL3A[0]'].value.length == 0 || document.dqtsForm.elements['dL3A[0]'].value == "0")
						&& (document.dqtsForm.elements['dL3A[1]'] == null
								|| document.dqtsForm.elements['dL3A[1]'].value.length == 0 || document.dqtsForm.elements['dL3A[1]'].value == "0") && (document.dqtsForm.elements['dL3A[2]'] == null
						|| document.dqtsForm.elements['dL3A[2]'].value.length == 0 || document.dqtsForm.elements['dL3A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['dL3ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('dL4ACMNT') != null
				&& document.dqtsForm.elements['dL4ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['dL4A[0]'] == null
						|| document.dqtsForm.elements['dL4A[0]'].value.length == 0 || document.dqtsForm.elements['dL4A[0]'].value == "0")
						&& (document.dqtsForm.elements['dL4A[1]'] == null
								|| document.dqtsForm.elements['dL4A[1]'].value.length == 0 || document.dqtsForm.elements['dL4A[1]'].value == "0") && (document.dqtsForm.elements['dL4A[2]'] == null
						|| document.dqtsForm.elements['dL4A[2]'].value.length == 0 || document.dqtsForm.elements['dL4A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['dL4ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('dL5ADESC') != null
				&& document.dqtsForm.elements['dL5ADESC'].value.length == 0
				&& ((document.dqtsForm.elements['dL5A[0]'].value.length != 0 && document.dqtsForm.elements['dL5A[0]'].value != "0")
						|| (document.dqtsForm.elements['dL5A[1]'].value.length != 0 && document.dqtsForm.elements['dL5A[1]'].value != "0") || (document.dqtsForm.elements['dL5A[2]'].value.length != 0 && document.dqtsForm.elements['dL5A[2]'].value != "0"))) {
			alert('Corresponding comment is required');
			document.dqtsForm.elements['dL5ADESC'].focus;
			return false;
		}/*
			 * else if(document.dqtsForm.elements('dL5ADESC')!=null &&
			 * document.dqtsForm.elements['dL5ADESC'].value.length>0 && (
			 * (document.dqtsForm.elements['dL5A[0]']==null ||
			 * document.dqtsForm.elements['dL5A[0]'].value.length==0 ||
			 * document.dqtsForm.elements['dL5A[0]'].value=="0") &&
			 * (document.dqtsForm.elements['dL5A[1]']==null ||
			 * document.dqtsForm.elements['dL5A[1]'].value.length==0 ||
			 * document.dqtsForm.elements['dL5A[1]'].value=="0") &&
			 * (document.dqtsForm.elements['dL5A[2]']==null ||
			 * document.dqtsForm.elements['dL5A[2]'].value.length==0 ||
			 * document.dqtsForm.elements['dL5A[2]'].value=="0") ) ){
			 * alert('Corresponding error is required when comment is entered');
			 * //document.dqtsForm.elements['dL5ADESC'].focus; return false; }
			 */

		else if (document.dqtsForm.elements('dD1ACMNT') != null
				&& document.dqtsForm.elements['dD1ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['dD1A[0]'] == null
						|| document.dqtsForm.elements['dD1A[0]'].value.length == 0 || document.dqtsForm.elements['dD1A[0]'].value == "0")
						&& (document.dqtsForm.elements['dD1A[1]'] == null
								|| document.dqtsForm.elements['dD1A[1]'].value.length == 0 || document.dqtsForm.elements['dD1A[1]'].value == "0") && (document.dqtsForm.elements['dD1A[2]'] == null
						|| document.dqtsForm.elements['dD1A[2]'].value.length == 0 || document.dqtsForm.elements['dD1A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['dD1ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('dD2ACMNT') != null
				&& document.dqtsForm.elements['dD2ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['dD2A[0]'] == null
						|| document.dqtsForm.elements['dD2A[0]'].value.length == 0 || document.dqtsForm.elements['dD2A[0]'].value == "0")
						&& (document.dqtsForm.elements['dD2A[1]'] == null
								|| document.dqtsForm.elements['dD2A[1]'].value.length == 0 || document.dqtsForm.elements['dD2A[1]'].value == "0") && (document.dqtsForm.elements['dD2A[2]'] == null
						|| document.dqtsForm.elements['dD2A[2]'].value.length == 0 || document.dqtsForm.elements['dD2A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['dD2ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('dD3ACMNT') != null
				&& document.dqtsForm.elements['dD3ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['dD3A[0]'] == null
						|| document.dqtsForm.elements['dD3A[0]'].value.length == 0 || document.dqtsForm.elements['dD3A[0]'].value == "0")
						&& (document.dqtsForm.elements['dD3A[1]'] == null
								|| document.dqtsForm.elements['dD3A[1]'].value.length == 0 || document.dqtsForm.elements['dD3A[1]'].value == "0") && (document.dqtsForm.elements['dD3A[2]'] == null
						|| document.dqtsForm.elements['dD3A[2]'].value.length == 0 || document.dqtsForm.elements['dD3A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['dD3ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('dD4ACMNT') != null
				&& document.dqtsForm.elements['dD4ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['dD4A[0]'] == null
						|| document.dqtsForm.elements['dD4A[0]'].value.length == 0 || document.dqtsForm.elements['dD4A[0]'].value == "0")
						&& (document.dqtsForm.elements['dD4A[1]'] == null
								|| document.dqtsForm.elements['dD4A[1]'].value.length == 0 || document.dqtsForm.elements['dD4A[1]'].value == "0") && (document.dqtsForm.elements['dD4A[2]'] == null
						|| document.dqtsForm.elements['dD4A[2]'].value.length == 0 || document.dqtsForm.elements['dD4A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['dD4ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('dD5ACMNT') != null
				&& document.dqtsForm.elements['dD5ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['dD5A[0]'] == null
						|| document.dqtsForm.elements['dD5A[0]'].value.length == 0 || document.dqtsForm.elements['dD5A[0]'].value == "0")
						&& (document.dqtsForm.elements['dD5A[1]'] == null
								|| document.dqtsForm.elements['dD5A[1]'].value.length == 0 || document.dqtsForm.elements['dD5A[1]'].value == "0") && (document.dqtsForm.elements['dD5A[2]'] == null
						|| document.dqtsForm.elements['dD5A[2]'].value.length == 0 || document.dqtsForm.elements['dD5A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['dD5ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('dD6ACMNT') != null
				&& document.dqtsForm.elements['dD6ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['dD6A[0]'] == null
						|| document.dqtsForm.elements['dD6A[0]'].value.length == 0 || document.dqtsForm.elements['dD6A[0]'].value == "0")
						&& (document.dqtsForm.elements['dD6A[1]'] == null
								|| document.dqtsForm.elements['dD6A[1]'].value.length == 0 || document.dqtsForm.elements['dD6A[1]'].value == "0") && (document.dqtsForm.elements['dD6A[2]'] == null
						|| document.dqtsForm.elements['dD6A[2]'].value.length == 0 || document.dqtsForm.elements['dD6A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['dD6ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('dD7ACMNT') != null
				&& document.dqtsForm.elements['dD7ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['dD7A[0]'] == null
						|| document.dqtsForm.elements['dD7A[0]'].value.length == 0 || document.dqtsForm.elements['dD7A[0]'].value == "0")
						&& (document.dqtsForm.elements['dD7A[1]'] == null
								|| document.dqtsForm.elements['dD7A[1]'].value.length == 0 || document.dqtsForm.elements['dD7A[1]'].value == "0") && (document.dqtsForm.elements['dD7A[2]'] == null
						|| document.dqtsForm.elements['dD7A[2]'].value.length == 0 || document.dqtsForm.elements['dD7A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['dD7ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('dD8ADESC') != null
				&& document.dqtsForm.elements['dD8ADESC'].value.length == 0
				&& ((document.dqtsForm.elements['dD8A[0]'].value.length != 0 && document.dqtsForm.elements['dD8A[0]'].value != "0")
						|| (document.dqtsForm.elements['dD8A[1]'].value.length != 0 && document.dqtsForm.elements['dD8A[1]'].value != "0") || (document.dqtsForm.elements['dD8A[2]'].value.length != 0 && document.dqtsForm.elements['dD8A[2]'].value != "0"))) {
			alert('Corresponding comment is required');
			document.dqtsForm.elements['dD8ADESC'].focus;
			return false;
		}/*
			 * else if(document.dqtsForm.elements('dD8ADESC')!=null &&
			 * document.dqtsForm.elements['dD8ADESC'].value.length>0 && (
			 * (document.dqtsForm.elements['dD8A[0]']==null ||
			 * document.dqtsForm.elements['dD8A[0]'].value.length==0 ||
			 * document.dqtsForm.elements['dD8A[0]'].value=="0") &&
			 * (document.dqtsForm.elements['dD8A[1]']==null ||
			 * document.dqtsForm.elements['dD8A[1]'].value.length==0 ||
			 * document.dqtsForm.elements['dD8A[1]'].value=="0") &&
			 * (document.dqtsForm.elements['dD8A[2]']==null ||
			 * document.dqtsForm.elements['dD8A[2]'].value.length==0 ||
			 * document.dqtsForm.elements['dD8A[2]'].value=="0") ) ){
			 * alert('Corresponding error is required when comment is entered');
			 * //document.dqtsForm.elements['dD8ADESC'].focus; return false; }
			 */

		else if (document.dqtsForm.elements('eDSN1ACMNT') != null
				&& document.dqtsForm.elements['eDSN1ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['eDSN1A[0]'] == null
						|| document.dqtsForm.elements['eDSN1A[0]'].value.length == 0 || document.dqtsForm.elements['eDSN1A[0]'].value == "0")
						&& (document.dqtsForm.elements['eDSN1A[1]'] == null
								|| document.dqtsForm.elements['eDSN1A[1]'].value.length == 0 || document.dqtsForm.elements['eDSN1A[1]'].value == "0") && (document.dqtsForm.elements['eDSN1A[2]'] == null
						|| document.dqtsForm.elements['eDSN1A[2]'].value.length == 0 || document.dqtsForm.elements['eDSN1A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['eDSN1ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('eDSN2ACMNT') != null
				&& document.dqtsForm.elements['eDSN2ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['eDSN2A[0]'] == null
						|| document.dqtsForm.elements['eDSN2A[0]'].value.length == 0 || document.dqtsForm.elements['eDSN2A[0]'].value == "0")
						&& (document.dqtsForm.elements['eDSN2A[1]'] == null
								|| document.dqtsForm.elements['eDSN2A[1]'].value.length == 0 || document.dqtsForm.elements['eDSN2A[1]'].value == "0") && (document.dqtsForm.elements['eDSN2A[2]'] == null
						|| document.dqtsForm.elements['eDSN2A[2]'].value.length == 0 || document.dqtsForm.elements['eDSN2A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['eDSN2ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('eDSN3ACMNT') != null
				&& document.dqtsForm.elements['eDSN3ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['eDSN3A[0]'] == null
						|| document.dqtsForm.elements['eDSN3A[0]'].value.length == 0 || document.dqtsForm.elements['eDSN3A[0]'].value == "0")
						&& (document.dqtsForm.elements['eDSN3A[1]'] == null
								|| document.dqtsForm.elements['eDSN3A[1]'].value.length == 0 || document.dqtsForm.elements['eDSN3A[1]'].value == "0") && (document.dqtsForm.elements['eDSN3A[2]'] == null
						|| document.dqtsForm.elements['eDSN3A[2]'].value.length == 0 || document.dqtsForm.elements['eDSN3A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['eDSN3ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('eDSN4ACMNT') != null
				&& document.dqtsForm.elements['eDSN4ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['eDSN4A[0]'] == null
						|| document.dqtsForm.elements['eDSN4A[0]'].value.length == 0 || document.dqtsForm.elements['eDSN4A[0]'].value == "0")
						&& (document.dqtsForm.elements['eDSN4A[1]'] == null
								|| document.dqtsForm.elements['eDSN4A[1]'].value.length == 0 || document.dqtsForm.elements['eDSN4A[1]'].value == "0") && (document.dqtsForm.elements['eDSN4A[2]'] == null
						|| document.dqtsForm.elements['eDSN4A[2]'].value.length == 0 || document.dqtsForm.elements['eDSN4A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['eDSN4ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('eDSN5ACMNT') != null
				&& document.dqtsForm.elements['eDSN5ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['eDSN5A[0]'] == null
						|| document.dqtsForm.elements['eDSN5A[0]'].value.length == 0 || document.dqtsForm.elements['eDSN5A[0]'].value == "0")
						&& (document.dqtsForm.elements['eDSN5A[1]'] == null
								|| document.dqtsForm.elements['eDSN5A[1]'].value.length == 0 || document.dqtsForm.elements['eDSN5A[1]'].value == "0") && (document.dqtsForm.elements['eDSN5A[2]'] == null
						|| document.dqtsForm.elements['eDSN5A[2]'].value.length == 0 || document.dqtsForm.elements['eDSN5A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['eDSN5ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('eDSN6ACMNT') != null
				&& document.dqtsForm.elements['eDSN6ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['eDSN6A[0]'] == null
						|| document.dqtsForm.elements['eDSN6A[0]'].value.length == 0 || document.dqtsForm.elements['eDSN6A[0]'].value == "0")
						&& (document.dqtsForm.elements['eDSN6A[1]'] == null
								|| document.dqtsForm.elements['eDSN6A[1]'].value.length == 0 || document.dqtsForm.elements['eDSN6A[1]'].value == "0") && (document.dqtsForm.elements['eDSN6A[2]'] == null
						|| document.dqtsForm.elements['eDSN6A[2]'].value.length == 0 || document.dqtsForm.elements['eDSN6A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['eDSN6ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('eDSN7ACMNT') != null
				&& document.dqtsForm.elements['eDSN7ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['eDSN7A[0]'] == null
						|| document.dqtsForm.elements['eDSN7A[0]'].value.length == 0 || document.dqtsForm.elements['eDSN7A[0]'].value == "0")
						&& (document.dqtsForm.elements['eDSN7A[1]'] == null
								|| document.dqtsForm.elements['eDSN7A[1]'].value.length == 0 || document.dqtsForm.elements['eDSN7A[1]'].value == "0") && (document.dqtsForm.elements['eDSN7A[2]'] == null
						|| document.dqtsForm.elements['eDSN7A[2]'].value.length == 0 || document.dqtsForm.elements['eDSN7A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['eDSN7ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('eDSN8ACMNT') != null
				&& document.dqtsForm.elements['eDSN8ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['eDSN8A[0]'] == null
						|| document.dqtsForm.elements['eDSN8A[0]'].value.length == 0 || document.dqtsForm.elements['eDSN8A[0]'].value == "0")
						&& (document.dqtsForm.elements['eDSN8A[1]'] == null
								|| document.dqtsForm.elements['eDSN8A[1]'].value.length == 0 || document.dqtsForm.elements['eDSN8A[1]'].value == "0") && (document.dqtsForm.elements['eDSN8A[2]'] == null
						|| document.dqtsForm.elements['eDSN8A[2]'].value.length == 0 || document.dqtsForm.elements['eDSN8A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['eDSN8ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('eDSN9ACMNT') != null
				&& document.dqtsForm.elements['eDSN9ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['eDSN9A[0]'] == null
						|| document.dqtsForm.elements['eDSN9A[0]'].value.length == 0 || document.dqtsForm.elements['eDSN9A[0]'].value == "0")
						&& (document.dqtsForm.elements['eDSN9A[1]'] == null
								|| document.dqtsForm.elements['eDSN9A[1]'].value.length == 0 || document.dqtsForm.elements['eDSN9A[1]'].value == "0") && (document.dqtsForm.elements['eDSN9A[2]'] == null
						|| document.dqtsForm.elements['eDSN9A[2]'].value.length == 0 || document.dqtsForm.elements['eDSN9A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['eDSN9ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('eDSN10ACMNT') != null
				&& document.dqtsForm.elements['eDSN10ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['eDSN10A[0]'] == null
						|| document.dqtsForm.elements['eDSN10A[0]'].value.length == 0 || document.dqtsForm.elements['eDSN10A[0]'].value == "0")
						&& (document.dqtsForm.elements['eDSN10A[1]'] == null
								|| document.dqtsForm.elements['eDSN10A[1]'].value.length == 0 || document.dqtsForm.elements['eDSN10A[1]'].value == "0") && (document.dqtsForm.elements['eDSN10A[2]'] == null
						|| document.dqtsForm.elements['eDSN10A[2]'].value.length == 0 || document.dqtsForm.elements['eDSN10A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['eDSN10ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('eDSN11ACMNT') != null
				&& document.dqtsForm.elements['eDSN11ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['eDSN11A[0]'] == null
						|| document.dqtsForm.elements['eDSN11A[0]'].value.length == 0 || document.dqtsForm.elements['eDSN11A[0]'].value == "0")
						&& (document.dqtsForm.elements['eDSN11A[1]'] == null
								|| document.dqtsForm.elements['eDSN11A[1]'].value.length == 0 || document.dqtsForm.elements['eDSN11A[1]'].value == "0") && (document.dqtsForm.elements['eDSN11A[2]'] == null
						|| document.dqtsForm.elements['eDSN11A[2]'].value.length == 0 || document.dqtsForm.elements['eDSN11A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['eDSN11ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('eDSN12ACMNT') != null
				&& document.dqtsForm.elements['eDSN12ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['eDSN12A[0]'] == null
						|| document.dqtsForm.elements['eDSN12A[0]'].value.length == 0 || document.dqtsForm.elements['eDSN12A[0]'].value == "0")
						&& (document.dqtsForm.elements['eDSN12A[1]'] == null
								|| document.dqtsForm.elements['eDSN12A[1]'].value.length == 0 || document.dqtsForm.elements['eDSN12A[1]'].value == "0") && (document.dqtsForm.elements['eDSN12A[2]'] == null
						|| document.dqtsForm.elements['eDSN12A[2]'].value.length == 0 || document.dqtsForm.elements['eDSN12A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['eDSN12ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('eDSN13ACMNT') != null
				&& document.dqtsForm.elements['eDSN13ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['eDSN13A[0]'] == null
						|| document.dqtsForm.elements['eDSN13A[0]'].value.length == 0 || document.dqtsForm.elements['eDSN13A[0]'].value == "0")
						&& (document.dqtsForm.elements['eDSN13A[1]'] == null
								|| document.dqtsForm.elements['eDSN13A[1]'].value.length == 0 || document.dqtsForm.elements['eDSN13A[1]'].value == "0") && (document.dqtsForm.elements['eDSN13A[2]'] == null
						|| document.dqtsForm.elements['eDSN13A[2]'].value.length == 0 || document.dqtsForm.elements['eDSN13A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['eDSN13ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('eDSN14ACMNT') != null
				&& document.dqtsForm.elements['eDSN14ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['eDSN14A[0]'] == null
						|| document.dqtsForm.elements['eDSN14A[0]'].value.length == 0 || document.dqtsForm.elements['eDSN14A[0]'].value == "0")
						&& (document.dqtsForm.elements['eDSN14A[1]'] == null
								|| document.dqtsForm.elements['eDSN14A[1]'].value.length == 0 || document.dqtsForm.elements['eDSN14A[1]'].value == "0") && (document.dqtsForm.elements['eDSN14A[2]'] == null
						|| document.dqtsForm.elements['eDSN14A[2]'].value.length == 0 || document.dqtsForm.elements['eDSN14A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['eDSN14ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('eDSN15ACMNT') != null
				&& document.dqtsForm.elements['eDSN15ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['eDSN15A[0]'] == null
						|| document.dqtsForm.elements['eDSN15A[0]'].value.length == 0 || document.dqtsForm.elements['eDSN15A[0]'].value == "0")
						&& (document.dqtsForm.elements['eDSN15A[1]'] == null
								|| document.dqtsForm.elements['eDSN15A[1]'].value.length == 0 || document.dqtsForm.elements['eDSN15A[1]'].value == "0") && (document.dqtsForm.elements['eDSN15A[2]'] == null
						|| document.dqtsForm.elements['eDSN15A[2]'].value.length == 0 || document.dqtsForm.elements['eDSN15A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['eDSN15ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('eDSN16ACMNT') != null
				&& document.dqtsForm.elements['eDSN16ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['eDSN16A[0]'] == null
						|| document.dqtsForm.elements['eDSN16A[0]'].value.length == 0 || document.dqtsForm.elements['eDSN16A[0]'].value == "0")
						&& (document.dqtsForm.elements['eDSN16A[1]'] == null
								|| document.dqtsForm.elements['eDSN16A[1]'].value.length == 0 || document.dqtsForm.elements['eDSN16A[1]'].value == "0") && (document.dqtsForm.elements['eDSN16A[2]'] == null
						|| document.dqtsForm.elements['eDSN16A[2]'].value.length == 0 || document.dqtsForm.elements['eDSN16A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['eDSN16ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('eDSN17ACMNT') != null
				&& document.dqtsForm.elements['eDSN17ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['eDSN17A[0]'] == null
						|| document.dqtsForm.elements['eDSN17A[0]'].value.length == 0 || document.dqtsForm.elements['eDSN17A[0]'].value == "0")
						&& (document.dqtsForm.elements['eDSN17A[1]'] == null
								|| document.dqtsForm.elements['eDSN17A[1]'].value.length == 0 || document.dqtsForm.elements['eDSN17A[1]'].value == "0") && (document.dqtsForm.elements['eDSN17A[2]'] == null
						|| document.dqtsForm.elements['eDSN17A[2]'].value.length == 0 || document.dqtsForm.elements['eDSN17A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['eDSN17ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('eDSN18ACMNT') != null
				&& document.dqtsForm.elements['eDSN18ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['eDSN18A[0]'] == null
						|| document.dqtsForm.elements['eDSN18A[0]'].value.length == 0 || document.dqtsForm.elements['eDSN18A[0]'].value == "0")
						&& (document.dqtsForm.elements['eDSN18A[1]'] == null
								|| document.dqtsForm.elements['eDSN18A[1]'].value.length == 0 || document.dqtsForm.elements['eDSN18A[1]'].value == "0") && (document.dqtsForm.elements['eDSN18A[2]'] == null
						|| document.dqtsForm.elements['eDSN18A[2]'].value.length == 0 || document.dqtsForm.elements['eDSN18A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['eDSN18ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('eDSN19ACMNT') != null
				&& document.dqtsForm.elements['eDSN19ACMNT'].value.length > 0
				&& ((document.dqtsForm.elements['eDSN19A[0]'] == null
						|| document.dqtsForm.elements['eDSN19A[0]'].value.length == 0 || document.dqtsForm.elements['eDSN19A[0]'].value == "0")
						&& (document.dqtsForm.elements['eDSN19A[1]'] == null
								|| document.dqtsForm.elements['eDSN19A[1]'].value.length == 0 || document.dqtsForm.elements['eDSN19A[1]'].value == "0") && (document.dqtsForm.elements['eDSN19A[2]'] == null
						|| document.dqtsForm.elements['eDSN19A[2]'].value.length == 0 || document.dqtsForm.elements['eDSN19A[2]'].value == "0"))) {
			alert('Corresponding error is required when comment is entered');
			document.dqtsForm.elements['eDSN19ACMNT'].focus;
			return false;
		}

		else if (document.dqtsForm.elements('eDSN20ADESC') != null
				&& document.dqtsForm.elements['eDSN20ADESC'].value.length == 0
				&& ((document.dqtsForm.elements['eDSN20A[0]'].value.length != 0 && document.dqtsForm.elements['eDSN20A[0]'].value != "0")
						|| (document.dqtsForm.elements['eDSN20A[1]'].value.length != 0 && document.dqtsForm.elements['eDSN20A[1]'].value != "0") || (document.dqtsForm.elements['eDSN20A[2]'].value.length != 0 && document.dqtsForm.elements['eDSN20A[2]'].value != "0"))) {
			alert('Corresponding comment is required');
			document.dqtsForm.elements['eDSN20ADESC'].focus;
			return false;
		}/*
			 * else if(document.dqtsForm.elements('eDSN20ADESC')!=null &&
			 * document.dqtsForm.elements['eDSN20ADESC'].value.length>0 && (
			 * (document.dqtsForm.elements['eDSN20A[0]']==null ||
			 * document.dqtsForm.elements['eDSN20A[0]'].value.length==0 ||
			 * document.dqtsForm.elements['eDSN20A[0]'].value=="0") &&
			 * (document.dqtsForm.elements['eDSN20A[1]']==null ||
			 * document.dqtsForm.elements['eDSN20A[1]'].value.length==0 ||
			 * document.dqtsForm.elements['eDSN20A[1]'].value=="0") &&
			 * (document.dqtsForm.elements['eDSN20A[2]']==null ||
			 * document.dqtsForm.elements['eDSN20A[2]'].value.length==0 ||
			 * document.dqtsForm.elements['eDSN20A[2]'].value=="0") ) ){
			 * alert('Corresponding error is required when comment is entered');
			 * //document.dqtsForm.elements['eDSN20ADESC'].focus; return false; }
			 */
		else {
			return true;
		}
	} else {
		return false;
	}
}

/*
 * a href="javascript:openTUFCalendarV14( document.options.locale[
 * document.options.locale.selectedIndex ].value, document.output.date,
 * document.output.date, document.options.jspName.value,
 * document.options.height.value, document.options.width.value, (
 * document.options.resize[ 0 ].checked ) ? 'YES' : 'NO',
 * document.options.format.value, document.options.windowTitle.value,
 * document.options.maxYear.value, document.options.minYear.value,
 * document.options.maxMonth.value, document.options.minMonth.value,
 * document.options.validator.value, document.options.initialDay.value,
 * document.options.initialMonth.value, document.options.initialYear.value )" />
 */

function getDQTSBegDate() {

	openTUFCalendarV14('en_US', document.dqtsForm.elements('begDate'),
			document.dqtsForm.elements('begDate'), '', '320', '300', 'No',
			'MM/dd/yyyy', 'Beginning Date', '2020', '2000', '', '',
			'cat.cis.tuf.server.calendar.NullCalendarValidator', '', '', '');

	return false;
}

function getDQTSEndDate() {

	openTUFCalendarV14('en_US', document.dqtsForm.elements('endDate'),
			document.dqtsForm.elements('endDate'), '', '320', '300', 'No',
			'MM/dd/yyyy', 'End Date', '2020', '2000', '', '',
			'cat.cis.tuf.server.calendar.NullCalendarValidator', '', '', '');

	return false;
}

function getDQTSReleaseDate() {

	openTUFCalendarV14('en_US', document.dqtsForm.elements('releaseDate'),
			document.dqtsForm.elements('releaseDate'), '', '320', '300', 'No',
			'MM/dd/yyyy', 'Release Date', '2020', '2000', '', '',
			'cat.cis.tuf.server.calendar.NullCalendarValidator', '', '', '');

	// checkDate(document.getElementById('Release Date').value,'Release Date');

	return false;
}

function getDQTSWantDate() {

	openTUFCalendarV14('en_US', document.dqtsForm.elements('wantDate'),
			document.dqtsForm.elements('wantDate'), '', '320', '300', 'No',
			'MM/dd/yyyy', 'Want Date', '2020', '2000', '', '',
			'cat.cis.tuf.server.calendar.NullCalendarValidator', '', '', '');

	// checkDate(document.getElementById('Want Date').value,'Want Date');

	return false;
}

function getDQTSCoordinatorWantDate() {

	openTUFCalendarV14('en_US', document.dqtsForm
			.elements('coordinatorWantDate'), document.dqtsForm
			.elements('coordinatorWantDate'), '', '320', '300', 'No',
			'MM/dd/yyyy', 'Coordinator Want Date', '2020', '2000', '', '',
			'cat.cis.tuf.server.calendar.NullCalendarValidator', '', '', '');

	// checkDate(document.getElementById('Want Date').value,'Want Date');

	return false;
}

function getErrorRptFromDate() {

	openTUFCalendarV14('en_US', document.errorSummaryReportForm
			.elements('fromDate'), document.errorSummaryReportForm
			.elements('fromDate'), '', '320', '300', 'No', 'MM/dd/yyyy',
			'From Date', '2020', '2000', '', '',
			'cat.cis.tuf.server.calendar.NullCalendarValidator', '', '', '');

	return false;
}

function getErrorRptToDate() {

	openTUFCalendarV14('en_US', document.errorSummaryReportForm
			.elements('toDate'), document.errorSummaryReportForm
			.elements('toDate'), '', '320', '300', 'No', 'MM/dd/yyyy',
			'To Date', '2020', '2000', '', '',
			'cat.cis.tuf.server.calendar.NullCalendarValidator', '', '', '');

	return false;
}

function updateErrorChecklistAdmin(trackingNumber, partNumber, assignedChecker,
		engineeringChangeLevel, editFunction, role) {
	// alert('updateErrorChecklist '+
	// trackingNumber+'&nbsp;'+partNumber+'&nbsp;'+assignedChecker+'&nbsp;'+engineeringChangeLevel+'&nbsp;'+role);//for
	// testing
	if (role == 09 && checkInputAlphaNumericDT(trackingNumber)
			&& checkInputAlphaNumericDT(partNumber)
			&& checkInputAlphaNumericSpecialCharDT(engineeringChangeLevel)
			&& checkInputNumericDT(editFunction) && checkInputNumericDT(role)) {
		// alert('update '+
		// trackingNumber+'&nbsp;'+partNumber+'&nbsp;'+engineeringChangeLevel+'&nbsp;'+role);//for
		// testing
		// method = admin.package.errorChecklist.retrieve.action
		// location.href =
		// '/dqts/admin/package/errorChecklist.do?crumb=reset&method=Edit+Error+Checklist&editFlag=true&selectedTrackingNumber='
		// +trackingNumber+'&selectedPartNumber='+partNumber+'&selectedEngineeringChangeLevel='+engineeringChangeLevel+'&role='+role;
		window
				.open(
						'/dqts/admin/package/errorChecklist.do?crumb=reset&method=Edit+Error+Checklist&editFlag=true&selectedTrackingNumber='
								+ trackingNumber
								+ '&selectedPartNumber='
								+ partNumber
								+ '&selectedEngineeringChangeLevel='
								+ engineeringChangeLevel
								+ '&role='
								+ role
								+ '&editFunction='
								+ editFunction
								+ '&x='
								+ Math.random(), 'maincontent');
	} else if (checkInputAlphaNumericDT(trackingNumber)
			&& checkInputAlphaNumericDT(partNumber)
			&& checkInputAlphaNumericDT(assignedChecker)
			&& checkInputAlphaNumericSpecialCharDT(engineeringChangeLevel)
			&& checkInputNumericDT(editFunction) && checkInputNumericDT(role)) {
		// alert('updateErrorChecklist '+
		// trackingNumber+'&nbsp;'+partNumber+'&nbsp;'+assignedChecker+'&nbsp;'+engineeringChangeLevel+'&nbsp;'+role);//for
		// testing
		// method = admin.package.errorChecklist.retrieve.action
		// location.href =
		// '/dqts/admin/package/errorChecklist.do?crumb=reset&method=Edit+Error+Checklist&editFlag=true&selectedTrackingNumber='
		// +trackingNumber+'&selectedPartNumber='+partNumber+'&assignedChecker='+assignedChecker+'&selectedEngineeringChangeLevel='+engineeringChangeLevel+'&role='+role;
		window
				.open(
						'/dqts/admin/package/errorChecklist.do?crumb=reset&method=Edit+Error+Checklist&editFlag=true&selectedTrackingNumber='
								+ trackingNumber
								+ '&selectedPartNumber='
								+ partNumber
								+ '&assignedChecker='
								+ assignedChecker
								+ '&selectedEngineeringChangeLevel='
								+ engineeringChangeLevel
								+ '&role='
								+ role
								+ '&editFunction='
								+ editFunction
								+ '&x='
								+ Math.random(), 'maincontent');
	} else {
		alert("Invalid input.");
	}
}

function updateMentorErrorChecklistAdmin(trackingNumber, partNumber,
		assignedChecker, engineeringChangeLevel, ediFunction, role) {
	if (checkInputAlphaNumericDT(trackingNumber)
			&& checkInputAlphaNumericDT(partNumber)
			&& checkInputAlphaNumericDT(assignedChecker)
			&& checkInputAlphaNumericSpecialCharDT(engineeringChangeLevel)
			&& checkInputNumericDT(role) && checkInputNumericDT(editFunction)) {
		// alert('updateMentorErrorChecklist '+
		// trackingNumber+'&nbsp;'+partNumber+'&nbsp;'+assignedChecker+'&nbsp;'+engineeringChangeLevel+'&nbsp;'+role);//for
		// testing
		// method = admin.package.errorChecklist.retrieve.action
		// location.href =
		// '/dqts/admin/package/mentorErrorChecklist.do?crumb=reset&method=Edit+Error+Checklist&editFlag=true&selectedTrackingNumber='
		// +trackingNumber+'&selectedPartNumber='+partNumber+'&assignedChecker='+assignedChecker+'&selectedEngineeringChangeLevel='+engineeringChangeLevel+'&role='+role;
		window
				.open(
						'/dqts/admin/package/mentorErrorChecklist.do?crumb=reset&method=Edit+Error+Checklist&editFlag=true&selectedTrackingNumber='
								+ trackingNumber
								+ '&selectedPartNumber='
								+ partNumber
								+ '&assignedChecker='
								+ assignedChecker
								+ '&selectedEngineeringChangeLevel='
								+ engineeringChangeLevel
								+ '&role='
								+ role
								+ '&editFunction='
								+ editFunction
								+ '&x='
								+ Math.random(), 'maincontent');
	} else {
		alert("Invalid input.");
	}
}

// function getEDSNoticeComparison(partNumber,engineeringChangeLevel,facility)
function getEDSNoticeComparison(trackingNumber, partNumber,
		engineeringChangeLevel, facility) {
	if (checkInputAlphaNumericDT(partNumber)
			&& checkInputAlphaNumericDT(engineeringChangeLevel)
			&& checkInputAlphaNumericDT(facility)) {
		// method = admin.package.wrapperDetail.edsNoticeComparison.action
		window
				.open(
						'/dqts/admin/package/edsNoticeComparison.do?crumb=reset&method=Retrieve+EDS+Notice+Comparison&selectedTrackingNumber='
								+ trackingNumber
								+ '&selectedPartNumber='
								+ partNumber
								+ '&selectedEngineeringChangeLevel='
								+ engineeringChangeLevel
								+ '&releaseFacility='
								+ facility, '_blank');
	} else {
		alert("Invalid input.");
	}
}

function validateErrorChecklist() {

	// alert("I'm in here!");
	// alert(document.dqtsForm.elements('fMM1A[0]').value);
	// alert(""+document.dqtsForm.elements('fMM1A[0]').text);
	// alert("validateErrorChecklist");

	if (
	// FMM
	(document.dqtsForm.elements('fMM1A[0]') != null
			&& document.dqtsForm.elements('fMM1A[0]').value.length > 0 && document.dqtsForm
			.elements('fMM1A[0]').value != '0')
			|| (document.dqtsForm.elements('fMM1A[1]') != null
					&& document.dqtsForm.elements('fMM1A[1]').value.length > 0 && document.dqtsForm
					.elements('fMM1A[1]').value != '0')
			|| (document.dqtsForm.elements('fMM1A[2]') != null
					&& document.dqtsForm.elements('fMM1A[2]').value.length > 0 && document.dqtsForm
					.elements('fMM1A[2]').value != '0')
			||

			(document.dqtsForm.elements('fMM2A[0]') != null
					&& document.dqtsForm.elements('fMM2A[0]').value.length > 0 && document.dqtsForm
					.elements('fMM2A[0]').value != '0')
			|| (document.dqtsForm.elements('fMM2A[1]') != null
					&& document.dqtsForm.elements('fMM2A[1]').value.length > 0 && document.dqtsForm
					.elements('fMM2A[1]').value != '0')
			|| (document.dqtsForm.elements('fMM2A[2]') != null
					&& document.dqtsForm.elements('fMM2A[2]').value.length > 0 && document.dqtsForm
					.elements('fMM2A[2]').value != '0')
			||

			(document.dqtsForm.elements('fMM3A[0]') != null
					&& document.dqtsForm.elements('fMM3A[0]').value.length > 0 && document.dqtsForm
					.elements('fMM3A[0]').value != '0')
			|| (document.dqtsForm.elements('fMM3A[1]') != null
					&& document.dqtsForm.elements('fMM3A[1]').value.length > 0 && document.dqtsForm
					.elements('fMM3A[1]').value != '0')
			|| (document.dqtsForm.elements('fMM3A[2]') != null
					&& document.dqtsForm.elements('fMM3A[2]').value.length > 0 && document.dqtsForm
					.elements('fMM3A[2]').value != '0')
			||

			(document.dqtsForm.elements('fMM4A[0]') != null
					&& document.dqtsForm.elements('fMM4A[0]').value.length > 0 && document.dqtsForm
					.elements('fMM4A[0]').value != '0')
			|| (document.dqtsForm.elements('fMM4A[1]') != null
					&& document.dqtsForm.elements('fMM4A[1]').value.length > 0 && document.dqtsForm
					.elements('fMM4A[1]').value != '0')
			|| (document.dqtsForm.elements('fMM4A[2]') != null
					&& document.dqtsForm.elements('fMM4A[2]').value.length > 0 && document.dqtsForm
					.elements('fMM4A[2]').value != '0')
			||

			(document.dqtsForm.elements('fMM5A[0]') != null
					&& document.dqtsForm.elements('fMM5A[0]').value.length > 0 && document.dqtsForm
					.elements('fMM5A[0]').value != '0')
			|| (document.dqtsForm.elements('fMM5A[1]') != null
					&& document.dqtsForm.elements('fMM5A[1]').value.length > 0 && document.dqtsForm
					.elements('fMM5A[1]').value != '0')
			|| (document.dqtsForm.elements('fMM5A[2]') != null
					&& document.dqtsForm.elements('fMM5A[2]').value.length > 0 && document.dqtsForm
					.elements('fMM5A[2]').value != '0')
			||

			// TB
			(document.dqtsForm.elements('tB1A[0]') != null
					&& document.dqtsForm.elements('tB1A[0]').value.length > 0 && document.dqtsForm
					.elements('tB1A[0]').value != '0')
			|| (document.dqtsForm.elements('tB1A[1]') != null
					&& document.dqtsForm.elements('tB1A[1]').value.length > 0 && document.dqtsForm
					.elements('tB1A[1]').value != '0')
			|| (document.dqtsForm.elements('tB1A[2]') != null
					&& document.dqtsForm.elements('tB1A[2]').value.length > 0 && document.dqtsForm
					.elements('tB1A[2]').value != '0')
			||

			(document.dqtsForm.elements('tB2A[0]') != null
					&& document.dqtsForm.elements('tB2A[0]').value.length > 0 && document.dqtsForm
					.elements('tB2A[0]').value != '0')
			|| (document.dqtsForm.elements('tB2A[1]') != null
					&& document.dqtsForm.elements('tB2A[1]').value.length > 0 && document.dqtsForm
					.elements('tB2A[1]').value != '0')
			|| (document.dqtsForm.elements('tB2A[2]') != null
					&& document.dqtsForm.elements('tB2A[2]').value.length > 0 && document.dqtsForm
					.elements('tB2A[2]').value != '0')
			||

			(document.dqtsForm.elements('tB3A[0]') != null
					&& document.dqtsForm.elements('tB3A[0]').value.length > 0 && document.dqtsForm
					.elements('tB3A[0]').value != '0')
			|| (document.dqtsForm.elements('tB3A[1]') != null
					&& document.dqtsForm.elements('tB3A[1]').value.length > 0 && document.dqtsForm
					.elements('tB3A[1]').value != '0')
			|| (document.dqtsForm.elements('tB3A[2]') != null
					&& document.dqtsForm.elements('tB3A[2]').value.length > 0 && document.dqtsForm
					.elements('tB3A[2]').value != '0')
			||

			// S
			(document.dqtsForm.elements('s1A[0]') != null
					&& document.dqtsForm.elements('s1A[0]').value.length > 0 && document.dqtsForm
					.elements('s1A[0]').value != '0')
			|| (document.dqtsForm.elements('s1A[1]') != null
					&& document.dqtsForm.elements('s1A[1]').value.length > 0 && document.dqtsForm
					.elements('s1A[1]').value != '0')
			|| (document.dqtsForm.elements('s1A[2]') != null
					&& document.dqtsForm.elements('s1A[2]').value.length > 0 && document.dqtsForm
					.elements('s1A[2]').value != '0')
			||

			(document.dqtsForm.elements('s2A[0]') != null
					&& document.dqtsForm.elements('s2A[0]').value.length > 0 && document.dqtsForm
					.elements('s2A[0]').value != '0')
			|| (document.dqtsForm.elements('s2A[1]') != null
					&& document.dqtsForm.elements('s2A[1]').value.length > 0 && document.dqtsForm
					.elements('s2A[1]').value != '0')
			|| (document.dqtsForm.elements('s2A[2]') != null
					&& document.dqtsForm.elements('s2A[2]').value.length > 0 && document.dqtsForm
					.elements('s2A[2]').value != '0')
			||

			(document.dqtsForm.elements('s3A[0]') != null
					&& document.dqtsForm.elements('s3A[0]').value.length > 0 && document.dqtsForm
					.elements('s3A[0]').value != '0')
			|| (document.dqtsForm.elements('s3A[1]') != null
					&& document.dqtsForm.elements('s3A[1]').value.length > 0 && document.dqtsForm
					.elements('s3A[1]').value != '0')
			|| (document.dqtsForm.elements('s3A[2]') != null
					&& document.dqtsForm.elements('s3A[2]').value.length > 0 && document.dqtsForm
					.elements('s3A[2]').value != '0')
			||

			(document.dqtsForm.elements('s4A[0]') != null
					&& document.dqtsForm.elements('s4A[0]').value.length > 0 && document.dqtsForm
					.elements('s4A[0]').value != '0')
			|| (document.dqtsForm.elements('s4A[1]') != null
					&& document.dqtsForm.elements('s4A[1]').value.length > 0 && document.dqtsForm
					.elements('s4A[1]').value != '0')
			|| (document.dqtsForm.elements('s4A[2]') != null
					&& document.dqtsForm.elements('s4A[2]').value.length > 0 && document.dqtsForm
					.elements('s4A[2]').value != '0')
			||

			(document.dqtsForm.elements('s5A[0]') != null
					&& document.dqtsForm.elements('s5A[0]').value.length > 0 && document.dqtsForm
					.elements('s5A[0]').value != '0')
			|| (document.dqtsForm.elements('s5A[1]') != null
					&& document.dqtsForm.elements('s5A[1]').value.length > 0 && document.dqtsForm
					.elements('s5A[1]').value != '0')
			|| (document.dqtsForm.elements('s5A[2]') != null
					&& document.dqtsForm.elements('s5A[2]').value.length > 0 && document.dqtsForm
					.elements('s5A[2]').value != '0')
			||

			(document.dqtsForm.elements('s6A[0]') != null
					&& document.dqtsForm.elements('s6A[0]').value.length > 0 && document.dqtsForm
					.elements('s6A[0]').value != '0')
			|| (document.dqtsForm.elements('s6A[1]') != null
					&& document.dqtsForm.elements('s6A[1]').value.length > 0 && document.dqtsForm
					.elements('s6A[1]').value != '0')
			|| (document.dqtsForm.elements('s6A[2]') != null
					&& document.dqtsForm.elements('s6A[2]').value.length > 0 && document.dqtsForm
					.elements('s6A[2]').value != '0')
			||

			(document.dqtsForm.elements('s7A[0]') != null
					&& document.dqtsForm.elements('s7A[0]').value.length > 0 && document.dqtsForm
					.elements('s7A[0]').value != '0')
			|| (document.dqtsForm.elements('s7A[1]') != null
					&& document.dqtsForm.elements('s7A[1]').value.length > 0 && document.dqtsForm
					.elements('s7A[1]').value != '0')
			|| (document.dqtsForm.elements('s7A[2]') != null
					&& document.dqtsForm.elements('s7A[2]').value.length > 0 && document.dqtsForm
					.elements('s7A[2]').value != '0')
			||

			(document.dqtsForm.elements('s8A[0]') != null
					&& document.dqtsForm.elements('s8A[0]').value.length > 0 && document.dqtsForm
					.elements('s8A[0]').value != '0')
			|| (document.dqtsForm.elements('s8A[1]') != null
					&& document.dqtsForm.elements('s8A[1]').value.length > 0 && document.dqtsForm
					.elements('s8A[1]').value != '0')
			|| (document.dqtsForm.elements('s8A[2]') != null
					&& document.dqtsForm.elements('s8A[2]').value.length > 0 && document.dqtsForm
					.elements('s8A[2]').value != '0')
			||

			(document.dqtsForm.elements('s9A[0]') != null
					&& document.dqtsForm.elements('s9A[0]').value.length > 0 && document.dqtsForm
					.elements('s9A[0]').value != '0')
			|| (document.dqtsForm.elements('s9A[1]') != null
					&& document.dqtsForm.elements('s9A[1]').value.length > 0 && document.dqtsForm
					.elements('s9A[1]').value != '0')
			|| (document.dqtsForm.elements('s9A[2]') != null
					&& document.dqtsForm.elements('s9A[2]').value.length > 0 && document.dqtsForm
					.elements('s9A[2]').value != '0')
			||

			(document.dqtsForm.elements('s10A[0]') != null
					&& document.dqtsForm.elements('s10A[0]').value.length > 0 && document.dqtsForm
					.elements('s10A[0]').value != '0')
			|| (document.dqtsForm.elements('s10A[1]') != null
					&& document.dqtsForm.elements('s10A[1]').value.length > 0 && document.dqtsForm
					.elements('s10A[1]').value != '0')
			|| (document.dqtsForm.elements('s10A[2]') != null
					&& document.dqtsForm.elements('s10A[2]').value.length > 0 && document.dqtsForm
					.elements('s10A[2]').value != '0')
			||

			(document.dqtsForm.elements('s11A[0]') != null
					&& document.dqtsForm.elements('s11A[0]').value.length > 0 && document.dqtsForm
					.elements('s11A[0]').value != '0')
			|| (document.dqtsForm.elements('s11A[1]') != null
					&& document.dqtsForm.elements('s11A[1]').value.length > 0 && document.dqtsForm
					.elements('s11A[1]').value != '0')
			|| (document.dqtsForm.elements('s11A[2]') != null
					&& document.dqtsForm.elements('s11A[2]').value.length > 0 && document.dqtsForm
					.elements('s11A[2]').value != '0')
			||

			(document.dqtsForm.elements('s12A[0]') != null
					&& document.dqtsForm.elements('s12A[0]').value.length > 0 && document.dqtsForm
					.elements('s12A[0]').value != '0')
			|| (document.dqtsForm.elements('s12A[1]') != null
					&& document.dqtsForm.elements('s12A[1]').value.length > 0 && document.dqtsForm
					.elements('s12A[1]').value != '0')
			|| (document.dqtsForm.elements('s12A[2]') != null
					&& document.dqtsForm.elements('s12A[2]').value.length > 0 && document.dqtsForm
					.elements('s12A[2]').value != '0')
			||

			(document.dqtsForm.elements('s13A[0]') != null
					&& document.dqtsForm.elements('s13A[0]').value.length > 0 && document.dqtsForm
					.elements('s13A[0]').value != '0')
			|| (document.dqtsForm.elements('s13A[1]') != null
					&& document.dqtsForm.elements('s13A[1]').value.length > 0 && document.dqtsForm
					.elements('s13A[1]').value != '0')
			|| (document.dqtsForm.elements('s13A[2]') != null
					&& document.dqtsForm.elements('s13A[2]').value.length > 0 && document.dqtsForm
					.elements('s13A[2]').value != '0')
			||

			// PC
			(document.dqtsForm.elements('pC1A[0]') != null
					&& document.dqtsForm.elements('pC1A[0]').value.length > 0 && document.dqtsForm
					.elements('pC1A[0]').value != '0')
			|| (document.dqtsForm.elements('pC1A[1]') != null
					&& document.dqtsForm.elements('pC1A[1]').value.length > 0 && document.dqtsForm
					.elements('pC1A[1]').value != '0')
			|| (document.dqtsForm.elements('pC1A[2]') != null
					&& document.dqtsForm.elements('pC1A[2]').value.length > 0 && document.dqtsForm
					.elements('pC1A[2]').value != '0')
			||

			(document.dqtsForm.elements('pC2A[0]') != null
					&& document.dqtsForm.elements('pC2A[0]').value.length > 0 && document.dqtsForm
					.elements('pC2A[0]').value != '0')
			|| (document.dqtsForm.elements('pC2A[1]') != null
					&& document.dqtsForm.elements('pC2A[1]').value.length > 0 && document.dqtsForm
					.elements('pC2A[1]').value != '0')
			|| (document.dqtsForm.elements('pC2A[2]') != null
					&& document.dqtsForm.elements('pC2A[2]').value.length > 0 && document.dqtsForm
					.elements('pC2A[2]').value != '0')
			||

			(document.dqtsForm.elements('pC3A[0]') != null
					&& document.dqtsForm.elements('pC3A[0]').value.length > 0 && document.dqtsForm
					.elements('pC3A[0]').value != '0')
			|| (document.dqtsForm.elements('pC3A[1]') != null
					&& document.dqtsForm.elements('pC3A[1]').value.length > 0 && document.dqtsForm
					.elements('pC3A[1]').value != '0')
			|| (document.dqtsForm.elements('pC3A[2]') != null
					&& document.dqtsForm.elements('pC3A[2]').value.length > 0 && document.dqtsForm
					.elements('pC3A[2]').value != '0')
			||

			(document.dqtsForm.elements('pC4A[0]') != null
					&& document.dqtsForm.elements('pC4A[0]').value.length > 0 && document.dqtsForm
					.elements('pC4A[0]').value != '0')
			|| (document.dqtsForm.elements('pC4A[1]') != null
					&& document.dqtsForm.elements('pC4A[1]').value.length > 0 && document.dqtsForm
					.elements('pC4A[1]').value != '0')
			|| (document.dqtsForm.elements('pC4A[2]') != null
					&& document.dqtsForm.elements('pC4A[2]').value.length > 0 && document.dqtsForm
					.elements('pC4A[2]').value != '0')
			||

			(document.dqtsForm.elements('pC5A[0]') != null
					&& document.dqtsForm.elements('pC5A[0]').value.length > 0 && document.dqtsForm
					.elements('pC5A[0]').value != '0')
			|| (document.dqtsForm.elements('pC5A[1]') != null
					&& document.dqtsForm.elements('pC5A[1]').value.length > 0 && document.dqtsForm
					.elements('pC5A[1]').value != '0')
			|| (document.dqtsForm.elements('pC5A[2]') != null
					&& document.dqtsForm.elements('pC5A[2]').value.length > 0 && document.dqtsForm
					.elements('pC5A[2]').value != '0')
			||

			(document.dqtsForm.elements('pC6A[0]') != null
					&& document.dqtsForm.elements('pC6A[0]').value.length > 0 && document.dqtsForm
					.elements('pC6A[0]').value != '0')
			|| (document.dqtsForm.elements('pC6A[1]') != null
					&& document.dqtsForm.elements('pC6A[1]').value.length > 0 && document.dqtsForm
					.elements('pC6A[1]').value != '0')
			|| (document.dqtsForm.elements('pC6A[2]') != null
					&& document.dqtsForm.elements('pC6A[2]').value.length > 0 && document.dqtsForm
					.elements('pC6A[2]').value != '0')
			||

			(document.dqtsForm.elements('pC7A[0]') != null
					&& document.dqtsForm.elements('pC7A[0]').value.length > 0 && document.dqtsForm
					.elements('pC7A[0]').value != '0')
			|| (document.dqtsForm.elements('pC7A[1]') != null
					&& document.dqtsForm.elements('pC7A[1]').value.length > 0 && document.dqtsForm
					.elements('pC7A[1]').value != '0')
			|| (document.dqtsForm.elements('pC7A[2]') != null
					&& document.dqtsForm.elements('pC7A[2]').value.length > 0 && document.dqtsForm
					.elements('pC7A[2]').value != '0')
			||

			// DL
			(document.dqtsForm.elements('dL1A[0]') != null
					&& document.dqtsForm.elements('dL1A[0]').value.length > 0 && document.dqtsForm
					.elements('dL1A[0]').value != '0')
			|| (document.dqtsForm.elements('dL1A[1]') != null
					&& document.dqtsForm.elements('dL1A[1]').value.length > 0 && document.dqtsForm
					.elements('dL1A[1]').value != '0')
			|| (document.dqtsForm.elements('dL1A[2]') != null
					&& document.dqtsForm.elements('dL1A[2]').value.length > 0 && document.dqtsForm
					.elements('dL1A[2]').value != '0')
			||

			(document.dqtsForm.elements('dL2A[0]') != null
					&& document.dqtsForm.elements('dL2A[0]').value.length > 0 && document.dqtsForm
					.elements('dL2A[0]').value != '0')
			|| (document.dqtsForm.elements('dL2A[1]') != null
					&& document.dqtsForm.elements('dL2A[1]').value.length > 0 && document.dqtsForm
					.elements('dL2A[1]').value != '0')
			|| (document.dqtsForm.elements('dL2A[2]') != null
					&& document.dqtsForm.elements('dL2A[2]').value.length > 0 && document.dqtsForm
					.elements('dL2A[2]').value != '0')
			||

			(document.dqtsForm.elements('dL3A[0]') != null
					&& document.dqtsForm.elements('dL3A[0]').value.length > 0 && document.dqtsForm
					.elements('dL3A[0]').value != '0')
			|| (document.dqtsForm.elements('dL3A[1]') != null
					&& document.dqtsForm.elements('dL3A[1]').value.length > 0 && document.dqtsForm
					.elements('dL3A[1]').value != '0')
			|| (document.dqtsForm.elements('dL3A[2]') != null
					&& document.dqtsForm.elements('dL3A[2]').value.length > 0 && document.dqtsForm
					.elements('dL3A[2]').value != '0')
			||

			(document.dqtsForm.elements('dL4A[0]') != null
					&& document.dqtsForm.elements('dL4A[0]').value.length > 0 && document.dqtsForm
					.elements('dL4A[0]').value != '0')
			|| (document.dqtsForm.elements('dL4A[1]') != null
					&& document.dqtsForm.elements('dL4A[1]').value.length > 0 && document.dqtsForm
					.elements('dL4A[1]').value != '0')
			|| (document.dqtsForm.elements('dL4A[2]') != null
					&& document.dqtsForm.elements('dL4A[2]').value.length > 0 && document.dqtsForm
					.elements('dL4A[2]').value != '0')
			||

			(document.dqtsForm.elements('dL5A[0]') != null
					&& document.dqtsForm.elements('dL5A[0]').value.length > 0 && document.dqtsForm
					.elements('dL5A[0]').value != '0')
			|| (document.dqtsForm.elements('dL5A[1]') != null
					&& document.dqtsForm.elements('dL5A[1]').value.length > 0 && document.dqtsForm
					.elements('dL5A[1]').value != '0')
			|| (document.dqtsForm.elements('dL5A[2]') != null
					&& document.dqtsForm.elements('dL5A[2]').value.length > 0 && document.dqtsForm
					.elements('dL5A[2]').value != '0')
			||

			// DD
			(document.dqtsForm.elements('dD1A[0]') != null
					&& document.dqtsForm.elements('dD1A[0]').value.length > 0 && document.dqtsForm
					.elements('dD1A[0]').value != '0')
			|| (document.dqtsForm.elements('dD1A[1]') != null
					&& document.dqtsForm.elements('dD1A[1]').value.length > 0 && document.dqtsForm
					.elements('dD1A[1]').value != '0')
			|| (document.dqtsForm.elements('dD1A[2]') != null
					&& document.dqtsForm.elements('dD1A[2]').value.length > 0 && document.dqtsForm
					.elements('dD1A[2]').value != '0')
			||

			(document.dqtsForm.elements('dD2A[0]') != null
					&& document.dqtsForm.elements('dD2A[0]').value.length > 0 && document.dqtsForm
					.elements('dD2A[0]').value != '0')
			|| (document.dqtsForm.elements('dD2A[1]') != null
					&& document.dqtsForm.elements('dD2A[1]').value.length > 0 && document.dqtsForm
					.elements('dD2A[1]').value != '0')
			|| (document.dqtsForm.elements('dD2A[2]') != null
					&& document.dqtsForm.elements('dD2A[2]').value.length > 0 && document.dqtsForm
					.elements('dD2A[2]').value != '0')
			||

			(document.dqtsForm.elements('dD3A[0]') != null
					&& document.dqtsForm.elements('dD3A[0]').value.length > 0 && document.dqtsForm
					.elements('dD3A[0]').value != '0')
			|| (document.dqtsForm.elements('dD3A[1]') != null
					&& document.dqtsForm.elements('dD3A[1]').value.length > 0 && document.dqtsForm
					.elements('dD3A[1]').value != '0')
			|| (document.dqtsForm.elements('dD3A[2]') != null
					&& document.dqtsForm.elements('dD3A[2]').value.length > 0 && document.dqtsForm
					.elements('dD3A[2]').value != '0')
			||

			(document.dqtsForm.elements('dD3A[0]') != null
					&& document.dqtsForm.elements('dD3A[0]').value.length > 0 && document.dqtsForm
					.elements('dD3A[0]').value != '0')
			|| (document.dqtsForm.elements('dD3A[1]') != null
					&& document.dqtsForm.elements('dD3A[1]').value.length > 0 && document.dqtsForm
					.elements('dD3A[1]').value != '0')
			|| (document.dqtsForm.elements('dD3A[2]') != null
					&& document.dqtsForm.elements('dD3A[2]').value.length > 0 && document.dqtsForm
					.elements('dD3A[2]').value != '0')
			||

			(document.dqtsForm.elements('dD4A[0]') != null
					&& document.dqtsForm.elements('dD4A[0]').value.length > 0 && document.dqtsForm
					.elements('dD4A[0]').value != '0')
			|| (document.dqtsForm.elements('dD4A[1]') != null
					&& document.dqtsForm.elements('dD4A[1]').value.length > 0 && document.dqtsForm
					.elements('dD4A[1]').value != '0')
			|| (document.dqtsForm.elements('dD4A[2]') != null
					&& document.dqtsForm.elements('dD4A[2]').value.length > 0 && document.dqtsForm
					.elements('dD4A[2]').value != '0')
			||

			(document.dqtsForm.elements('dD5A[0]') != null
					&& document.dqtsForm.elements('dD5A[0]').value.length > 0 && document.dqtsForm
					.elements('dD5A[0]').value != '0')
			|| (document.dqtsForm.elements('dD5A[1]') != null
					&& document.dqtsForm.elements('dD5A[1]').value.length > 0 && document.dqtsForm
					.elements('dD5A[1]').value != '0')
			|| (document.dqtsForm.elements('dD5A[2]') != null
					&& document.dqtsForm.elements('dD5A[2]').value.length > 0 && document.dqtsForm
					.elements('dD5A[2]').value != '0')
			||

			(document.dqtsForm.elements('dD6A[0]') != null
					&& document.dqtsForm.elements('dD6A[0]').value.length > 0 && document.dqtsForm
					.elements('dD6A[0]').value != '0')
			|| (document.dqtsForm.elements('dD6A[1]') != null
					&& document.dqtsForm.elements('dD6A[1]').value.length > 0 && document.dqtsForm
					.elements('dD6A[1]').value != '0')
			|| (document.dqtsForm.elements('dD6A[2]') != null
					&& document.dqtsForm.elements('dD6A[2]').value.length > 0 && document.dqtsForm
					.elements('dD6A[2]').value != '0')
			||

			(document.dqtsForm.elements('dD7A[0]') != null
					&& document.dqtsForm.elements('dD7A[0]').value.length > 0 && document.dqtsForm
					.elements('dD7A[0]').value != '0')
			|| (document.dqtsForm.elements('dD7A[1]') != null
					&& document.dqtsForm.elements('dD7A[1]').value.length > 0 && document.dqtsForm
					.elements('dD7A[1]').value != '0')
			|| (document.dqtsForm.elements('dD7A[2]') != null
					&& document.dqtsForm.elements('dD7A[2]').value.length > 0 && document.dqtsForm
					.elements('dD7A[2]').value != '0')
			||

			(document.dqtsForm.elements('dD8A[0]') != null
					&& document.dqtsForm.elements('dD8A[0]').value.length > 0 && document.dqtsForm
					.elements('dD8A[0]').value != '0')
			|| (document.dqtsForm.elements('dD8A[1]') != null
					&& document.dqtsForm.elements('dD8A[1]').value.length > 0 && document.dqtsForm
					.elements('dD8A[1]').value != '0')
			|| (document.dqtsForm.elements('dD8A[2]') != null
					&& document.dqtsForm.elements('dD8A[2]').value.length > 0 && document.dqtsForm
					.elements('dD8A[2]').value != '0')
			||

			// EDSN
			(document.dqtsForm.elements('eDSN1A[0]') != null
					&& document.dqtsForm.elements('eDSN1A[0]').value.length > 0 && document.dqtsForm
					.elements('eDSN1A[0]').value != '0')
			|| (document.dqtsForm.elements('eDSN1A[1]') != null
					&& document.dqtsForm.elements('eDSN1A[1]').value.length > 0 && document.dqtsForm
					.elements('eDSN1A[1]').value != '0')
			|| (document.dqtsForm.elements('eDSN1A[2]') != null
					&& document.dqtsForm.elements('eDSN1A[2]').value.length > 0 && document.dqtsForm
					.elements('eDSN1A[2]').value != '0')
			||

			(document.dqtsForm.elements('eDSN2A[0]') != null
					&& document.dqtsForm.elements('eDSN2A[0]').value.length > 0 && document.dqtsForm
					.elements('eDSN2A[0]').value != '0')
			|| (document.dqtsForm.elements('eDSN2A[1]') != null
					&& document.dqtsForm.elements('eDSN2A[1]').value.length > 0 && document.dqtsForm
					.elements('eDSN2A[1]').value != '0')
			|| (document.dqtsForm.elements('eDSN2A[2]') != null
					&& document.dqtsForm.elements('eDSN2A[2]').value.length > 0 && document.dqtsForm
					.elements('eDSN2A[2]').value != '0')
			||

			(document.dqtsForm.elements('eDSN3A[0]') != null
					&& document.dqtsForm.elements('eDSN3A[0]').value.length > 0 && document.dqtsForm
					.elements('eDSN3A[0]').value != '0')
			|| (document.dqtsForm.elements('eDSN3A[1]') != null
					&& document.dqtsForm.elements('eDSN3A[1]').value.length > 0 && document.dqtsForm
					.elements('eDSN3A[1]').value != '0')
			|| (document.dqtsForm.elements('eDSN3A[2]') != null
					&& document.dqtsForm.elements('eDSN3A[2]').value.length > 0 && document.dqtsForm
					.elements('eDSN3A[2]').value != '0')
			||

			(document.dqtsForm.elements('eDSN4A[0]') != null
					&& document.dqtsForm.elements('eDSN4A[0]').value.length > 0 && document.dqtsForm
					.elements('eDSN4A[0]').value != '0')
			|| (document.dqtsForm.elements('eDSN4A[1]') != null
					&& document.dqtsForm.elements('eDSN4A[1]').value.length > 0 && document.dqtsForm
					.elements('eDSN4A[1]').value != '0')
			|| (document.dqtsForm.elements('eDSN4A[2]') != null
					&& document.dqtsForm.elements('eDSN4A[2]').value.length > 0 && document.dqtsForm
					.elements('eDSN4A[2]').value != '0')
			||

			(document.dqtsForm.elements('eDSN5A[0]') != null
					&& document.dqtsForm.elements('eDSN5A[0]').value.length > 0 && document.dqtsForm
					.elements('eDSN5A[0]').value != '0')
			|| (document.dqtsForm.elements('eDSN5A[1]') != null
					&& document.dqtsForm.elements('eDSN5A[1]').value.length > 0 && document.dqtsForm
					.elements('eDSN5A[1]').value != '0')
			|| (document.dqtsForm.elements('eDSN5A[2]') != null
					&& document.dqtsForm.elements('eDSN5A[2]').value.length > 0 && document.dqtsForm
					.elements('eDSN5A[2]').value != '0')
			||

			(document.dqtsForm.elements('eDSN6A[0]') != null
					&& document.dqtsForm.elements('eDSN6A[0]').value.length > 0 && document.dqtsForm
					.elements('eDSN6A[0]').value != '0')
			|| (document.dqtsForm.elements('eDSN6A[1]') != null
					&& document.dqtsForm.elements('eDSN6A[1]').value.length > 0 && document.dqtsForm
					.elements('eDSN6A[1]').value != '0')
			|| (document.dqtsForm.elements('eDSN6A[2]') != null
					&& document.dqtsForm.elements('eDSN6A[2]').value.length > 0 && document.dqtsForm
					.elements('eDSN6A[2]').value != '0')
			||

			(document.dqtsForm.elements('eDSN7A[0]') != null
					&& document.dqtsForm.elements('eDSN7A[0]').value.length > 0 && document.dqtsForm
					.elements('eDSN7A[0]').value != '0')
			|| (document.dqtsForm.elements('eDSN7A[1]') != null
					&& document.dqtsForm.elements('eDSN7A[1]').value.length > 0 && document.dqtsForm
					.elements('eDSN7A[1]').value != '0')
			|| (document.dqtsForm.elements('eDSN7A[2]') != null
					&& document.dqtsForm.elements('eDSN7A[2]').value.length > 0 && document.dqtsForm
					.elements('eDSN7A[2]').value != '0')
			||

			(document.dqtsForm.elements('eDSN8A[0]') != null
					&& document.dqtsForm.elements('eDSN8A[0]').value.length > 0 && document.dqtsForm
					.elements('eDSN8A[0]').value != '0')
			|| (document.dqtsForm.elements('eDSN8A[1]') != null
					&& document.dqtsForm.elements('eDSN8A[1]').value.length > 0 && document.dqtsForm
					.elements('eDSN8A[1]').value != '0')
			|| (document.dqtsForm.elements('eDSN8A[2]') != null
					&& document.dqtsForm.elements('eDSN8A[2]').value.length > 0 && document.dqtsForm
					.elements('eDSN8A[2]').value != '0')
			||

			(document.dqtsForm.elements('eDSN9A[0]') != null
					&& document.dqtsForm.elements('eDSN9A[0]').value.length > 0 && document.dqtsForm
					.elements('eDSN9A[0]').value != '0')
			|| (document.dqtsForm.elements('eDSN9A[1]') != null
					&& document.dqtsForm.elements('eDSN9A[1]').value.length > 0 && document.dqtsForm
					.elements('eDSN9A[1]').value != '0')
			|| (document.dqtsForm.elements('eDSN9A[2]') != null
					&& document.dqtsForm.elements('eDSN9A[2]').value.length > 0 && document.dqtsForm
					.elements('eDSN9A[2]').value != '0')
			||

			(document.dqtsForm.elements('eDSN10A[0]') != null
					&& document.dqtsForm.elements('eDSN10A[0]').value.length > 0 && document.dqtsForm
					.elements('eDSN10A[0]').value != '0')
			|| (document.dqtsForm.elements('eDSN10A[1]') != null
					&& document.dqtsForm.elements('eDSN10A[1]').value.length > 0 && document.dqtsForm
					.elements('eDSN10A[1]').value != '0')
			|| (document.dqtsForm.elements('eDSN10A[2]') != null
					&& document.dqtsForm.elements('eDSN10A[2]').value.length > 0 && document.dqtsForm
					.elements('eDSN10A[2]').value != '0')
			||

			(document.dqtsForm.elements('eDSN11A[0]') != null
					&& document.dqtsForm.elements('eDSN11A[0]').value.length > 0 && document.dqtsForm
					.elements('eDSN11A[0]').value != '0')
			|| (document.dqtsForm.elements('eDSN11A[1]') != null
					&& document.dqtsForm.elements('eDSN11A[1]').value.length > 0 && document.dqtsForm
					.elements('eDSN11A[1]').value != '0')
			|| (document.dqtsForm.elements('eDSN11A[2]') != null
					&& document.dqtsForm.elements('eDSN11A[2]').value.length > 0 && document.dqtsForm
					.elements('eDSN11A[2]').value != '0')
			||

			(document.dqtsForm.elements('eDSN12A[0]') != null
					&& document.dqtsForm.elements('eDSN12A[0]').value.length > 0 && document.dqtsForm
					.elements('eDSN12A[0]').value != '0')
			|| (document.dqtsForm.elements('eDSN12A[1]') != null
					&& document.dqtsForm.elements('eDSN12A[1]').value.length > 0 && document.dqtsForm
					.elements('eDSN12A[1]').value != '0')
			|| (document.dqtsForm.elements('eDSN12A[2]') != null
					&& document.dqtsForm.elements('eDSN12A[2]').value.length > 0 && document.dqtsForm
					.elements('eDSN12A[2]').value != '0')
			||

			(document.dqtsForm.elements('eDSN13A[0]') != null
					&& document.dqtsForm.elements('eDSN13A[0]').value.length > 0 && document.dqtsForm
					.elements('eDSN13A[0]').value != '0')
			|| (document.dqtsForm.elements('eDSN13A[1]') != null
					&& document.dqtsForm.elements('eDSN13A[1]').value.length > 0 && document.dqtsForm
					.elements('eDSN13A[1]').value != '0')
			|| (document.dqtsForm.elements('eDSN13A[2]') != null
					&& document.dqtsForm.elements('eDSN13A[2]').value.length > 0 && document.dqtsForm
					.elements('eDSN13A[2]').value != '0')
			||

			(document.dqtsForm.elements('eDSN14A[0]') != null
					&& document.dqtsForm.elements('eDSN14A[0]').value.length > 0 && document.dqtsForm
					.elements('eDSN14A[0]').value != '0')
			|| (document.dqtsForm.elements('eDSN14A[1]') != null
					&& document.dqtsForm.elements('eDSN14A[1]').value.length > 0 && document.dqtsForm
					.elements('eDSN14A[1]').value != '0')
			|| (document.dqtsForm.elements('eDSN14A[2]') != null
					&& document.dqtsForm.elements('eDSN14A[2]').value.length > 0 && document.dqtsForm
					.elements('eDSN14A[2]').value != '0')
			||

			(document.dqtsForm.elements('eDSN15A[0]') != null
					&& document.dqtsForm.elements('eDSN15A[0]').value.length > 0 && document.dqtsForm
					.elements('eDSN15A[0]').value != '0')
			|| (document.dqtsForm.elements('eDSN15A[1]') != null
					&& document.dqtsForm.elements('eDSN15A[1]').value.length > 0 && document.dqtsForm
					.elements('eDSN15A[1]').value != '0')
			|| (document.dqtsForm.elements('eDSN15A[2]') != null
					&& document.dqtsForm.elements('eDSN15A[2]').value.length > 0 && document.dqtsForm
					.elements('eDSN15A[2]').value != '0')
			||

			(document.dqtsForm.elements('eDSN16A[0]') != null
					&& document.dqtsForm.elements('eDSN16A[0]').value.length > 0 && document.dqtsForm
					.elements('eDSN16A[0]').value != '0')
			|| (document.dqtsForm.elements('eDSN16A[1]') != null
					&& document.dqtsForm.elements('eDSN16A[1]').value.length > 0 && document.dqtsForm
					.elements('eDSN16A[1]').value != '0')
			|| (document.dqtsForm.elements('eDSN16A[2]') != null
					&& document.dqtsForm.elements('eDSN16A[2]').value.length > 0 && document.dqtsForm
					.elements('eDSN16A[2]').value != '0')
			||

			(document.dqtsForm.elements('eDSN17A[0]') != null
					&& document.dqtsForm.elements('eDSN17A[0]').value.length > 0 && document.dqtsForm
					.elements('eDSN17A[0]').value != '0')
			|| (document.dqtsForm.elements('eDSN17A[1]') != null
					&& document.dqtsForm.elements('eDSN17A[1]').value.length > 0 && document.dqtsForm
					.elements('eDSN17A[1]').value != '0')
			|| (document.dqtsForm.elements('eDSN17A[2]') != null
					&& document.dqtsForm.elements('eDSN17A[2]').value.length > 0 && document.dqtsForm
					.elements('eDSN17A[2]').value != '0')
			||

			(document.dqtsForm.elements('eDSN18A[0]') != null
					&& document.dqtsForm.elements('eDSN18A[0]').value.length > 0 && document.dqtsForm
					.elements('eDSN18A[0]').value != '0')
			|| (document.dqtsForm.elements('eDSN18A[1]') != null
					&& document.dqtsForm.elements('eDSN18A[1]').value.length > 0 && document.dqtsForm
					.elements('eDSN18A[1]').value != '0')
			|| (document.dqtsForm.elements('eDSN18A[2]') != null
					&& document.dqtsForm.elements('eDSN18A[2]').value.length > 0 && document.dqtsForm
					.elements('eDSN18A[2]').value != '0')
			||

			(document.dqtsForm.elements('eDSN19A[0]') != null
					&& document.dqtsForm.elements('eDSN19A[0]').value.length > 0 && document.dqtsForm
					.elements('eDSN19A[0]').value != '0')
			|| (document.dqtsForm.elements('eDSN19A[1]') != null
					&& document.dqtsForm.elements('eDSN19A[1]').value.length > 0 && document.dqtsForm
					.elements('eDSN19A[1]').value != '0')
			|| (document.dqtsForm.elements('eDSN19A[2]') != null
					&& document.dqtsForm.elements('eDSN19A[2]').value.length > 0 && document.dqtsForm
					.elements('eDSN19A[2]').value != '0')
			||

			(document.dqtsForm.elements('eDSN20A[0]') != null
					&& document.dqtsForm.elements('eDSN20A[0]').value.length > 0 && document.dqtsForm
					.elements('eDSN20A[0]').value != '0')
			|| (document.dqtsForm.elements('eDSN20A[1]') != null
					&& document.dqtsForm.elements('eDSN20A[1]').value.length > 0 && document.dqtsForm
					.elements('eDSN20A[1]').value != '0')
			|| (document.dqtsForm.elements('eDSN20A[2]') != null
					&& document.dqtsForm.elements('eDSN20A[2]').value.length > 0 && document.dqtsForm
					.elements('eDSN20A[2]').value != '0')) {
		// alert("In the true block!");
		return true;

	} else {

		alert("You must enter at least 1 error prior to submitting the Error Checklist");
		return false;
	}

}

function validateMentorErrorChecklist() {

	// alert("I'm in here!");
	// alert(document.dqtsForm.elements('fMM1A[0]').value);

	if (
	// FMM
	(document.dqtsForm.elements('fMM1A[0]') != null
			&& document.dqtsForm.elements('fMM1A[0]').value.length > 0 && document.dqtsForm
			.elements('fMM1A[0]').value != '0')
			|| (document.dqtsForm.elements('fMM1A[1]') != null
					&& document.dqtsForm.elements('fMM1A[1]').value.length > 0 && document.dqtsForm
					.elements('fMM1A[1]').value != '0')
			|| (document.dqtsForm.elements('fMM1A[2]') != null
					&& document.dqtsForm.elements('fMM1A[2]').value.length > 0 && document.dqtsForm
					.elements('fMM1A[2]').value != '0')
			||

			// TB
			(document.dqtsForm.elements('tB1A[0]') != null
					&& document.dqtsForm.elements('tB1A[0]').value.length > 0 && document.dqtsForm
					.elements('tB1A[0]').value != '0')
			|| (document.dqtsForm.elements('tB1A[1]') != null
					&& document.dqtsForm.elements('tB1A[1]').value.length > 0 && document.dqtsForm
					.elements('tB1A[1]').value != '0')
			|| (document.dqtsForm.elements('tB1A[2]') != null
					&& document.dqtsForm.elements('tB1A[2]').value.length > 0 && document.dqtsForm
					.elements('tB1A[2]').value != '0')
			||

			// S
			(document.dqtsForm.elements('s1A[0]') != null
					&& document.dqtsForm.elements('s1A[0]').value.length > 0 && document.dqtsForm
					.elements('s1A[0]').value != '0')
			|| (document.dqtsForm.elements('s1A[1]') != null
					&& document.dqtsForm.elements('s1A[1]').value.length > 0 && document.dqtsForm
					.elements('s1A[1]').value != '0')
			|| (document.dqtsForm.elements('s1A[2]') != null
					&& document.dqtsForm.elements('s1A[2]').value.length > 0 && document.dqtsForm
					.elements('s1A[2]').value != '0')
			||

			// PC
			(document.dqtsForm.elements('pC1A[0]') != null
					&& document.dqtsForm.elements('pC1A[0]').value.length > 0 && document.dqtsForm
					.elements('pC1A[0]').value != '0')
			|| (document.dqtsForm.elements('pC1A[1]') != null
					&& document.dqtsForm.elements('pC1A[1]').value.length > 0 && document.dqtsForm
					.elements('pC1A[1]').value != '0')
			|| (document.dqtsForm.elements('pC1A[2]') != null
					&& document.dqtsForm.elements('pC1A[2]').value.length > 0 && document.dqtsForm
					.elements('pC1A[2]').value != '0')
			||

			// DL
			(document.dqtsForm.elements('dL1A[0]') != null
					&& document.dqtsForm.elements('dL1A[0]').value.length > 0 && document.dqtsForm
					.elements('dL1A[0]').value != '0')
			|| (document.dqtsForm.elements('dL1A[1]') != null
					&& document.dqtsForm.elements('dL1A[1]').value.length > 0 && document.dqtsForm
					.elements('dL1A[1]').value != '0')
			|| (document.dqtsForm.elements('dL1A[2]') != null
					&& document.dqtsForm.elements('dL1A[2]').value.length > 0 && document.dqtsForm
					.elements('dL1A[2]').value != '0')
			||

			// DD
			(document.dqtsForm.elements('dD1A[0]') != null
					&& document.dqtsForm.elements('dD1A[0]').value.length > 0 && document.dqtsForm
					.elements('dD1A[0]').value != '0')
			|| (document.dqtsForm.elements('dD1A[1]') != null
					&& document.dqtsForm.elements('dD1A[1]').value.length > 0 && document.dqtsForm
					.elements('dD1A[1]').value != '0')
			|| (document.dqtsForm.elements('dD1A[2]') != null
					&& document.dqtsForm.elements('dD1A[2]').value.length > 0 && document.dqtsForm
					.elements('dD1A[2]').value != '0')
			||

			// EDSN
			(document.dqtsForm.elements('eDSN1A[0]') != null
					&& document.dqtsForm.elements('eDSN1A[0]').value.length > 0 && document.dqtsForm
					.elements('eDSN1A[0]').value != '0')
			|| (document.dqtsForm.elements('eDSN1A[1]') != null
					&& document.dqtsForm.elements('eDSN1A[1]').value.length > 0 && document.dqtsForm
					.elements('eDSN1A[1]').value != '0')
			|| (document.dqtsForm.elements('eDSN1A[2]') != null
					&& document.dqtsForm.elements('eDSN1A[2]').value.length > 0 && document.dqtsForm
					.elements('eDSN1A[2]').value != '0')) {
		return true;

	} else {

		alert("You must enter at least 1 error prior to submitting the Error Checklist");
		return false;
	}

}

function ajaxValidateCwsId(method, value, field, target) {
	var xmlhttp;
	var params;

	if (target.length > 0) {
		params = "method=" + method + "&value=" + encodeURIComponent(value)
				+ "&target=" + target + '&x=' + Math.random();
	} else {
		params = "method=" + method + "&value=" + encodeURIComponent(value)
				+ '&x=' + Math.random();
	}

	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			if (target.length > 0) {
				document.getElementById(target).innerHTML = xmlhttp.responseText;
			}

			if (xmlhttp.responseText.indexOf("Invalid") > 0) {
				document.getElementById(field).style.color = "red";
				document.getElementById(field).style.backgroundColor = "yellow";
				alert("Invalid CWSID");
				document.getElementById(field).focus;
				return false;
			} else {
				document.getElementById(field).style.color = "black";
				document.getElementById(field).style.backgroundColor = "white";
				return true;
			}
		} else {
			return true;
		}
	}

	xmlhttp.open("POST", '/dqts/admin/package/packageManagementAjaxCall.do',
			true);
	xmlhttp.setRequestHeader("Content-type",
			"application/x-www-form-urlencoded");
	xmlhttp.send(params);
}

function ajaxValidateCwsIdDT(method, value) {
	var xmlhttp;
	var params;

	params = "method=" + method + "&value=" + encodeURIComponent(value);

	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			if (xmlhttp.responseText.indexOf("Invalid") > 0) {
				return false;
			} else {
				return true;
			}
		}
	}

	xmlhttp.open("POST", '/dqts/admin/package/packageManagementAjaxCall.do',
			true);
	xmlhttp.setRequestHeader("Content-type",
			"application/x-www-form-urlencoded");
	xmlhttp.send(params);
}

function chkInvalidCwsIdsOnCreate() {

	// alert("chkInvalidCwsIdsOnCreate");

	if (document.getElementById("planningJobOwnerId_Div").innerHTML
			.indexOf("Invalid") > 0) {
		alert("Invalid CWSID: Please remove or correct Planning Job Owner Cws Id.");
		return false;
	}

	if (document.getElementById("teamCenterCoordinatorId_Div").innerHTML
			.indexOf("Invalid") > 0) {
		alert("Invalid CWSID: Please remove or correct Team Center Coordinator Cws Id.");
		return false;
	}

	if (document.getElementById("engineerCupidId_Div").innerHTML
			.indexOf("Invalid") > 0) {
		alert("Invalid CWSID: Please remove or correct Engineer Cws Id.");
		return false;
	}

	if (document.getElementById("engineerSupervisorId_Div").innerHTML
			.indexOf("Invalid") > 0) {
		alert("Invalid CWSID: Please remove or correct Engineer Supervisor Cws Id.");
		return false;
	}

	return false;
}

function ajaxValidatePNECL(partNumber, engineeringChangeLevel, div,
		partNoField, engChgLvlField) {
	var xmlhttp;
	var params = "method=ValidatePartNoEngChgLvl&partNumber="
			+ encodeURIComponent(partNumber) + "&engineeringChangeLevel="
			+ encodeURIComponent(engineeringChangeLevel) + '&x='
			+ Math.random();

	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById(target).innerHTML = xmlhttp.responseText;

			if (xmlhttp.responseText.indexOf("Invalid") > 0) {
				document.getElementById(partNoField).style.color = "red";
				document.getElementById(partNoField).style.backgroundColor = "yellow";
				document.getElementById(engChgLvlField).style.color = "red";
				document.getElementById(engChgLvlField).style.backgroundColor = "yellow";
			}
			return false;
		}
	}

	xmlhttp.open("POST", '/dqts/admin/package/packageManagementAjaxCall.do',
			true);
	xmlhttp.setRequestHeader("Content-type",
			"application/x-www-form-urlencoded");
	xmlhttp.send(params);
}

function validateAssignmentSearchForm() {

	if ((document.dqtsForm.elements('trackingNumber') != null && document.dqtsForm
			.elements('trackingNumber').value.length <= 0)
			&& (document.dqtsForm.elements('changeNoticeNumber') != null && document.dqtsForm
					.elements('changeNoticeNumber').value.length <= 0)
			&& (document.dqtsForm.elements('partNumber') != null && document.dqtsForm
					.elements('partNumber').value.length <= 0)
			&& (document.dqtsForm.elements('designControl') != null && document.dqtsForm
					.elements('designControl').value.length <= 0)
			&& (document.dqtsForm.elements('packagePriority') != null && document.dqtsForm
					.elements('packagePriority').value.length <= 0)) {
		alert("At least 1 search criteria must be entered");
		return false;
	} else if (document.dqtsForm.elements('trackingNumber') != null
			&& !checkInputAlphaNumericDT(document.dqtsForm
					.elements('trackingNumber').value)) {
		alert("Tracking Number contains invalid characters.  May contain only a-z,A-Z,0-9");
		return false;
	} else if (document.dqtsForm.elements('changeNoticeNumber') != null
			&& !checkInputAlphaNumericDT(document.dqtsForm
					.elements('changeNoticeNumber').value)) {
		alert("Change Notice Number contains invalid characters.  May contain only a-z,A-Z,0-9");
		return false;
	} else if (document.dqtsForm.elements('partNumber') != null
			&& !checkInputAlphaNumericDT(document.dqtsForm
					.elements('partNumber').value)) {
		alert("Part Number contains invalid characters.  May contain only a-z,A-Z,0-9");
		return false;
	} else if (document.dqtsForm.elements('designControl') != null
			&& !checkInputAlphaNumericDT(document.dqtsForm
					.elements('designControl').value)) {
		alert("Design Control contains invalid characters.  May contain only a-z,A-Z,0-9");
		return false;
	} else if (document.dqtsForm.elements('packagePriority') != null
			&& !checkInputNumericDT(document.dqtsForm
					.elements('packagePriority').value)) {
		alert("Package Priority contains invalid characters.  Please select value from list");
		return false;
	} else {
		return true;
	}
}

function validateReassignmentSearchForm() {

	if ((document.dqtsForm.elements('trackingNumber') != null && document.dqtsForm
			.elements('trackingNumber').value.length <= 0)
			&& (document.dqtsForm.elements('changeNoticeNumber') != null && document.dqtsForm
					.elements('changeNoticeNumber').value.length <= 0)
			&& (document.dqtsForm.elements('partNumber') != null && document.dqtsForm
					.elements('partNumber').value.length <= 0)
			&& (document.dqtsForm.elements('designControl') != null && document.dqtsForm
					.elements('designControl').value.length <= 0)
			&& (document.dqtsForm.elements('packagePriority') != null && document.dqtsForm
					.elements('packagePriority').value.length <= 0)
			&& (document.dqtsForm.elements('assignedChecker') != null && document.dqtsForm
					.elements('assignedChecker').value.length <= 0)) {
		alert("At least 1 search criteria must be entered");
		return false;
	} else if (document.dqtsForm.elements('trackingNumber') != null
			&& !checkInputAlphaNumericDT(document.dqtsForm
					.elements('trackingNumber').value)) {
		alert("Tracking Number contains invalid characters.  May contain only a-z,A-Z,0-9");
		return false;
	} else if (document.dqtsForm.elements('changeNoticeNumber') != null
			&& !checkInputAlphaNumericDT(document.dqtsForm
					.elements('changeNoticeNumber').value)) {
		alert("Change Notice Number contains invalid characters.  May contain only a-z,A-Z,0-9");
		return false;
	} else if (document.dqtsForm.elements('partNumber') != null
			&& !checkInputAlphaNumericDT(document.dqtsForm
					.elements('partNumber').value)) {
		alert("Part Number contains invalid characters.  May contain only a-z,A-Z,0-9");
		return false;
	} else if (document.dqtsForm.elements('designControl') != null
			&& !checkInputAlphaNumericDT(document.dqtsForm
					.elements('designControl').value)) {
		alert("Design Control contains invalid characters.  May contain only a-z,A-Z,0-9");
		return false;
	} else if (document.dqtsForm.elements('packagePriority') != null
			&& !checkInputNumericDT(document.dqtsForm
					.elements('packagePriority').value)) {
		alert("Package Priority contains invalid characters.  Please select value from list");
		return false;
	} else if (document.dqtsForm.elements('assignedChecker') != null
			&& !checkInputAlphaNumericDT(document.dqtsForm
					.elements('assignedChecker').value)) {
		alert("Assigned Checker contains invalid characters.  May contain only a-z,A-Z,0-9");
		return false;
	} else {
		return true;
	}
}

function validateErrorChecklistChars() {

	var text = " field contains invalid characters.  May contain only a-z,A-Z,0-9";

	// DD
	var DD1A_0 = false;
	var DD1A_1 = false;
	var DD1A_2 = false;
	var DD1A_CMNT = false;

	var DD2A_0 = false;
	var DD2A_1 = false;
	var DD2A_2 = false;
	var DD2A_CMNT = false;

	var DD3A_0 = false;
	var DD3A_1 = false;
	var DD3A_2 = false;
	var DD3A_CMNT = false;

	var DD4A_0 = false;
	var DD4A_1 = false;
	var DD4A_2 = false;
	var DD4A_CMNT = false;

	var DD5A_0 = false;
	var DD5A_1 = false;
	var DD5A_2 = false;
	var DD5A_CMNT = false;

	var DD6A_0 = false;
	var DD6A_1 = false;
	var DD6A_2 = false;
	var DD6A_CMNT = false;

	var DD6A_0 = false;
	var DD6A_1 = false;
	var DD6A_2 = false;
	var DD6A_CMNT = false;

	var DD7A_0 = false;
	var DD7A_1 = false;
	var DD7A_2 = false;
	var DD7A_CMNT = false;

	var DD8A_0 = false;
	var DD8A_1 = false;
	var DD8A_2 = false;
	var DD8A_DESC = false;

	// DL
	var DL1A_0 = false;
	var DL1A_1 = false;
	var DL1A_2 = false;
	var DL1A_CMNT = false;

	var DL2A_0 = false;
	var DL2A_1 = false;
	var DL2A_2 = false;
	var DL2A_CMNT = false;

	var DL3A_0 = false;
	var DL3A_1 = false;
	var DL3A_2 = false;
	var DL3A_CMNT = false;

	var DL4A_0 = false;
	var DL4A_1 = false;
	var DL4A_2 = false;
	var DL4A_CMNT = false;

	var DL5A_0 = false;
	var DL5A_1 = false;
	var DL5A_2 = false;
	var DL5A_DESC = false;

	// EDSN
	var EDSN1A_0 = false;
	var EDSN1A_1 = false;
	var EDSN1A_2 = false;
	var EDSN1A_CMNT = false;

	var EDSN2A_0 = false;
	var EDSN2A_1 = false;
	var EDSN2A_2 = false;
	var EDSN2A_CMNT = false;

	var EDSN3A_0 = false;
	var EDSN3A_1 = false;
	var EDSN3A_2 = false;
	var EDSN3A_CMNT = false;

	var EDSN4A_0 = false;
	var EDSN4A_1 = false;
	var EDSN4A_2 = false;
	var EDSN4A_CMNT = false;

	var EDSN5A_0 = false;
	var EDSN5A_1 = false;
	var EDSN5A_2 = false;
	var EDSN5A_CMNT = false;

	var EDSN6A_0 = false;
	var EDSN6A_1 = false;
	var EDSN6A_2 = false;
	var EDSN6A_CMNT = false;

	var EDSN7A_0 = false;
	var EDSN7A_1 = false;
	var EDSN7A_2 = false;
	var EDSN7A_CMNT = false;

	var EDSN8A_0 = false;
	var EDSN8A_1 = false;
	var EDSN8A_2 = false;
	var EDSN8A_CMNT = false;

	var EDSN9A_0 = false;
	var EDSN9A_1 = false;
	var EDSN9A_2 = false;
	var EDSN9A_CMNT = false;

	var EDSN10A_0 = false;
	var EDSN10A_1 = false;
	var EDSN10A_2 = false;
	var EDSN10A_CMNT = false;

	var EDSN11A_0 = false;
	var EDSN11A_1 = false;
	var EDSN11A_2 = false;
	var EDSN11A_CMNT = false;

	var EDSN12A_0 = false;
	var EDSN12A_1 = false;
	var EDSN12A_2 = false;
	var EDSN12A_CMNT = false;

	var EDSN13A_0 = false;
	var EDSN13A_1 = false;
	var EDSN13A_2 = false;
	var EDSN13A_CMNT = false;

	var EDSN14A_0 = false;
	var EDSN14A_1 = false;
	var EDSN14A_2 = false;
	var EDSN14A_CMNT = false;

	var EDSN15A_0 = false;
	var EDSN15A_1 = false;
	var EDSN15A_2 = false;
	var EDSN15A_CMNT = false;

	var EDSN16A_0 = false;
	var EDSN16A_1 = false;
	var EDSN16A_2 = false;
	var EDSN16A_CMNT = false;

	var EDSN17A_0 = false;
	var EDSN17A_1 = false;
	var EDSN17A_2 = false;
	var EDSN17A_CMNT = false;

	var EDSN18A_0 = false;
	var EDSN18A_1 = false;
	var EDSN18A_2 = false;
	var EDSN18A_CMNT = false;

	var EDSN19A_0 = false;
	var EDSN19A_1 = false;
	var EDSN19A_2 = false;
	var EDSN19A_CMNT = false;

	var EDSN20A_0 = false;
	var EDSN20A_1 = false;
	var EDSN20A_2 = false;
	var EDSN1A_DESC = false;

	// FMM
	var FMM1A_0 = false;
	var FMM1A_1 = false;
	var FMM1A_2 = false;
	var FMM1A_CMNT = false;

	var FMM2A_0 = false;
	var FMM2A_1 = false;
	var FMM2A_2 = false;
	var FMM2A_CMNT = false;

	var FMM3A_0 = false;
	var FMM3A_1 = false;
	var FMM3A_2 = false;
	var FMM3A_CMNT = false;

	var FMM4A_0 = false;
	var FMM4A_1 = false;
	var FMM4A_2 = false;
	var FMM4A_CMNT = false;

	var FMM5A_0 = false;
	var FMM5A_1 = false;
	var FMM5A_2 = false;
	var FMM5A_DESC = false;

	// PC
	var PC1A_0 = false;
	var PC1A_1 = false;
	var PC1A_2 = false;
	var PC1A_CMNT = false;

	var PC2A_0 = false;
	var PC2A_1 = false;
	var PC2A_2 = false;
	var PC2A_CMNT = false;

	var PC3A_0 = false;
	var PC3A_1 = false;
	var PC3A_2 = false;
	var PC3A_CMNT = false;

	var PC4A_0 = false;
	var PC4A_1 = false;
	var PC4A_2 = false;
	var PC4A_CMNT = false;

	var PC5A_0 = false;
	var PC5A_1 = false;
	var PC5A_2 = false;
	var PC5A_CMNT = false;

	var PC6A_0 = false;
	var PC6A_1 = false;
	var PC6A_2 = false;
	var PC6A_CMNT = false;

	var PC7A_0 = false;
	var PC7A_1 = false;
	var PC7A_2 = false;
	var PC7A_CMNT = false;

	// S
	var S1A_0 = false;
	var S1A_1 = false;
	var S1A_2 = false;
	var S1A_CMNT = false;

	var S2A_0 = false;
	var S2A_1 = false;
	var S2A_2 = false;
	var S2A_CMNT = false;

	var S3A_0 = false;
	var S3A_1 = false;
	var S3A_2 = false;
	var S3A_CMNT = false;

	var S4A_0 = false;
	var S4A_1 = false;
	var S4A_2 = false;
	var S4A_CMNT = false;

	var S5A_0 = false;
	var S5A_1 = false;
	var S5A_2 = false;
	var S5A_CMNT = false;

	var S6A_0 = false;
	var S6A_1 = false;
	var S6A_2 = false;
	var S6A_CMNT = false;

	var S7A_0 = false;
	var S7A_1 = false;
	var S7A_2 = false;
	var S7A_CMNT = false;

	var S8A_0 = false;
	var S8A_1 = false;
	var S8A_2 = false;
	var S8A_CMNT = false;

	var S9A_0 = false;
	var S9A_1 = false;
	var S9A_2 = false;
	var S9A_CMNT = false;

	var S10A_0 = false;
	var S10A_1 = false;
	var S10A_2 = false;
	var S10A_CMNT = false;

	var S11A_0 = false;
	var S11A_1 = false;
	var S11A_2 = false;
	var S11A_CMNT = false;

	var S12A_0 = false;
	var S12A_1 = false;
	var S12A_2 = false;
	var S12A_CMNT = false;

	var S13A_0 = false;
	var S13A_1 = false;
	var S13A_2 = false;
	var S1A_DESC = false;

	// TB
	var TB1A_0 = false;
	var TB1A_1 = false;
	var TB1A_2 = false;
	var TB1A_CMNT = false;

	var TB2A_0 = false;
	var TB2A_1 = false;
	var TB2A_2 = false;
	var TB2A_CMNT = false;

	var TB3A_0 = false;
	var TB3A_1 = false;
	var TB3A_2 = false;
	var TB3A_DESC = false;

	// FMM1A
	// FMM1A[0]
	if ((document.dqtsForm.elements['fMM1A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['fMM1A[0]'].value))) {
		document.dqtsForm.elements['fMM1A[0]'].style.color = "red";
		document.dqtsForm.elements['fMM1A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		document.dqtsForm.elements['fMM1A[0]'].focus;
		FMM1A_0 = true;
	} else if ((document.dqtsForm.elements['fMM1A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['fMM1A[0]'].value))
			&& (document.dqtsForm.elements['fMM1A[0]'].value.length > 2)) {
		document.dqtsForm.elements['fMM1A[0]'].style.color = "red";
		document.dqtsForm.elements['fMM1A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		document.dqtsForm.elements['fMM1A[0]'].focus;
		FMM1A_0 = true;
	} else {
		document.dqtsForm.elements['fMM1A[0]'].style.color = "black";
		document.dqtsForm.elements['fMM1A[0]'].style.backgroundColor = "white";

	}

	// FMM1A[1]
	if ((document.dqtsForm.elements['fMM1A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['fMM1A[1]'].value))) {
		document.dqtsForm.elements['fMM1A[1]'].style.color = "red";
		document.dqtsForm.elements['fMM1A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		document.dqtsForm.elements['fMM1A[1]'].focus;
		FMM1A_1 = true;
	} else if ((document.dqtsForm.elements['fMM1A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['fMM1A[1]'].value))
			&& (document.dqtsForm.elements['fMM1A[1]'].value.length > 2)) {
		document.dqtsForm.elements['fMM1A[1]'].style.color = "red";
		document.dqtsForm.elements['fMM1A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		document.dqtsForm.elements['fMM1A[1]'].focus;
		FMM1A_1 = true;
	} else {
		document.dqtsForm.elements['fMM1A[1]'].style.color = "black";
		document.dqtsForm.elements['fMM1A[1]'].style.backgroundColor = "white";

	}

	// FMM1A[2]
	if ((document.dqtsForm.elements['fMM1A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['fMM1A[2]'].value))) {
		document.dqtsForm.elements['fMM1A[2]'].style.color = "red";
		document.dqtsForm.elements['fMM1A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		document.dqtsForm.elements['fMM1A[2]'].focus;
		FMM1A_2 = true;
	} else if ((document.dqtsForm.elements['fMM1A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['fMM1A[2]'].value))
			&& (document.dqtsForm.elements['fMM1A[2]'].value.length > 2)) {
		document.dqtsForm.elements['fMM1A[2]'].style.color = "red";
		document.dqtsForm.elements['fMM1A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		document.dqtsForm.elements['fMM1A[2]'].focus;
		FMM1A_2 = true;
	} else {
		document.dqtsForm.elements['fMM1A[2]'].style.color = "black";
		document.dqtsForm.elements['fMM1A[2]'].style.backgroundColor = "white";

	}

	// FMM1ACMNT
	if ((document.dqtsForm.elements['fMM1ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['fMM1ACMNT'].value))) {
		document.dqtsForm.elements['fMM1ACMNT'].style.color = "red";
		document.dqtsForm.elements['fMM1ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		document.dqtsForm.elements['fMM1ACMNT'].focus;
		FMM1A_CMNT = true;
	} else if ((document.dqtsForm.elements['fMM1ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['fMM1ACMNT'].value))
			&& (document.dqtsForm.elements['fMM1ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['fMM1ACMNT'].style.color = "red";
		document.dqtsForm.elements['fMM1ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		document.dqtsForm.elements['fMM1ACMNT'].focus;
		FMM1A_CMNT = true;
	} else {
		document.dqtsForm.elements['fMM1ACMNT'].style.color = "black";
		document.dqtsForm.elements['fMM1ACMNT'].style.backgroundColor = "white";

	}

	// FMM2A
	// FMM2A[0]
	if ((document.dqtsForm.elements['fMM2A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['fMM2A[0]'].value))) {
		document.dqtsForm.elements['fMM2A[0]'].style.color = "red";
		document.dqtsForm.elements['fMM2A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		FMM2A_0 = true;
	} else if ((document.dqtsForm.elements['fMM2A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['fMM2A[0]'].value))
			&& (document.dqtsForm.elements['fMM2A[0]'].value.length > 2)) {
		document.dqtsForm.elements['fMM2A[0]'].style.color = "red";
		document.dqtsForm.elements['fMM2A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		FMM2A_0 = true;
	} else {
		document.dqtsForm.elements['fMM2A[0]'].style.color = "black";
		document.dqtsForm.elements['fMM2A[0]'].style.backgroundColor = "white";

	}

	// FMM2A[1]
	if ((document.dqtsForm.elements['fMM2A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['fMM2A[1]'].value))) {
		document.dqtsForm.elements['fMM2A[1]'].style.color = "red";
		document.dqtsForm.elements['fMM2A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		FMM2A_1 = true;
	} else if ((document.dqtsForm.elements['fMM2A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['fMM2A[1]'].value))
			&& (document.dqtsForm.elements['fMM2A[1]'].value.length > 2)) {
		document.dqtsForm.elements['fMM2A[1]'].style.color = "red";
		document.dqtsForm.elements['fMM2A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		FMM2A_1 = true;
	} else {
		document.dqtsForm.elements['fMM2A[1]'].style.color = "black";
		document.dqtsForm.elements['fMM2A[1]'].style.backgroundColor = "white";

	}

	// FMM2A[2]
	if ((document.dqtsForm.elements['fMM2A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['fMM2A[2]'].value))) {
		document.dqtsForm.elements['fMM2A[2]'].style.color = "red";
		document.dqtsForm.elements['fMM2A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		FMM2A_2 = true;
	} else if ((document.dqtsForm.elements['fMM2A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['fMM2A[2]'].value))
			&& (document.dqtsForm.elements['fMM2A[2]'].value.length > 2)) {
		document.dqtsForm.elements['fMM2A[2]'].style.color = "red";
		document.dqtsForm.elements['fMM2A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		FMM2A_2 = true;
	} else {
		document.dqtsForm.elements['fMM2A[2]'].style.color = "black";
		document.dqtsForm.elements['fMM2A[2]'].style.backgroundColor = "white";

	}

	// FMM2ACMNT
	if ((document.dqtsForm.elements['fMM2ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['fMM2ACMNT'].value))) {
		document.dqtsForm.elements['fMM2ACMNT'].style.color = "red";
		document.dqtsForm.elements['fMM2ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		FMM2A_CMNT = true;
	} else if ((document.dqtsForm.elements['fMM2ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['fMM2ACMNT'].value))
			&& (document.dqtsForm.elements['fMM2ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['fMM2ACMNT'].style.color = "red";
		document.dqtsForm.elements['fMM2ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		FMM2A_CMNT = true;
	} else {
		document.dqtsForm.elements['fMM2ACMNT'].style.color = "black";
		document.dqtsForm.elements['fMM2ACMNT'].style.backgroundColor = "white";

	}

	// FMM3A
	// FMM3A[0]
	if ((document.dqtsForm.elements['fMM3A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['fMM3A[0]'].value))) {
		document.dqtsForm.elements['fMM3A[0]'].style.color = "red";
		document.dqtsForm.elements['fMM3A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		FMM3A_0 = true;
	} else if ((document.dqtsForm.elements['fMM3A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['fMM3A[0]'].value))
			&& (document.dqtsForm.elements['fMM3A[0]'].value.length > 2)) {
		document.dqtsForm.elements['fMM3A[0]'].style.color = "red";
		document.dqtsForm.elements['fMM3A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		FMM3A_0 = true;
	} else {
		document.dqtsForm.elements['fMM3A[0]'].style.color = "black";
		document.dqtsForm.elements['fMM3A[0]'].style.backgroundColor = "white";

	}

	// FMM3A[1]
	if ((document.dqtsForm.elements['fMM3A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['fMM3A[1]'].value))) {
		document.dqtsForm.elements['fMM3A[1]'].style.color = "red";
		document.dqtsForm.elements['fMM3A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		FMM3A_1 = true;
	} else if ((document.dqtsForm.elements['fMM3A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['fMM3A[1]'].value))
			&& (document.dqtsForm.elements['fMM3A[1]'].value.length > 2)) {
		document.dqtsForm.elements['fMM3A[1]'].style.color = "red";
		document.dqtsForm.elements['fMM3A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		FMM3A_1 = true;
	} else {
		document.dqtsForm.elements['fMM3A[1]'].style.color = "black";
		document.dqtsForm.elements['fMM3A[1]'].style.backgroundColor = "white";

	}

	// FMM3A[2]
	if ((document.dqtsForm.elements['fMM3A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['fMM3A[2]'].value))) {
		document.dqtsForm.elements['fMM3A[2]'].style.color = "red";
		document.dqtsForm.elements['fMM3A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		FMM3A_2 = true;
	} else if ((document.dqtsForm.elements['fMM3A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['fMM3A[2]'].value))
			&& (document.dqtsForm.elements['fMM3A[2]'].value.length > 2)) {
		document.dqtsForm.elements['fMM3A[2]'].style.color = "red";
		document.dqtsForm.elements['fMM3A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		FMM3A_2 = true;
	} else {
		document.dqtsForm.elements['fMM3A[2]'].style.color = "black";
		document.dqtsForm.elements['fMM3A[2]'].style.backgroundColor = "white";

	}

	// FMM3ACMNT
	if ((document.dqtsForm.elements['fMM3ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['fMM3ACMNT'].value))) {
		document.dqtsForm.elements['fMM3ACMNT'].style.color = "red";
		document.dqtsForm.elements['fMM3ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		FMM3A_CMNT = true;
	} else if ((document.dqtsForm.elements['fMM3ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['fMM3ACMNT'].value))
			&& (document.dqtsForm.elements['fMM3ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['fMM3ACMNT'].style.color = "red";
		document.dqtsForm.elements['fMM3ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		FMM3A_CMNT = true;
	} else {
		document.dqtsForm.elements['fMM3ACMNT'].style.color = "black";
		document.dqtsForm.elements['fMM3ACMNT'].style.backgroundColor = "white";

	}

	// FMM4A
	// FMM4A[0]
	if ((document.dqtsForm.elements['fMM4A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['fMM4A[0]'].value))) {
		document.dqtsForm.elements['fMM4A[0]'].style.color = "red";
		document.dqtsForm.elements['fMM4A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		FMM4A_0 = true;
	} else if ((document.dqtsForm.elements['fMM4A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['fMM4A[0]'].value))
			&& (document.dqtsForm.elements['fMM4A[0]'].value.length > 2)) {
		document.dqtsForm.elements['fMM4A[0]'].style.color = "red";
		document.dqtsForm.elements['fMM4A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		FMM4A_0 = true;
	} else {
		document.dqtsForm.elements['fMM4A[0]'].style.color = "black";
		document.dqtsForm.elements['fMM4A[0]'].style.backgroundColor = "white";

	}

	// FMM4A[1]
	if ((document.dqtsForm.elements['fMM4A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['fMM4A[1]'].value))) {
		document.dqtsForm.elements['fMM4A[1]'].style.color = "red";
		document.dqtsForm.elements['fMM4A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		FMM4A_1 = true;
	} else if ((document.dqtsForm.elements['fMM4A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['fMM4A[1]'].value))
			&& (document.dqtsForm.elements['fMM4A[1]'].value.length > 2)) {
		document.dqtsForm.elements['fMM4A[1]'].style.color = "red";
		document.dqtsForm.elements['fMM4A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		FMM4A_1 = true;
	} else {
		document.dqtsForm.elements['fMM4A[1]'].style.color = "black";
		document.dqtsForm.elements['fMM4A[1]'].style.backgroundColor = "white";

	}

	// FMM4A[2]
	if ((document.dqtsForm.elements['fMM4A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['fMM4A[2]'].value))) {
		document.dqtsForm.elements['fMM4A[2]'].style.color = "red";
		document.dqtsForm.elements['fMM4A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		FMM4A_2 = true;
	} else if ((document.dqtsForm.elements['fMM4A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['fMM4A[2]'].value))
			&& (document.dqtsForm.elements['fMM4A[2]'].value.length > 2)) {
		document.dqtsForm.elements['fMM4A[2]'].style.color = "red";
		document.dqtsForm.elements['fMM4A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		FMM4A_2 = true;
	} else {
		document.dqtsForm.elements['fMM4A[2]'].style.color = "black";
		document.dqtsForm.elements['fMM4A[2]'].style.backgroundColor = "white";

	}

	// FMM4ACMNT
	if ((document.dqtsForm.elements['fMM4ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['fMM4ACMNT'].value))) {
		document.dqtsForm.elements['fMM4ACMNT'].style.color = "red";
		document.dqtsForm.elements['fMM4ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		FMM4A_CMNT = true;
	} else if ((document.dqtsForm.elements['fMM4ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['fMM4ACMNT'].value))
			&& (document.dqtsForm.elements['fMM4ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['fMM4ACMNT'].style.color = "red";
		document.dqtsForm.elements['fMM4ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		FMM4A_CMNT = true;
	} else {
		document.dqtsForm.elements['fMM4ACMNT'].style.color = "black";
		document.dqtsForm.elements['fMM4ACMNT'].style.backgroundColor = "white";

	}

	// FMM5A
	// FMM5A[0]
	if ((document.dqtsForm.elements['fMM5A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['fMM5A[0]'].value))) {
		document.dqtsForm.elements['fMM5A[0]'].style.color = "red";
		document.dqtsForm.elements['fMM5A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		FMM5A_0 = true;
	} else if ((document.dqtsForm.elements['fMM5A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['fMM5A[0]'].value))
			&& (document.dqtsForm.elements['fMM5A[0]'].value.length > 2)) {
		document.dqtsForm.elements['fMM5A[0]'].style.color = "red";
		document.dqtsForm.elements['fMM5A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		FMM5A_0 = true;
	} else {
		document.dqtsForm.elements['fMM5A[0]'].style.color = "black";
		document.dqtsForm.elements['fMM5A[0]'].style.backgroundColor = "white";

	}

	// FMM5A[1]
	if ((document.dqtsForm.elements['fMM5A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['fMM5A[1]'].value))) {
		document.dqtsForm.elements['fMM5A[1]'].style.color = "red";
		document.dqtsForm.elements['fMM5A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		FMM5A_1 = true;
	} else if ((document.dqtsForm.elements['fMM5A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['fMM5A[1]'].value))
			&& (document.dqtsForm.elements['fMM5A[1]'].value.length > 2)) {
		document.dqtsForm.elements['fMM5A[1]'].style.color = "red";
		document.dqtsForm.elements['fMM5A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		FMM5A_1 = true;
	} else {
		document.dqtsForm.elements['fMM5A[1]'].style.color = "black";
		document.dqtsForm.elements['fMM5A[1]'].style.backgroundColor = "white";

	}

	// FMM5A[2]
	if ((document.dqtsForm.elements['fMM5A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['fMM5A[2]'].value))) {
		document.dqtsForm.elements['fMM5A[2]'].style.color = "red";
		document.dqtsForm.elements['fMM5A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		FMM5A_2 = true;
	} else if ((document.dqtsForm.elements['fMM5A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['fMM5A[2]'].value))
			&& (document.dqtsForm.elements['fMM5A[2]'].value.length > 2)) {
		document.dqtsForm.elements['fMM5A[2]'].style.color = "red";
		document.dqtsForm.elements['fMM5A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		FMM5A_2 = true;
	} else {
		document.dqtsForm.elements['fMM5A[2]'].style.color = "black";
		document.dqtsForm.elements['fMM5A[2]'].style.backgroundColor = "white";

	}

	// FMM5ADESC
	if ((document.dqtsForm.elements['fMM5ADESC'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['fMM5ADESC'].value))) {
		document.dqtsForm.elements['fMM5ADESC'].style.color = "red";
		document.dqtsForm.elements['fMM5ADESC'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		FMM5A_DESC = true;
	} else if ((document.dqtsForm.elements['fMM5ADESC'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['fMM5ADESC'].value))
			&& (document.dqtsForm.elements['fMM5ADESC'].value.length > 255)) {
		document.dqtsForm.elements['fMM5ADESC'].style.color = "red";
		document.dqtsForm.elements['fMM5ADESC'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		FMM5A_DESC = true;
	} else {
		document.dqtsForm.elements['fMM5ADESC'].style.color = "black";
		document.dqtsForm.elements['fMM5ADESC'].style.backgroundColor = "white";

	}

	// TB1A
	// TB1A[0]
	if ((document.dqtsForm.elements['tB1A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['tB1A[0]'].value))) {
		document.dqtsForm.elements['tB1A[0]'].style.color = "red";
		document.dqtsForm.elements['tB1A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		TB1A_0 = true;
	} else if ((document.dqtsForm.elements['tB1A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['tB1A[0]'].value))
			&& (document.dqtsForm.elements['tB1A[0]'].value.length > 2)) {
		document.dqtsForm.elements['tB1A[0]'].style.color = "red";
		document.dqtsForm.elements['tB1A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		TB1A_0 = true;
	} else {
		document.dqtsForm.elements['tB1A[0]'].style.color = "black";
		document.dqtsForm.elements['tB1A[0]'].style.backgroundColor = "white";

	}

	// TB1A[1]
	if ((document.dqtsForm.elements['tB1A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['tB1A[1]'].value))) {
		document.dqtsForm.elements['tB1A[1]'].style.color = "red";
		document.dqtsForm.elements['tB1A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		TB1A_1 = true;
	} else if ((document.dqtsForm.elements['tB1A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['tB1A[1]'].value))
			&& (document.dqtsForm.elements['tB1A[1]'].value.length > 2)) {
		document.dqtsForm.elements['tB1A[1]'].style.color = "red";
		document.dqtsForm.elements['tB1A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		TB1A_1 = true;
	} else {
		document.dqtsForm.elements['tB1A[1]'].style.color = "black";
		document.dqtsForm.elements['tB1A[1]'].style.backgroundColor = "white";

	}

	// TB1A[2]
	if ((document.dqtsForm.elements['tB1A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['tB1A[2]'].value))) {
		document.dqtsForm.elements['tB1A[2]'].style.color = "red";
		document.dqtsForm.elements['tB1A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		TB1A_2 = true;
	} else if ((document.dqtsForm.elements['tB1A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['tB1A[2]'].value))
			&& (document.dqtsForm.elements['tB1A[2]'].value.length > 2)) {
		document.dqtsForm.elements['tB1A[2]'].style.color = "red";
		document.dqtsForm.elements['tB1A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		TB1A_2 = true;
	} else {
		document.dqtsForm.elements['tB1A[2]'].style.color = "black";
		document.dqtsForm.elements['tB1A[2]'].style.backgroundColor = "white";

	}

	// TB1ACMNT
	if ((document.dqtsForm.elements['tB1ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['tB1ACMNT'].value))) {
		document.dqtsForm.elements['tB1ACMNT'].style.color = "red";
		document.dqtsForm.elements['tB1ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		TB1A_CMNT = true;
	} else if ((document.dqtsForm.elements['tB1ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['tB1ACMNT'].value))
			&& (document.dqtsForm.elements['tB1ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['tB1ACMNT'].style.color = "red";
		document.dqtsForm.elements['tB1ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		TB1A_CMNT = true;
	} else {
		document.dqtsForm.elements['tB1ACMNT'].style.color = "black";
		document.dqtsForm.elements['tB1ACMNT'].style.backgroundColor = "white";

	}

	// TB2A
	// TB2A[0]
	if ((document.dqtsForm.elements['tB2A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['tB2A[0]'].value))) {
		document.dqtsForm.elements['tB2A[0]'].style.color = "red";
		document.dqtsForm.elements['tB2A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		TB2A_0 = true;
	} else if ((document.dqtsForm.elements['tB2A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['tB2A[0]'].value))
			&& (document.dqtsForm.elements['tB2A[0]'].value.length > 2)) {
		document.dqtsForm.elements['tB2A[0]'].style.color = "red";
		document.dqtsForm.elements['tB2A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		TB2A_0 = true;
	} else {
		document.dqtsForm.elements['tB2A[0]'].style.color = "black";
		document.dqtsForm.elements['tB2A[0]'].style.backgroundColor = "white";

	}

	// TB2A[1]
	if ((document.dqtsForm.elements['tB2A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['tB2A[1]'].value))) {
		document.dqtsForm.elements['tB2A[1]'].style.color = "red";
		document.dqtsForm.elements['tB2A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		TB2A_1 = true;
	} else if ((document.dqtsForm.elements['tB2A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['tB2A[1]'].value))
			&& (document.dqtsForm.elements['tB2A[1]'].value.length > 2)) {
		document.dqtsForm.elements['tB2A[1]'].style.color = "red";
		document.dqtsForm.elements['tB2A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		TB2A_1 = true;
	} else {
		document.dqtsForm.elements['tB2A[1]'].style.color = "black";
		document.dqtsForm.elements['tB2A[1]'].style.backgroundColor = "white";

	}

	// TB2A[2]
	if ((document.dqtsForm.elements['tB2A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['tB2A[2]'].value))) {
		document.dqtsForm.elements['tB2A[2]'].style.color = "red";
		document.dqtsForm.elements['tB2A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		TB2A_2 = true;
	} else if ((document.dqtsForm.elements['tB2A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['tB2A[2]'].value))
			&& (document.dqtsForm.elements['tB2A[2]'].value.length > 2)) {
		document.dqtsForm.elements['tB2A[2]'].style.color = "red";
		document.dqtsForm.elements['tB2A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		TB2A_2 = true;
	} else {
		document.dqtsForm.elements['tB2A[2]'].style.color = "black";
		document.dqtsForm.elements['tB2A[2]'].style.backgroundColor = "white";

	}

	// TB2ACMNT
	if ((document.dqtsForm.elements['tB2ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['tB2ACMNT'].value))) {
		document.dqtsForm.elements['tB2ACMNT'].style.color = "red";
		document.dqtsForm.elements['tB2ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		TB2A_CMNT = true;
	} else if ((document.dqtsForm.elements['tB2ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['tB2ACMNT'].value))
			&& (document.dqtsForm.elements['tB2ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['tB2ACMNT'].style.color = "red";
		document.dqtsForm.elements['tB2ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		TB2A_CMNT = true;
	} else {
		document.dqtsForm.elements['tB2ACMNT'].style.color = "black";
		document.dqtsForm.elements['tB2ACMNT'].style.backgroundColor = "white";

	}

	// TB3A
	// TB3A[0]
	if ((document.dqtsForm.elements['tB3A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['tB3A[0]'].value))) {
		document.dqtsForm.elements['tB3A[0]'].style.color = "red";
		document.dqtsForm.elements['tB3A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		TB3A_0 = true;
	} else if ((document.dqtsForm.elements['tB3A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['tB3A[0]'].value))
			&& (document.dqtsForm.elements['tB3A[0]'].value.length > 2)) {
		document.dqtsForm.elements['tB3A[0]'].style.color = "red";
		document.dqtsForm.elements['tB3A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		TB3A_0 = true;
	} else {
		document.dqtsForm.elements['tB3A[0]'].style.color = "black";
		document.dqtsForm.elements['tB3A[0]'].style.backgroundColor = "white";

	}

	// TB3A[1]
	if ((document.dqtsForm.elements['tB3A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['tB3A[1]'].value))) {
		document.dqtsForm.elements['tB3A[1]'].style.color = "red";
		document.dqtsForm.elements['tB3A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		TB3A_1 = true;
	} else if ((document.dqtsForm.elements['tB3A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['tB3A[1]'].value))
			&& (document.dqtsForm.elements['tB3A[1]'].value.length > 2)) {
		document.dqtsForm.elements['tB3A[1]'].style.color = "red";
		document.dqtsForm.elements['tB3A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		TB3A_1 = true;
	} else {
		document.dqtsForm.elements['tB3A[1]'].style.color = "black";
		document.dqtsForm.elements['tB3A[1]'].style.backgroundColor = "white";

	}

	// TB3A[2]
	if ((document.dqtsForm.elements['tB3A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['tB3A[2]'].value))) {
		document.dqtsForm.elements['tB3A[2]'].style.color = "red";
		document.dqtsForm.elements['tB3A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		TB3A_2 = true;
	} else if ((document.dqtsForm.elements['tB3A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['tB3A[2]'].value))
			&& (document.dqtsForm.elements['tB3A[2]'].value.length > 2)) {
		document.dqtsForm.elements['tB3A[2]'].style.color = "red";
		document.dqtsForm.elements['tB3A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		TB3A_2 = true;
	} else {
		document.dqtsForm.elements['tB3A[2]'].style.color = "black";
		document.dqtsForm.elements['tB3A[2]'].style.backgroundColor = "white";

	}

	// TB3ADESC
	if ((document.dqtsForm.elements['tB3ADESC'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['tB3ADESC'].value))) {
		document.dqtsForm.elements['tB3ADESC'].style.color = "red";
		document.dqtsForm.elements['tB3ADESC'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		TB3A_DESC = true;
	} else if ((document.dqtsForm.elements['tB3ADESC'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['tB3ADESC'].value))
			&& (document.dqtsForm.elements['tB3ADESC'].value.length > 255)) {
		document.dqtsForm.elements['tB3ADESC'].style.color = "red";
		document.dqtsForm.elements['tB3ADESC'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		TB3A_DESC = true;
	} else {
		document.dqtsForm.elements['tB3ADESC'].style.color = "black";
		document.dqtsForm.elements['tB3ADESC'].style.backgroundColor = "white";

	}

	// S1A
	// S1A[0]
	if ((document.dqtsForm.elements['s1A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s1A[0]'].value))) {
		document.dqtsForm.elements['s1A[0]'].style.color = "red";
		document.dqtsForm.elements['s1A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		S1A_0 = true;
	} else if ((document.dqtsForm.elements['s1A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s1A[0]'].value))
			&& (document.dqtsForm.elements['s1A[0]'].value.length > 2)) {
		document.dqtsForm.elements['s1A[0]'].style.color = "red";
		document.dqtsForm.elements['s1A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		S1A_0 = true;
	} else {
		document.dqtsForm.elements['s1A[0]'].style.color = "black";
		document.dqtsForm.elements['s1A[0]'].style.backgroundColor = "white";

	}

	// S1A[1]
	if ((document.dqtsForm.elements['s1A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s1A[1]'].value))) {
		document.dqtsForm.elements['s1A[1]'].style.color = "red";
		document.dqtsForm.elements['s1A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		S1A_1 = true;
	} else if ((document.dqtsForm.elements['s1A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s1A[1]'].value))
			&& (document.dqtsForm.elements['s1A[1]'].value.length > 2)) {
		document.dqtsForm.elements['s1A[1]'].style.color = "red";
		document.dqtsForm.elements['s1A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		S1A_1 = true;
	} else {
		document.dqtsForm.elements['s1A[1]'].style.color = "black";
		document.dqtsForm.elements['s1A[1]'].style.backgroundColor = "white";

	}

	// S1A[2]
	if ((document.dqtsForm.elements['s1A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s1A[2]'].value))) {
		document.dqtsForm.elements['s1A[2]'].style.color = "red";
		document.dqtsForm.elements['s1A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		S1A_2 = true;
	} else if ((document.dqtsForm.elements['s1A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s1A[2]'].value))
			&& (document.dqtsForm.elements['s1A[2]'].value.length > 2)) {
		document.dqtsForm.elements['s1A[2]'].style.color = "red";
		document.dqtsForm.elements['s1A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		S1A_2 = true;
	} else {
		document.dqtsForm.elements['s1A[2]'].style.color = "black";
		document.dqtsForm.elements['s1A[2]'].style.backgroundColor = "white";

	}

	// S1ACMNT
	if ((document.dqtsForm.elements['s1ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['s1ACMNT'].value))) {
		document.dqtsForm.elements['s1ACMNT'].style.color = "red";
		document.dqtsForm.elements['s1ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		S1A_CMNT = true;
	} else if ((document.dqtsForm.elements['s1ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['s1ACMNT'].value))
			&& (document.dqtsForm.elements['s1ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['s1ACMNT'].style.color = "red";
		document.dqtsForm.elements['s1ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		S1A_CMNT = true;
	} else {
		document.dqtsForm.elements['s1ACMNT'].style.color = "black";
		document.dqtsForm.elements['s1ACMNT'].style.backgroundColor = "white";

	}

	// S2A
	// S2A[0]
	if ((document.dqtsForm.elements['s2A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s2A[0]'].value))) {
		document.dqtsForm.elements['s2A[0]'].style.color = "red";
		document.dqtsForm.elements['s2A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		S2A_0 = true;
	} else if ((document.dqtsForm.elements['s2A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s2A[0]'].value))
			&& (document.dqtsForm.elements['s2A[0]'].value.length > 2)) {
		document.dqtsForm.elements['s2A[0]'].style.color = "red";
		document.dqtsForm.elements['s2A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		S2A_0 = true;
	} else {
		document.dqtsForm.elements['s2A[0]'].style.color = "black";
		document.dqtsForm.elements['s2A[0]'].style.backgroundColor = "white";

	}

	// S2A[1]
	if ((document.dqtsForm.elements['s2A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s2A[1]'].value))) {
		document.dqtsForm.elements['s2A[1]'].style.color = "red";
		document.dqtsForm.elements['s2A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		S2A_1 = true;
	} else if ((document.dqtsForm.elements['s2A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s2A[1]'].value))
			&& (document.dqtsForm.elements['s2A[1]'].value.length > 2)) {
		document.dqtsForm.elements['s2A[1]'].style.color = "red";
		document.dqtsForm.elements['s2A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		S2A_1 = true;
	} else {
		document.dqtsForm.elements['s2A[1]'].style.color = "black";
		document.dqtsForm.elements['s2A[1]'].style.backgroundColor = "white";

	}

	// S2A[2]
	if ((document.dqtsForm.elements['s2A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s2A[2]'].value))) {
		document.dqtsForm.elements['s2A[2]'].style.color = "red";
		document.dqtsForm.elements['s2A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		S2A_2 = true;
	} else if ((document.dqtsForm.elements['s2A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s2A[2]'].value))
			&& (document.dqtsForm.elements['s2A[2]'].value.length > 2)) {
		document.dqtsForm.elements['s2A[2]'].style.color = "red";
		document.dqtsForm.elements['s2A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		S2A_2 = true;
	} else {
		document.dqtsForm.elements['s2A[2]'].style.color = "black";
		document.dqtsForm.elements['s2A[2]'].style.backgroundColor = "white";

	}

	// S2ACMNT
	if ((document.dqtsForm.elements['s2ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['s2ACMNT'].value))) {
		document.dqtsForm.elements['s2ACMNT'].style.color = "red";
		document.dqtsForm.elements['s2ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		S2A_CMNT = true;
	} else if ((document.dqtsForm.elements['s2ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['s2ACMNT'].value))
			&& (document.dqtsForm.elements['s2ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['s2ACMNT'].style.color = "red";
		document.dqtsForm.elements['s2ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		S2A_CMNT = true;
	} else {
		document.dqtsForm.elements['s2ACMNT'].style.color = "black";
		document.dqtsForm.elements['s2ACMNT'].style.backgroundColor = "white";

	}

	// S3A
	// S3A[0]
	if ((document.dqtsForm.elements['s3A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s3A[0]'].value))) {
		document.dqtsForm.elements['s3A[0]'].style.color = "red";
		document.dqtsForm.elements['s3A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		S3A_0 = true;
	} else if ((document.dqtsForm.elements['s3A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s3A[0]'].value))
			&& (document.dqtsForm.elements['s3A[0]'].value.length > 2)) {
		document.dqtsForm.elements['s3A[0]'].style.color = "red";
		document.dqtsForm.elements['s3A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		S3A_0 = true;
	} else {
		document.dqtsForm.elements['s3A[0]'].style.color = "black";
		document.dqtsForm.elements['s3A[0]'].style.backgroundColor = "white";

	}

	// S3A[1]
	if ((document.dqtsForm.elements['s3A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s3A[1]'].value))) {
		document.dqtsForm.elements['s3A[1]'].style.color = "red";
		document.dqtsForm.elements['s3A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		S3A_1 = true;
	} else if ((document.dqtsForm.elements['s3A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s3A[1]'].value))
			&& (document.dqtsForm.elements['s3A[1]'].value.length > 2)) {
		document.dqtsForm.elements['s3A[1]'].style.color = "red";
		document.dqtsForm.elements['s3A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		S3A_1 = true;
	} else {
		document.dqtsForm.elements['s3A[1]'].style.color = "black";
		document.dqtsForm.elements['s3A[1]'].style.backgroundColor = "white";

	}

	// S3A[2]
	if ((document.dqtsForm.elements['s3A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s3A[2]'].value))) {
		document.dqtsForm.elements['s3A[2]'].style.color = "red";
		document.dqtsForm.elements['s3A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		S3A_2 = true;
	} else if ((document.dqtsForm.elements['s3A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s3A[2]'].value))
			&& (document.dqtsForm.elements['s3A[2]'].value.length > 2)) {
		document.dqtsForm.elements['s3A[2]'].style.color = "red";
		document.dqtsForm.elements['s3A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		S3A_2 = true;
	} else {
		document.dqtsForm.elements['s3A[2]'].style.color = "black";
		document.dqtsForm.elements['s3A[2]'].style.backgroundColor = "white";

	}

	// S3ACMNT
	if ((document.dqtsForm.elements['s3ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['s3ACMNT'].value))) {
		document.dqtsForm.elements['s3ACMNT'].style.color = "red";
		document.dqtsForm.elements['s3ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		S3A_CMNT = true;
	} else if ((document.dqtsForm.elements['s3ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['s3ACMNT'].value))
			&& (document.dqtsForm.elements['s3ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['s3ACMNT'].style.color = "red";
		document.dqtsForm.elements['s3ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		S3A_CMNT = true;
	} else {
		document.dqtsForm.elements['s3ACMNT'].style.color = "black";
		document.dqtsForm.elements['s3ACMNT'].style.backgroundColor = "white";

	}

	// S4A
	// S4A[0]
	if ((document.dqtsForm.elements['s4A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s4A[0]'].value))) {
		document.dqtsForm.elements['s4A[0]'].style.color = "red";
		document.dqtsForm.elements['s4A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		S4A_0 = true;
	} else if ((document.dqtsForm.elements['s4A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s4A[0]'].value))
			&& (document.dqtsForm.elements['s4A[0]'].value.length > 2)) {
		document.dqtsForm.elements['s4A[0]'].style.color = "red";
		document.dqtsForm.elements['s4A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		S4A_0 = true;
	} else {
		document.dqtsForm.elements['s4A[0]'].style.color = "black";
		document.dqtsForm.elements['s4A[0]'].style.backgroundColor = "white";

	}

	// S4A[1]
	if ((document.dqtsForm.elements['s4A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s4A[1]'].value))) {
		document.dqtsForm.elements['s4A[1]'].style.color = "red";
		document.dqtsForm.elements['s4A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		S4A_1 = true;
	} else if ((document.dqtsForm.elements['s4A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s4A[1]'].value))
			&& (document.dqtsForm.elements['s4A[1]'].value.length > 2)) {
		document.dqtsForm.elements['s4A[1]'].style.color = "red";
		document.dqtsForm.elements['s4A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		S4A_1 = true;
	} else {
		document.dqtsForm.elements['s4A[1]'].style.color = "black";
		document.dqtsForm.elements['s4A[1]'].style.backgroundColor = "white";

	}

	// S4A[2]
	if ((document.dqtsForm.elements['s4A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s4A[2]'].value))) {
		document.dqtsForm.elements['s4A[2]'].style.color = "red";
		document.dqtsForm.elements['s4A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		S4A_2 = true;
	} else if ((document.dqtsForm.elements['s4A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s4A[2]'].value))
			&& (document.dqtsForm.elements['s4A[2]'].value.length > 2)) {
		document.dqtsForm.elements['s4A[2]'].style.color = "red";
		document.dqtsForm.elements['s4A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		S4A_2 = true;
	} else {
		document.dqtsForm.elements['s4A[2]'].style.color = "black";
		document.dqtsForm.elements['s4A[2]'].style.backgroundColor = "white";

	}

	// S4ACMNT
	if ((document.dqtsForm.elements['s4ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['s4ACMNT'].value))) {
		document.dqtsForm.elements['s4ACMNT'].style.color = "red";
		document.dqtsForm.elements['s4ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		S4A_CMNT = true;
	} else if ((document.dqtsForm.elements['s4ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['s4ACMNT'].value))
			&& (document.dqtsForm.elements['s4ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['s4ACMNT'].style.color = "red";
		document.dqtsForm.elements['s4ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		S4A_CMNT = true;
	} else {
		document.dqtsForm.elements['s4ACMNT'].style.color = "black";
		document.dqtsForm.elements['s4ACMNT'].style.backgroundColor = "white";

	}

	// S5A
	// S5A[0]
	if ((document.dqtsForm.elements['s5A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s5A[0]'].value))) {
		document.dqtsForm.elements['s5A[0]'].style.color = "red";
		document.dqtsForm.elements['s5A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		S5A_0 = true;
	} else if ((document.dqtsForm.elements['s5A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s5A[0]'].value))
			&& (document.dqtsForm.elements['s5A[0]'].value.length > 2)) {
		document.dqtsForm.elements['s5A[0]'].style.color = "red";
		document.dqtsForm.elements['s5A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		S5A_0 = true;
	} else {
		document.dqtsForm.elements['s5A[0]'].style.color = "black";
		document.dqtsForm.elements['s5A[0]'].style.backgroundColor = "white";

	}

	// S5A[1]
	if ((document.dqtsForm.elements['s5A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s5A[1]'].value))) {
		document.dqtsForm.elements['s5A[1]'].style.color = "red";
		document.dqtsForm.elements['s5A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		S5A_1 = true;
	} else if ((document.dqtsForm.elements['s5A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s5A[1]'].value))
			&& (document.dqtsForm.elements['s5A[1]'].value.length > 2)) {
		document.dqtsForm.elements['s5A[1]'].style.color = "red";
		document.dqtsForm.elements['s5A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		S5A_1 = true;
	} else {
		document.dqtsForm.elements['s5A[1]'].style.color = "black";
		document.dqtsForm.elements['s5A[1]'].style.backgroundColor = "white";

	}

	// S5A[2]
	if ((document.dqtsForm.elements['s5A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s5A[2]'].value))) {
		document.dqtsForm.elements['s5A[2]'].style.color = "red";
		document.dqtsForm.elements['s5A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		S5A_2 = true;
	} else if ((document.dqtsForm.elements['s5A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s5A[2]'].value))
			&& (document.dqtsForm.elements['s5A[2]'].value.length > 2)) {
		document.dqtsForm.elements['s5A[2]'].style.color = "red";
		document.dqtsForm.elements['s5A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		S5A_2 = true;
	} else {
		document.dqtsForm.elements['s5A[2]'].style.color = "black";
		document.dqtsForm.elements['s5A[2]'].style.backgroundColor = "white";

	}

	// S5ACMNT
	if ((document.dqtsForm.elements['s5ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['s5ACMNT'].value))) {
		document.dqtsForm.elements['s5ACMNT'].style.color = "red";
		document.dqtsForm.elements['s5ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		S5A_CMNT = true;
	} else if ((document.dqtsForm.elements['s5ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['s5ACMNT'].value))
			&& (document.dqtsForm.elements['s5ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['s5ACMNT'].style.color = "red";
		document.dqtsForm.elements['s5ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		S5A_CMNT = true;
	} else {
		document.dqtsForm.elements['s5ACMNT'].style.color = "black";
		document.dqtsForm.elements['s5ACMNT'].style.backgroundColor = "white";

	}

	// S6A
	// S6A[0]
	if ((document.dqtsForm.elements['s6A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s6A[0]'].value))) {
		document.dqtsForm.elements['s6A[0]'].style.color = "red";
		document.dqtsForm.elements['s6A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		S6A_0 = true;
	} else if ((document.dqtsForm.elements['s6A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s6A[0]'].value))
			&& (document.dqtsForm.elements['s6A[0]'].value.length > 2)) {
		document.dqtsForm.elements['s6A[0]'].style.color = "red";
		document.dqtsForm.elements['s6A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		S6A_0 = true;
	} else {
		document.dqtsForm.elements['s6A[0]'].style.color = "black";
		document.dqtsForm.elements['s6A[0]'].style.backgroundColor = "white";

	}

	// S6A[1]
	if ((document.dqtsForm.elements['s6A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s6A[1]'].value))) {
		document.dqtsForm.elements['s6A[1]'].style.color = "red";
		document.dqtsForm.elements['s6A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		S6A_1 = true;
	} else if ((document.dqtsForm.elements['s6A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s6A[1]'].value))
			&& (document.dqtsForm.elements['s6A[1]'].value.length > 2)) {
		document.dqtsForm.elements['s6A[1]'].style.color = "red";
		document.dqtsForm.elements['s6A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		S6A_1 = true;
	} else {
		document.dqtsForm.elements['s6A[1]'].style.color = "black";
		document.dqtsForm.elements['s6A[1]'].style.backgroundColor = "white";

	}

	// S6A[2]
	if ((document.dqtsForm.elements['s6A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s6A[2]'].value))) {
		document.dqtsForm.elements['s6A[2]'].style.color = "red";
		document.dqtsForm.elements['s6A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		S6A_2 = true;
	} else if ((document.dqtsForm.elements['s6A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s6A[2]'].value))
			&& (document.dqtsForm.elements['s6A[2]'].value.length > 2)) {
		document.dqtsForm.elements['s6A[2]'].style.color = "red";
		document.dqtsForm.elements['s6A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		S6A_2 = true;
	} else {
		document.dqtsForm.elements['s6A[2]'].style.color = "black";
		document.dqtsForm.elements['s6A[2]'].style.backgroundColor = "white";

	}

	// S6ACMNT
	if ((document.dqtsForm.elements['s6ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['s6ACMNT'].value))) {
		document.dqtsForm.elements['s6ACMNT'].style.color = "red";
		document.dqtsForm.elements['s6ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		S6A_CMNT = true;
	} else if ((document.dqtsForm.elements['s6ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['s6ACMNT'].value))
			&& (document.dqtsForm.elements['s6ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['s6ACMNT'].style.color = "red";
		document.dqtsForm.elements['s6ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		S6A_CMNT = true;
	} else {
		document.dqtsForm.elements['s6ACMNT'].style.color = "black";
		document.dqtsForm.elements['s6ACMNT'].style.backgroundColor = "white";

	}

	// S7A
	// S7A[0]
	if ((document.dqtsForm.elements['s7A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s7A[0]'].value))) {
		document.dqtsForm.elements['s7A[0]'].style.color = "red";
		document.dqtsForm.elements['s7A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		S7A_0 = true;
	} else if ((document.dqtsForm.elements['s7A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s7A[0]'].value))
			&& (document.dqtsForm.elements['s7A[0]'].value.length > 2)) {
		document.dqtsForm.elements['s7A[0]'].style.color = "red";
		document.dqtsForm.elements['s7A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		S7A_0 = true;
	} else {
		document.dqtsForm.elements['s7A[0]'].style.color = "black";
		document.dqtsForm.elements['s7A[0]'].style.backgroundColor = "white";

	}

	// S7A[1]
	if ((document.dqtsForm.elements['s7A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s7A[1]'].value))) {
		document.dqtsForm.elements['s7A[1]'].style.color = "red";
		document.dqtsForm.elements['s7A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		S7A_1 = true;
	} else if ((document.dqtsForm.elements['s7A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s7A[1]'].value))
			&& (document.dqtsForm.elements['s7A[1]'].value.length > 2)) {
		document.dqtsForm.elements['s7A[1]'].style.color = "red";
		document.dqtsForm.elements['s7A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		S7A_1 = true;
	} else {
		document.dqtsForm.elements['s7A[1]'].style.color = "black";
		document.dqtsForm.elements['s7A[1]'].style.backgroundColor = "white";

	}

	// S7A[2]
	if ((document.dqtsForm.elements['s7A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s7A[2]'].value))) {
		document.dqtsForm.elements['s7A[2]'].style.color = "red";
		document.dqtsForm.elements['s7A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		S7A_2 = true;
	} else if ((document.dqtsForm.elements['s7A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s7A[2]'].value))
			&& (document.dqtsForm.elements['s7A[2]'].value.length > 2)) {
		document.dqtsForm.elements['s7A[2]'].style.color = "red";
		document.dqtsForm.elements['s7A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		S7A_2 = true;
	} else {
		document.dqtsForm.elements['s7A[2]'].style.color = "black";
		document.dqtsForm.elements['s7A[2]'].style.backgroundColor = "white";

	}

	// S7ACMNT
	if ((document.dqtsForm.elements['s7ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['s7ACMNT'].value))) {
		document.dqtsForm.elements['s7ACMNT'].style.color = "red";
		document.dqtsForm.elements['s7ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		S7A_CMNT = true;
	} else if ((document.dqtsForm.elements['s7ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['s7ACMNT'].value))
			&& (document.dqtsForm.elements['s7ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['s7ACMNT'].style.color = "red";
		document.dqtsForm.elements['s7ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		S7A_CMNT = true;
	} else {
		document.dqtsForm.elements['s7ACMNT'].style.color = "black";
		document.dqtsForm.elements['s7ACMNT'].style.backgroundColor = "white";

	}

	// S8A
	// S8A[0]
	if ((document.dqtsForm.elements['s8A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s8A[0]'].value))) {
		document.dqtsForm.elements['s8A[0]'].style.color = "red";
		document.dqtsForm.elements['s8A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		S8A_0 = true;
	} else if ((document.dqtsForm.elements['s8A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s8A[0]'].value))
			&& (document.dqtsForm.elements['s8A[0]'].value.length > 2)) {
		document.dqtsForm.elements['s8A[0]'].style.color = "red";
		document.dqtsForm.elements['s8A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		S8A_0 = true;
	} else {
		document.dqtsForm.elements['s8A[0]'].style.color = "black";
		document.dqtsForm.elements['s8A[0]'].style.backgroundColor = "white";

	}

	// S8A[1]
	if ((document.dqtsForm.elements['s8A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s8A[1]'].value))) {
		document.dqtsForm.elements['s8A[1]'].style.color = "red";
		document.dqtsForm.elements['s8A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		S8A_1 = true;
	} else if ((document.dqtsForm.elements['s8A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s8A[1]'].value))
			&& (document.dqtsForm.elements['s8A[1]'].value.length > 2)) {
		document.dqtsForm.elements['s8A[1]'].style.color = "red";
		document.dqtsForm.elements['s8A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		S8A_1 = true;
	} else {
		document.dqtsForm.elements['s8A[1]'].style.color = "black";
		document.dqtsForm.elements['s8A[1]'].style.backgroundColor = "white";

	}

	// S8A[2]
	if ((document.dqtsForm.elements['s8A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s8A[2]'].value))) {
		document.dqtsForm.elements['s8A[2]'].style.color = "red";
		document.dqtsForm.elements['s8A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		S8A_2 = true;
	} else if ((document.dqtsForm.elements['s8A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s8A[2]'].value))
			&& (document.dqtsForm.elements['s8A[2]'].value.length > 2)) {
		document.dqtsForm.elements['s8A[2]'].style.color = "red";
		document.dqtsForm.elements['s8A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		S8A_2 = true;
	} else {
		document.dqtsForm.elements['s8A[2]'].style.color = "black";
		document.dqtsForm.elements['s8A[2]'].style.backgroundColor = "white";

	}

	// S8ACMNT
	if ((document.dqtsForm.elements['s8ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['s8ACMNT'].value))) {
		document.dqtsForm.elements['s8ACMNT'].style.color = "red";
		document.dqtsForm.elements['s8ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		S8A_CMNT = true;
	} else if ((document.dqtsForm.elements['s8ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['s8ACMNT'].value))
			&& (document.dqtsForm.elements['s8ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['s8ACMNT'].style.color = "red";
		document.dqtsForm.elements['s8ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		S8A_CMNT = true;
	} else {
		document.dqtsForm.elements['s8ACMNT'].style.color = "black";
		document.dqtsForm.elements['s8ACMNT'].style.backgroundColor = "white";

	}

	// S9A
	// S9A[0]
	if ((document.dqtsForm.elements['s9A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s9A[0]'].value))) {
		document.dqtsForm.elements['s9A[0]'].style.color = "red";
		document.dqtsForm.elements['s9A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		S9A_0 = true;
	} else if ((document.dqtsForm.elements['s9A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s9A[0]'].value))
			&& (document.dqtsForm.elements['s9A[0]'].value.length > 2)) {
		document.dqtsForm.elements['s9A[0]'].style.color = "red";
		document.dqtsForm.elements['s9A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		S9A_0 = true;
	} else {
		document.dqtsForm.elements['s9A[0]'].style.color = "black";
		document.dqtsForm.elements['s9A[0]'].style.backgroundColor = "white";

	}

	// S9A[1]
	if ((document.dqtsForm.elements['s9A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s9A[1]'].value))) {
		document.dqtsForm.elements['s9A[1]'].style.color = "red";
		document.dqtsForm.elements['s9A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		S9A_1 = true;
	} else if ((document.dqtsForm.elements['s9A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s9A[1]'].value))
			&& (document.dqtsForm.elements['s9A[1]'].value.length > 2)) {
		document.dqtsForm.elements['s9A[1]'].style.color = "red";
		document.dqtsForm.elements['s9A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		S9A_1 = true;
	} else {
		document.dqtsForm.elements['s9A[1]'].style.color = "black";
		document.dqtsForm.elements['s9A[1]'].style.backgroundColor = "white";

	}

	// S9A[2]
	if ((document.dqtsForm.elements['s9A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s9A[2]'].value))) {
		document.dqtsForm.elements['s9A[2]'].style.color = "red";
		document.dqtsForm.elements['s9A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		S9A_2 = true;
	} else if ((document.dqtsForm.elements['s9A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s9A[2]'].value))
			&& (document.dqtsForm.elements['s9A[2]'].value.length > 2)) {
		document.dqtsForm.elements['s9A[2]'].style.color = "red";
		document.dqtsForm.elements['s9A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		S9A_2 = true;
	} else {
		document.dqtsForm.elements['s9A[2]'].style.color = "black";
		document.dqtsForm.elements['s9A[2]'].style.backgroundColor = "white";

	}

	// S9ACMNT
	if ((document.dqtsForm.elements['s9ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['s9ACMNT'].value))) {
		document.dqtsForm.elements['s9ACMNT'].style.color = "red";
		document.dqtsForm.elements['s9ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		S9A_CMNT = true;
	} else if ((document.dqtsForm.elements['s9ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['s9ACMNT'].value))
			&& (document.dqtsForm.elements['s9ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['s9ACMNT'].style.color = "red";
		document.dqtsForm.elements['s9ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		S9A_CMNT = true;
	} else {
		document.dqtsForm.elements['s9ACMNT'].style.color = "black";
		document.dqtsForm.elements['s9ACMNT'].style.backgroundColor = "white";

	}

	// S10A
	// S10A[0]
	if ((document.dqtsForm.elements['s10A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s10A[0]'].value))) {
		document.dqtsForm.elements['s10A[0]'].style.color = "red";
		document.dqtsForm.elements['s10A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		S10A_0 = true;
	} else if ((document.dqtsForm.elements['s10A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s10A[0]'].value))
			&& (document.dqtsForm.elements['s10A[0]'].value.length > 2)) {
		document.dqtsForm.elements['s10A[0]'].style.color = "red";
		document.dqtsForm.elements['s10A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		S10A_0 = true;
	} else {
		document.dqtsForm.elements['s10A[0]'].style.color = "black";
		document.dqtsForm.elements['s10A[0]'].style.backgroundColor = "white";

	}

	// S10A[1]
	if ((document.dqtsForm.elements['s10A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s10A[1]'].value))) {
		document.dqtsForm.elements['s10A[1]'].style.color = "red";
		document.dqtsForm.elements['s10A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		S10A_1 = true;
	} else if ((document.dqtsForm.elements['s10A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s10A[1]'].value))
			&& (document.dqtsForm.elements['s10A[1]'].value.length > 2)) {
		document.dqtsForm.elements['s10A[1]'].style.color = "red";
		document.dqtsForm.elements['s10A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		S10A_1 = true;
	} else {
		document.dqtsForm.elements['s10A[1]'].style.color = "black";
		document.dqtsForm.elements['s10A[1]'].style.backgroundColor = "white";

	}

	// S10A[2]
	if ((document.dqtsForm.elements['s10A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s10A[2]'].value))) {
		document.dqtsForm.elements['s10A[2]'].style.color = "red";
		document.dqtsForm.elements['s10A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		S10A_2 = true;
	} else if ((document.dqtsForm.elements['s10A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s10A[2]'].value))
			&& (document.dqtsForm.elements['s10A[2]'].value.length > 2)) {
		document.dqtsForm.elements['s10A[2]'].style.color = "red";
		document.dqtsForm.elements['s10A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		S10A_2 = true;
	} else {
		document.dqtsForm.elements['s10A[2]'].style.color = "black";
		document.dqtsForm.elements['s10A[2]'].style.backgroundColor = "white";

	}

	// S10ACMNT
	if ((document.dqtsForm.elements['s10ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['s10ACMNT'].value))) {
		document.dqtsForm.elements['s10ACMNT'].style.color = "red";
		document.dqtsForm.elements['s10ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		S10A_CMNT = true;
	} else if ((document.dqtsForm.elements['s10ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['s10ACMNT'].value))
			&& (document.dqtsForm.elements['s10ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['s10ACMNT'].style.color = "red";
		document.dqtsForm.elements['s10ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		S10A_CMNT = true;
	} else {
		document.dqtsForm.elements['s10ACMNT'].style.color = "black";
		document.dqtsForm.elements['s10ACMNT'].style.backgroundColor = "white";

	}

	// S11A
	// S11A[0]
	if ((document.dqtsForm.elements['s11A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s11A[0]'].value))) {
		document.dqtsForm.elements['s11A[0]'].style.color = "red";
		document.dqtsForm.elements['s11A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		S11A_0 = true;
	} else if ((document.dqtsForm.elements['s11A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s11A[0]'].value))
			&& (document.dqtsForm.elements['s11A[0]'].value.length > 2)) {
		document.dqtsForm.elements['s11A[0]'].style.color = "red";
		document.dqtsForm.elements['s11A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		S11A_0 = true;
	} else {
		document.dqtsForm.elements['s11A[0]'].style.color = "black";
		document.dqtsForm.elements['s11A[0]'].style.backgroundColor = "white";

	}

	// S11A[1]
	if ((document.dqtsForm.elements['s11A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s11A[1]'].value))) {
		document.dqtsForm.elements['s11A[1]'].style.color = "red";
		document.dqtsForm.elements['s11A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		S11A_1 = true;
	} else if ((document.dqtsForm.elements['s11A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s11A[1]'].value))
			&& (document.dqtsForm.elements['s11A[1]'].value.length > 2)) {
		document.dqtsForm.elements['s11A[1]'].style.color = "red";
		document.dqtsForm.elements['s11A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		S11A_1 = true;
	} else {
		document.dqtsForm.elements['s11A[1]'].style.color = "black";
		document.dqtsForm.elements['s11A[1]'].style.backgroundColor = "white";

	}

	// S11A[2]
	if ((document.dqtsForm.elements['s11A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s11A[2]'].value))) {
		document.dqtsForm.elements['s11A[2]'].style.color = "red";
		document.dqtsForm.elements['s11A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		S11A_2 = true;
	} else if ((document.dqtsForm.elements['s11A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s11A[2]'].value))
			&& (document.dqtsForm.elements['s11A[2]'].value.length > 2)) {
		document.dqtsForm.elements['s11A[2]'].style.color = "red";
		document.dqtsForm.elements['s11A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		S11A_2 = true;
	} else {
		document.dqtsForm.elements['s11A[2]'].style.color = "black";
		document.dqtsForm.elements['s11A[2]'].style.backgroundColor = "white";

	}

	// S11ACMNT
	if ((document.dqtsForm.elements['s11ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['s11ACMNT'].value))) {
		document.dqtsForm.elements['s11ACMNT'].style.color = "red";
		document.dqtsForm.elements['s11ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		S11A_CMNT = true;
	} else if ((document.dqtsForm.elements['s11ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['s11ACMNT'].value))
			&& (document.dqtsForm.elements['s11ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['s11ACMNT'].style.color = "red";
		document.dqtsForm.elements['s11ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		S11A_CMNT = true;
	} else {
		document.dqtsForm.elements['s11ACMNT'].style.color = "black";
		document.dqtsForm.elements['s11ACMNT'].style.backgroundColor = "white";

	}

	// S12A
	// S12A[0]
	if ((document.dqtsForm.elements['s12A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s12A[0]'].value))) {
		document.dqtsForm.elements['s12A[0]'].style.color = "red";
		document.dqtsForm.elements['s12A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		S12A_0 = true;
	} else if ((document.dqtsForm.elements['s12A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s12A[0]'].value))
			&& (document.dqtsForm.elements['s12A[0]'].value.length > 2)) {
		document.dqtsForm.elements['s12A[0]'].style.color = "red";
		document.dqtsForm.elements['s12A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		S12A_0 = true;
	} else {
		document.dqtsForm.elements['s12A[0]'].style.color = "black";
		document.dqtsForm.elements['s12A[0]'].style.backgroundColor = "white";

	}

	// S12A[1]
	if ((document.dqtsForm.elements['s12A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s12A[1]'].value))) {
		document.dqtsForm.elements['s12A[1]'].style.color = "red";
		document.dqtsForm.elements['s12A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		S12A_1 = true;
	} else if ((document.dqtsForm.elements['s12A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s12A[1]'].value))
			&& (document.dqtsForm.elements['s12A[1]'].value.length > 2)) {
		document.dqtsForm.elements['s12A[1]'].style.color = "red";
		document.dqtsForm.elements['s12A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		S12A_1 = true;
	} else {
		document.dqtsForm.elements['s12A[1]'].style.color = "black";
		document.dqtsForm.elements['s12A[1]'].style.backgroundColor = "white";

	}

	// S12A[2]
	if ((document.dqtsForm.elements['s12A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s12A[2]'].value))) {
		document.dqtsForm.elements['s12A[2]'].style.color = "red";
		document.dqtsForm.elements['s12A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		S12A_2 = true;
	} else if ((document.dqtsForm.elements['s12A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s12A[2]'].value))
			&& (document.dqtsForm.elements['s12A[2]'].value.length > 2)) {
		document.dqtsForm.elements['s12A[2]'].style.color = "red";
		document.dqtsForm.elements['s12A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		S12A_2 = true;
	} else {
		document.dqtsForm.elements['s12A[2]'].style.color = "black";
		document.dqtsForm.elements['s12A[2]'].style.backgroundColor = "white";

	}

	// S12ACMNT
	if ((document.dqtsForm.elements['s12ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['s12ACMNT'].value))) {
		document.dqtsForm.elements['s12ACMNT'].style.color = "red";
		document.dqtsForm.elements['s12ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		S12A_CMNT = true;
	} else if ((document.dqtsForm.elements['s12ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['s12ACMNT'].value))
			&& (document.dqtsForm.elements['s12ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['s12ACMNT'].style.color = "red";
		document.dqtsForm.elements['s12ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		S12A_CMNT = true;
	} else {
		document.dqtsForm.elements['s12ACMNT'].style.color = "black";
		document.dqtsForm.elements['s12ACMNT'].style.backgroundColor = "white";

	}

	// S13A
	// S13A[0]
	if ((document.dqtsForm.elements['s13A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s13A[0]'].value))) {
		document.dqtsForm.elements['s13A[0]'].style.color = "red";
		document.dqtsForm.elements['s13A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		S13A_0 = true;
	} else if ((document.dqtsForm.elements['s13A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s13A[0]'].value))
			&& (document.dqtsForm.elements['s13A[0]'].value.length > 2)) {
		document.dqtsForm.elements['s13A[0]'].style.color = "red";
		document.dqtsForm.elements['s13A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		S13A_0 = true;
	} else {
		document.dqtsForm.elements['s13A[0]'].style.color = "black";
		document.dqtsForm.elements['s13A[0]'].style.backgroundColor = "white";

	}

	// S13A[1]
	if ((document.dqtsForm.elements['s13A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s13A[1]'].value))) {
		document.dqtsForm.elements['s13A[1]'].style.color = "red";
		document.dqtsForm.elements['s13A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		S13A_1 = true;
	} else if ((document.dqtsForm.elements['s13A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s13A[1]'].value))
			&& (document.dqtsForm.elements['s13A[1]'].value.length > 2)) {
		document.dqtsForm.elements['s13A[1]'].style.color = "red";
		document.dqtsForm.elements['s13A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		S13A_1 = true;
	} else {
		document.dqtsForm.elements['s13A[1]'].style.color = "black";
		document.dqtsForm.elements['s13A[1]'].style.backgroundColor = "white";

	}

	// S13A[2]
	if ((document.dqtsForm.elements['s13A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['s13A[2]'].value))) {
		document.dqtsForm.elements['s13A[2]'].style.color = "red";
		document.dqtsForm.elements['s13A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		S13A_2 = true;
	} else if ((document.dqtsForm.elements['s13A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['s13A[2]'].value))
			&& (document.dqtsForm.elements['s13A[2]'].value.length > 2)) {
		document.dqtsForm.elements['s13A[2]'].style.color = "red";
		document.dqtsForm.elements['s13A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		S13A_2 = true;
	} else {
		document.dqtsForm.elements['s13A[2]'].style.color = "black";
		document.dqtsForm.elements['s13A[2]'].style.backgroundColor = "white";

	}

	// S13ADESC
	if ((document.dqtsForm.elements['s13ADESC'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['s13ADESC'].value))) {
		document.dqtsForm.elements['s13ADESC'].style.color = "red";
		document.dqtsForm.elements['s13ADESC'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		S13A_DESC = true;
	} else if ((document.dqtsForm.elements['s13ADESC'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['s13ADESC'].value))
			&& (document.dqtsForm.elements['s13ADESC'].value.length > 255)) {
		document.dqtsForm.elements['s13ADESC'].style.color = "red";
		document.dqtsForm.elements['s13ADESC'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		S13A_DESC = true;
	} else {
		document.dqtsForm.elements['s13ADESC'].style.color = "black";
		document.dqtsForm.elements['s13ADESC'].style.backgroundColor = "white";

	}

	// PC1A
	// PC1A[0]
	if ((document.dqtsForm.elements['pC1A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['pC1A[0]'].value))) {
		document.dqtsForm.elements['pC1A[0]'].style.color = "red";
		document.dqtsForm.elements['pC1A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		PC1A_0 = true;
	} else if ((document.dqtsForm.elements['pC1A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['pC1A[0]'].value))
			&& (document.dqtsForm.elements['pC1A[0]'].value.length > 2)) {
		document.dqtsForm.elements['pC1A[0]'].style.color = "red";
		document.dqtsForm.elements['pC1A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		PC1A_0 = true;
	} else {
		document.dqtsForm.elements['pC1A[0]'].style.color = "black";
		document.dqtsForm.elements['pC1A[0]'].style.backgroundColor = "white";

	}

	// PC1A[1]
	if ((document.dqtsForm.elements['pC1A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['pC1A[1]'].value))) {
		document.dqtsForm.elements['pC1A[1]'].style.color = "red";
		document.dqtsForm.elements['pC1A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		PC1A_1 = true;
	} else if ((document.dqtsForm.elements['pC1A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['pC1A[1]'].value))
			&& (document.dqtsForm.elements['pC1A[1]'].value.length > 2)) {
		document.dqtsForm.elements['pC1A[1]'].style.color = "red";
		document.dqtsForm.elements['pC1A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		PC1A_1 = true;
	} else {
		document.dqtsForm.elements['pC1A[1]'].style.color = "black";
		document.dqtsForm.elements['pC1A[1]'].style.backgroundColor = "white";

	}

	// PC1A[2]
	if ((document.dqtsForm.elements['pC1A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['pC1A[2]'].value))) {
		document.dqtsForm.elements['pC1A[2]'].style.color = "red";
		document.dqtsForm.elements['pC1A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		PC1A_2 = true;
	} else if ((document.dqtsForm.elements['pC1A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['pC1A[2]'].value))
			&& (document.dqtsForm.elements['pC1A[2]'].value.length > 2)) {
		document.dqtsForm.elements['pC1A[2]'].style.color = "red";
		document.dqtsForm.elements['pC1A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		PC1A_2 = true;
	} else {
		document.dqtsForm.elements['pC1A[2]'].style.color = "black";
		document.dqtsForm.elements['pC1A[2]'].style.backgroundColor = "white";

	}

	// PC1ACMNT
	if ((document.dqtsForm.elements['pC1ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['pC1ACMNT'].value))) {
		document.dqtsForm.elements['pC1ACMNT'].style.color = "red";
		document.dqtsForm.elements['pC1ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		PC1A_CMNT = true;
	} else if ((document.dqtsForm.elements['pC1ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['pC1ACMNT'].value))
			&& (document.dqtsForm.elements['pC1ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['pC1ACMNT'].style.color = "red";
		document.dqtsForm.elements['pC1ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		PC1A_CMNT = true;
	} else {
		document.dqtsForm.elements['pC1ACMNT'].style.color = "black";
		document.dqtsForm.elements['pC1ACMNT'].style.backgroundColor = "white";

	}

	// PC2A
	// PC2A[0]
	if ((document.dqtsForm.elements['pC2A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['pC2A[0]'].value))) {
		document.dqtsForm.elements['pC2A[0]'].style.color = "red";
		document.dqtsForm.elements['pC2A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		PC2A_0 = true;
	} else if ((document.dqtsForm.elements['pC2A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['pC2A[0]'].value))
			&& (document.dqtsForm.elements['pC2A[0]'].value.length > 2)) {
		document.dqtsForm.elements['pC2A[0]'].style.color = "red";
		document.dqtsForm.elements['pC2A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		PC2A_0 = true;
	} else {
		document.dqtsForm.elements['pC2A[0]'].style.color = "black";
		document.dqtsForm.elements['pC2A[0]'].style.backgroundColor = "white";

	}

	// PC2A[1]
	if ((document.dqtsForm.elements['pC2A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['pC2A[1]'].value))) {
		document.dqtsForm.elements['pC2A[1]'].style.color = "red";
		document.dqtsForm.elements['pC2A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		PC2A_1 = true;
	} else if ((document.dqtsForm.elements['pC2A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['pC2A[1]'].value))
			&& (document.dqtsForm.elements['pC2A[1]'].value.length > 2)) {
		document.dqtsForm.elements['pC2A[1]'].style.color = "red";
		document.dqtsForm.elements['pC2A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		PC2A_1 = true;
	} else {
		document.dqtsForm.elements['pC2A[1]'].style.color = "black";
		document.dqtsForm.elements['pC2A[1]'].style.backgroundColor = "white";

	}

	// PC2A[2]
	if ((document.dqtsForm.elements['pC2A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['pC2A[2]'].value))) {
		document.dqtsForm.elements['pC2A[2]'].style.color = "red";
		document.dqtsForm.elements['pC2A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		PC2A_2 = true;
	} else if ((document.dqtsForm.elements['pC2A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['pC2A[2]'].value))
			&& (document.dqtsForm.elements['pC2A[2]'].value.length > 2)) {
		document.dqtsForm.elements['pC2A[2]'].style.color = "red";
		document.dqtsForm.elements['pC2A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		PC2A_2 = true;
	} else {
		document.dqtsForm.elements['pC2A[2]'].style.color = "black";
		document.dqtsForm.elements['pC2A[2]'].style.backgroundColor = "white";

	}

	// PC2ACMNT
	if ((document.dqtsForm.elements['pC2ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['pC2ACMNT'].value))) {
		document.dqtsForm.elements['pC2ACMNT'].style.color = "red";
		document.dqtsForm.elements['pC2ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		PC2A_CMNT = true;
	} else if ((document.dqtsForm.elements['pC2ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['pC2ACMNT'].value))
			&& (document.dqtsForm.elements['pC2ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['pC2ACMNT'].style.color = "red";
		document.dqtsForm.elements['pC2ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		PC2A_CMNT = true;
	} else {
		document.dqtsForm.elements['pC2ACMNT'].style.color = "black";
		document.dqtsForm.elements['pC2ACMNT'].style.backgroundColor = "white";

	}

	// PC3A
	// PC3A[0]
	if ((document.dqtsForm.elements['pC3A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['pC3A[0]'].value))) {
		document.dqtsForm.elements['pC3A[0]'].style.color = "red";
		document.dqtsForm.elements['pC3A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		PC3A_0 = true;
	} else if ((document.dqtsForm.elements['pC3A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['pC3A[0]'].value))
			&& (document.dqtsForm.elements['pC3A[0]'].value.length > 2)) {
		document.dqtsForm.elements['pC3A[0]'].style.color = "red";
		document.dqtsForm.elements['pC3A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		PC3A_0 = true;
	} else {
		document.dqtsForm.elements['pC3A[0]'].style.color = "black";
		document.dqtsForm.elements['pC3A[0]'].style.backgroundColor = "white";

	}

	// PC3A[1]
	if ((document.dqtsForm.elements['pC3A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['pC3A[1]'].value))) {
		document.dqtsForm.elements['pC3A[1]'].style.color = "red";
		document.dqtsForm.elements['pC3A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		PC3A_1 = true;
	} else if ((document.dqtsForm.elements['pC3A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['pC3A[1]'].value))
			&& (document.dqtsForm.elements['pC3A[1]'].value.length > 2)) {
		document.dqtsForm.elements['pC3A[1]'].style.color = "red";
		document.dqtsForm.elements['pC3A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		PC3A_1 = true;
	} else {
		document.dqtsForm.elements['pC3A[1]'].style.color = "black";
		document.dqtsForm.elements['pC3A[1]'].style.backgroundColor = "white";

	}

	// PC3A[2]
	if ((document.dqtsForm.elements['pC3A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['pC3A[2]'].value))) {
		document.dqtsForm.elements['pC3A[2]'].style.color = "red";
		document.dqtsForm.elements['pC3A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		PC3A_2 = true;
	} else if ((document.dqtsForm.elements['pC3A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['pC3A[2]'].value))
			&& (document.dqtsForm.elements['pC3A[2]'].value.length > 2)) {
		document.dqtsForm.elements['pC3A[2]'].style.color = "red";
		document.dqtsForm.elements['pC3A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		PC3A_2 = true;
	} else {
		document.dqtsForm.elements['pC3A[2]'].style.color = "black";
		document.dqtsForm.elements['pC3A[2]'].style.backgroundColor = "white";

	}

	// PC3ACMNT
	if ((document.dqtsForm.elements['pC3ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['pC3ACMNT'].value))) {
		document.dqtsForm.elements['pC3ACMNT'].style.color = "red";
		document.dqtsForm.elements['pC3ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		PC3A_CMNT = true;
	} else if ((document.dqtsForm.elements['pC3ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['pC3ACMNT'].value))
			&& (document.dqtsForm.elements['pC3ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['pC3ACMNT'].style.color = "red";
		document.dqtsForm.elements['pC3ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		PC3A_CMNT = true;
	} else {
		document.dqtsForm.elements['pC3ACMNT'].style.color = "black";
		document.dqtsForm.elements['pC3ACMNT'].style.backgroundColor = "white";

	}

	// PC4A
	// PC4A[0]
	if ((document.dqtsForm.elements['pC4A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['pC4A[0]'].value))) {
		document.dqtsForm.elements['pC4A[0]'].style.color = "red";
		document.dqtsForm.elements['pC4A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		PC4A_0 = true;
	} else if ((document.dqtsForm.elements['pC4A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['pC4A[0]'].value))
			&& (document.dqtsForm.elements['pC4A[0]'].value.length > 2)) {
		document.dqtsForm.elements['pC4A[0]'].style.color = "red";
		document.dqtsForm.elements['pC4A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		PC4A_0 = true;
	} else {
		document.dqtsForm.elements['pC4A[0]'].style.color = "black";
		document.dqtsForm.elements['pC4A[0]'].style.backgroundColor = "white";

	}

	// PC4A[1]
	if ((document.dqtsForm.elements['pC4A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['pC4A[1]'].value))) {
		document.dqtsForm.elements['pC4A[1]'].style.color = "red";
		document.dqtsForm.elements['pC4A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		PC4A_1 = true;
	} else if ((document.dqtsForm.elements['pC4A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['pC4A[1]'].value))
			&& (document.dqtsForm.elements['pC4A[1]'].value.length > 2)) {
		document.dqtsForm.elements['pC4A[1]'].style.color = "red";
		document.dqtsForm.elements['pC4A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		PC4A_1 = true;
	} else {
		document.dqtsForm.elements['pC4A[1]'].style.color = "black";
		document.dqtsForm.elements['pC4A[1]'].style.backgroundColor = "white";

	}

	// PC4A[2]
	if ((document.dqtsForm.elements['pC4A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['pC4A[2]'].value))) {
		document.dqtsForm.elements['pC4A[2]'].style.color = "red";
		document.dqtsForm.elements['pC4A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		PC4A_2 = true;
	} else if ((document.dqtsForm.elements['pC4A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['pC4A[2]'].value))
			&& (document.dqtsForm.elements['pC4A[2]'].value.length > 2)) {
		document.dqtsForm.elements['pC4A[2]'].style.color = "red";
		document.dqtsForm.elements['pC4A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		PC4A_2 = true;
	} else {
		document.dqtsForm.elements['pC4A[2]'].style.color = "black";
		document.dqtsForm.elements['pC4A[2]'].style.backgroundColor = "white";

	}

	// PC4ACMNT
	if ((document.dqtsForm.elements['pC4ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['pC4ACMNT'].value))) {
		document.dqtsForm.elements['pC4ACMNT'].style.color = "red";
		document.dqtsForm.elements['pC4ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		PC4A_CMNT = true;
	} else if ((document.dqtsForm.elements['pC4ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['pC4ACMNT'].value))
			&& (document.dqtsForm.elements['pC4ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['pC4ACMNT'].style.color = "red";
		document.dqtsForm.elements['pC4ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		PC4A_CMNT = true;
	} else {
		document.dqtsForm.elements['pC4ACMNT'].style.color = "black";
		document.dqtsForm.elements['pC4ACMNT'].style.backgroundColor = "white";

	}

	// PC5A
	// PC5A[0]
	if ((document.dqtsForm.elements['pC5A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['pC5A[0]'].value))) {
		document.dqtsForm.elements['pC5A[0]'].style.color = "red";
		document.dqtsForm.elements['pC5A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		PC5A_0 = true;
	} else if ((document.dqtsForm.elements['pC5A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['pC5A[0]'].value))
			&& (document.dqtsForm.elements['pC5A[0]'].value.length > 2)) {
		document.dqtsForm.elements['pC5A[0]'].style.color = "red";
		document.dqtsForm.elements['pC5A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		PC5A_0 = true;
	} else {
		document.dqtsForm.elements['pC5A[0]'].style.color = "black";
		document.dqtsForm.elements['pC5A[0]'].style.backgroundColor = "white";

	}

	// PC5A[1]
	if ((document.dqtsForm.elements['pC5A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['pC5A[1]'].value))) {
		document.dqtsForm.elements['pC5A[1]'].style.color = "red";
		document.dqtsForm.elements['pC5A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		PC5A_1 = true;
	} else if ((document.dqtsForm.elements['pC5A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['pC5A[1]'].value))
			&& (document.dqtsForm.elements['pC5A[1]'].value.length > 2)) {
		document.dqtsForm.elements['pC5A[1]'].style.color = "red";
		document.dqtsForm.elements['pC5A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		PC5A_1 = true;
	} else {
		document.dqtsForm.elements['pC5A[1]'].style.color = "black";
		document.dqtsForm.elements['pC5A[1]'].style.backgroundColor = "white";

	}

	// PC5A[2]
	if ((document.dqtsForm.elements['pC5A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['pC5A[2]'].value))) {
		document.dqtsForm.elements['pC5A[2]'].style.color = "red";
		document.dqtsForm.elements['pC5A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		PC5A_2 = true;
	} else if ((document.dqtsForm.elements['pC5A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['pC5A[2]'].value))
			&& (document.dqtsForm.elements['pC5A[2]'].value.length > 2)) {
		document.dqtsForm.elements['pC5A[2]'].style.color = "red";
		document.dqtsForm.elements['pC5A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		PC5A_2 = true;
	} else {
		document.dqtsForm.elements['pC5A[2]'].style.color = "black";
		document.dqtsForm.elements['pC5A[2]'].style.backgroundColor = "white";

	}

	// PC5ACMNT
	if ((document.dqtsForm.elements['pC5ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['pC5ACMNT'].value))) {
		document.dqtsForm.elements['pC5ACMNT'].style.color = "red";
		document.dqtsForm.elements['pC5ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		PC5A_CMNT = true;
	} else if ((document.dqtsForm.elements['pC5ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['pC5ACMNT'].value))
			&& (document.dqtsForm.elements['pC5ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['pC5ACMNT'].style.color = "red";
		document.dqtsForm.elements['pC5ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		PC5A_CMNT = true;
	} else {
		document.dqtsForm.elements['pC5ACMNT'].style.color = "black";
		document.dqtsForm.elements['pC5ACMNT'].style.backgroundColor = "white";

	}

	// PC6A
	// PC6A[0]
	if ((document.dqtsForm.elements['pC6A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['pC6A[0]'].value))) {
		document.dqtsForm.elements['pC6A[0]'].style.color = "red";
		document.dqtsForm.elements['pC6A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		PC6A_0 = true;
	} else if ((document.dqtsForm.elements['pC6A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['pC6A[0]'].value))
			&& (document.dqtsForm.elements['pC6A[0]'].value.length > 2)) {
		document.dqtsForm.elements['pC6A[0]'].style.color = "red";
		document.dqtsForm.elements['pC6A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		PC6A_0 = true;
	} else {
		document.dqtsForm.elements['pC6A[0]'].style.color = "black";
		document.dqtsForm.elements['pC6A[0]'].style.backgroundColor = "white";

	}

	// PC6A[1]
	if ((document.dqtsForm.elements['pC6A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['pC6A[1]'].value))) {
		document.dqtsForm.elements['pC6A[1]'].style.color = "red";
		document.dqtsForm.elements['pC6A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		PC6A_1 = true;
	} else if ((document.dqtsForm.elements['pC6A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['pC6A[1]'].value))
			&& (document.dqtsForm.elements['pC6A[1]'].value.length > 2)) {
		document.dqtsForm.elements['pC6A[1]'].style.color = "red";
		document.dqtsForm.elements['pC6A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		PC6A_1 = true;
	} else {
		document.dqtsForm.elements['pC6A[1]'].style.color = "black";
		document.dqtsForm.elements['pC6A[1]'].style.backgroundColor = "white";

	}

	// PC6A[2]
	if ((document.dqtsForm.elements['pC6A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['pC6A[2]'].value))) {
		document.dqtsForm.elements['pC6A[2]'].style.color = "red";
		document.dqtsForm.elements['pC6A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		PC6A_2 = true;
	} else if ((document.dqtsForm.elements['pC6A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['pC6A[2]'].value))
			&& (document.dqtsForm.elements['pC6A[2]'].value.length > 2)) {
		document.dqtsForm.elements['pC6A[2]'].style.color = "red";
		document.dqtsForm.elements['pC6A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		PC6A_2 = true;
	} else {
		document.dqtsForm.elements['pC6A[2]'].style.color = "black";
		document.dqtsForm.elements['pC6A[2]'].style.backgroundColor = "white";

	}

	// PC6ACMNT
	if ((document.dqtsForm.elements['pC6ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['pC6ACMNT'].value))) {
		document.dqtsForm.elements['pC6ACMNT'].style.color = "red";
		document.dqtsForm.elements['pC6ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		PC6A_CMNT = true;
	} else if ((document.dqtsForm.elements['pC6ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['pC6ACMNT'].value))
			&& (document.dqtsForm.elements['pC6ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['pC6ACMNT'].style.color = "red";
		document.dqtsForm.elements['pC6ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		PC6A_CMNT = true;
	} else {
		document.dqtsForm.elements['pC6ACMNT'].style.color = "black";
		document.dqtsForm.elements['pC6ACMNT'].style.backgroundColor = "white";

	}

	// PC7A
	// PC7A[0]
	if ((document.dqtsForm.elements['pC7A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['pC7A[0]'].value))) {
		document.dqtsForm.elements['pC7A[0]'].style.color = "red";
		document.dqtsForm.elements['pC7A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		PC7A_0 = true;
	} else if ((document.dqtsForm.elements['pC7A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['pC7A[0]'].value))
			&& (document.dqtsForm.elements['pC7A[0]'].value.length > 2)) {
		document.dqtsForm.elements['pC7A[0]'].style.color = "red";
		document.dqtsForm.elements['pC7A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		PC7A_0 = true;
	} else {
		document.dqtsForm.elements['pC7A[0]'].style.color = "black";
		document.dqtsForm.elements['pC7A[0]'].style.backgroundColor = "white";

	}

	// PC7A[1]
	if ((document.dqtsForm.elements['pC7A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['pC7A[1]'].value))) {
		document.dqtsForm.elements['pC7A[1]'].style.color = "red";
		document.dqtsForm.elements['pC7A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		PC7A_1 = true;
	} else if ((document.dqtsForm.elements['pC7A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['pC7A[1]'].value))
			&& (document.dqtsForm.elements['pC7A[1]'].value.length > 2)) {
		document.dqtsForm.elements['pC7A[1]'].style.color = "red";
		document.dqtsForm.elements['pC7A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		PC7A_1 = true;
	} else {
		document.dqtsForm.elements['pC7A[1]'].style.color = "black";
		document.dqtsForm.elements['pC7A[1]'].style.backgroundColor = "white";

	}

	// PC7A[2]
	if ((document.dqtsForm.elements['pC7A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['pC7A[2]'].value))) {
		document.dqtsForm.elements['pC7A[2]'].style.color = "red";
		document.dqtsForm.elements['pC7A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		PC7A_2 = true;
	} else if ((document.dqtsForm.elements['pC7A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['pC7A[2]'].value))
			&& (document.dqtsForm.elements['pC7A[2]'].value.length > 2)) {
		document.dqtsForm.elements['pC7A[2]'].style.color = "red";
		document.dqtsForm.elements['pC7A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		PC7A_2 = true;
	} else {
		document.dqtsForm.elements['pC7A[2]'].style.color = "black";
		document.dqtsForm.elements['pC7A[2]'].style.backgroundColor = "white";

	}

	// PC7ADESC
	if ((document.dqtsForm.elements['pC7ADESC'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['pC7ADESC'].value))) {
		document.dqtsForm.elements['pC7ADESC'].style.color = "red";
		document.dqtsForm.elements['pC7ADESC'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		PC7A_DESC = true;
	} else if ((document.dqtsForm.elements['pC7ADESC'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['pC7ADESC'].value))
			&& (document.dqtsForm.elements['pC7ADESC'].value.length > 255)) {
		document.dqtsForm.elements['pC7ADESC'].style.color = "red";
		document.dqtsForm.elements['pC7ADESC'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		PC7A_DESC = true;
	} else {
		document.dqtsForm.elements['pC7ADESC'].style.color = "black";
		document.dqtsForm.elements['pC7ADESC'].style.backgroundColor = "white";

	}

	// DL1A
	// DL1A[0]
	if ((document.dqtsForm.elements['dL1A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dL1A[0]'].value))) {
		document.dqtsForm.elements['dL1A[0]'].style.color = "red";
		document.dqtsForm.elements['dL1A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		DL1A_0 = true;
	} else if ((document.dqtsForm.elements['dL1A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dL1A[0]'].value))
			&& (document.dqtsForm.elements['dL1A[0]'].value.length > 2)) {
		document.dqtsForm.elements['dL1A[0]'].style.color = "red";
		document.dqtsForm.elements['dL1A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		DL1A_0 = true;
	} else {
		document.dqtsForm.elements['dL1A[0]'].style.color = "black";
		document.dqtsForm.elements['dL1A[0]'].style.backgroundColor = "white";

	}

	// DL1A[1]
	if ((document.dqtsForm.elements['dL1A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dL1A[1]'].value))) {
		document.dqtsForm.elements['dL1A[1]'].style.color = "red";
		document.dqtsForm.elements['dL1A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		DL1A_1 = true;
	} else if ((document.dqtsForm.elements['dL1A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dL1A[1]'].value))
			&& (document.dqtsForm.elements['dL1A[1]'].value.length > 2)) {
		document.dqtsForm.elements['dL1A[1]'].style.color = "red";
		document.dqtsForm.elements['dL1A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		DL1A_1 = true;
	} else {
		document.dqtsForm.elements['dL1A[1]'].style.color = "black";
		document.dqtsForm.elements['dL1A[1]'].style.backgroundColor = "white";

	}

	// DL1A[2]
	if ((document.dqtsForm.elements['dL1A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dL1A[2]'].value))) {
		document.dqtsForm.elements['dL1A[2]'].style.color = "red";
		document.dqtsForm.elements['dL1A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		DL1A_2 = true;
	} else if ((document.dqtsForm.elements['dL1A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dL1A[2]'].value))
			&& (document.dqtsForm.elements['dL1A[2]'].value.length > 2)) {
		document.dqtsForm.elements['dL1A[2]'].style.color = "red";
		document.dqtsForm.elements['dL1A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		DL1A_2 = true;
	} else {
		document.dqtsForm.elements['dL1A[2]'].style.color = "black";
		document.dqtsForm.elements['dL1A[2]'].style.backgroundColor = "white";

	}

	// DL1ACMNT
	if ((document.dqtsForm.elements['dL1ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['dL1ACMNT'].value))) {
		document.dqtsForm.elements['dL1ACMNT'].style.color = "red";
		document.dqtsForm.elements['dL1ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		DL1A_CMNT = true;
	} else if ((document.dqtsForm.elements['dL1ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['dL1ACMNT'].value))
			&& (document.dqtsForm.elements['dD1ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['dL1ACMNT'].style.color = "red";
		document.dqtsForm.elements['dL1ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		DL1A_CMNT = true;
	} else {
		document.dqtsForm.elements['dL1ACMNT'].style.color = "black";
		document.dqtsForm.elements['dL1ACMNT'].style.backgroundColor = "white";

	}

	// DL2A
	// DL2A[0]
	if ((document.dqtsForm.elements['dL2A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dL2A[0]'].value))) {
		document.dqtsForm.elements['dL2A[0]'].style.color = "red";
		document.dqtsForm.elements['dL2A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		DL2A_0 = true;
	} else if ((document.dqtsForm.elements['dL2A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dL2A[0]'].value))
			&& (document.dqtsForm.elements['dL2A[0]'].value.length > 2)) {
		document.dqtsForm.elements['dL2A[0]'].style.color = "red";
		document.dqtsForm.elements['dL2A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		DL2A_0 = true;
	} else {
		document.dqtsForm.elements['dL2A[0]'].style.color = "black";
		document.dqtsForm.elements['dL2A[0]'].style.backgroundColor = "white";

	}

	// DL2A[1]
	if ((document.dqtsForm.elements['dL2A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dL2A[1]'].value))) {
		document.dqtsForm.elements['dL2A[1]'].style.color = "red";
		document.dqtsForm.elements['dL2A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		DL2A_1 = true;
	} else if ((document.dqtsForm.elements['dL2A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dL2A[1]'].value))
			&& (document.dqtsForm.elements['dL2A[1]'].value.length > 2)) {
		document.dqtsForm.elements['dL2A[1]'].style.color = "red";
		document.dqtsForm.elements['dL2A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		DL2A_1 = true;
	} else {
		document.dqtsForm.elements['dL2A[1]'].style.color = "black";
		document.dqtsForm.elements['dL2A[1]'].style.backgroundColor = "white";

	}

	// DL2A[2]
	if ((document.dqtsForm.elements['dL2A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dL2A[2]'].value))) {
		document.dqtsForm.elements['dL2A[2]'].style.color = "red";
		document.dqtsForm.elements['dL2A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		DL2A_2 = true;
	} else if ((document.dqtsForm.elements['dL2A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dL2A[2]'].value))
			&& (document.dqtsForm.elements['dL2A[2]'].value.length > 2)) {
		document.dqtsForm.elements['dL2A[2]'].style.color = "red";
		document.dqtsForm.elements['dL2A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		DL2A_2 = true;
	} else {
		document.dqtsForm.elements['dL2A[2]'].style.color = "black";
		document.dqtsForm.elements['dL2A[2]'].style.backgroundColor = "white";

	}

	// DL2ACMNT
	if ((document.dqtsForm.elements['dL2ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['dL2ACMNT'].value))) {
		document.dqtsForm.elements['dL2ACMNT'].style.color = "red";
		document.dqtsForm.elements['dL2ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		DL2A_CMNT = true;
	} else if ((document.dqtsForm.elements['dL2ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['dL2ACMNT'].value))
			&& (document.dqtsForm.elements['dL2ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['dL2ACMNT'].style.color = "red";
		document.dqtsForm.elements['dL2ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		DL2A_CMNT = true;
	} else {
		document.dqtsForm.elements['dL2ACMNT'].style.color = "black";
		document.dqtsForm.elements['dL2ACMNT'].style.backgroundColor = "white";

	}

	// DL3A
	// DL3A[0]
	if ((document.dqtsForm.elements['dL3A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dL3A[0]'].value))) {
		document.dqtsForm.elements['dL3A[0]'].style.color = "red";
		document.dqtsForm.elements['dL3A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		DL3A_0 = true;
	} else if ((document.dqtsForm.elements['dL3A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dL3A[0]'].value))
			&& (document.dqtsForm.elements['dL3A[0]'].value.length > 2)) {
		document.dqtsForm.elements['dL3A[0]'].style.color = "red";
		document.dqtsForm.elements['dL3A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		DL3A_0 = true;
	} else {
		document.dqtsForm.elements['dL3A[0]'].style.color = "black";
		document.dqtsForm.elements['dL3A[0]'].style.backgroundColor = "white";

	}

	// DL3A[1]
	if ((document.dqtsForm.elements['dL3A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dL3A[1]'].value))) {
		document.dqtsForm.elements['dL3A[1]'].style.color = "red";
		document.dqtsForm.elements['dL3A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		DL3A_1 = true;
	} else if ((document.dqtsForm.elements['dL3A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dL3A[1]'].value))
			&& (document.dqtsForm.elements['dL3A[1]'].value.length > 2)) {
		document.dqtsForm.elements['dL3A[1]'].style.color = "red";
		document.dqtsForm.elements['dL3A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		DL3A_1 = true;
	} else {
		document.dqtsForm.elements['dL3A[1]'].style.color = "black";
		document.dqtsForm.elements['dL3A[1]'].style.backgroundColor = "white";

	}

	// DL3A[2]
	if ((document.dqtsForm.elements['dL3A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dL3A[2]'].value))) {
		document.dqtsForm.elements['dL3A[2]'].style.color = "red";
		document.dqtsForm.elements['dL3A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		DL3A_2 = true;
	} else if ((document.dqtsForm.elements['dL3A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dL3A[2]'].value))
			&& (document.dqtsForm.elements['dL3A[2]'].value.length > 2)) {
		document.dqtsForm.elements['dL3A[2]'].style.color = "red";
		document.dqtsForm.elements['dL3A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		DL3A_2 = true;
	} else {
		document.dqtsForm.elements['dL3A[2]'].style.color = "black";
		document.dqtsForm.elements['dL3A[2]'].style.backgroundColor = "white";

	}

	// DL3ACMNT
	if ((document.dqtsForm.elements['dL3ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['dL3ACMNT'].value))) {
		document.dqtsForm.elements['dL3ACMNT'].style.color = "red";
		document.dqtsForm.elements['dL3ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		DL3A_CMNT = true;
	} else if ((document.dqtsForm.elements['dL3ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['dL3ACMNT'].value))
			&& (document.dqtsForm.elements['dL2ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['dL3ACMNT'].style.color = "red";
		document.dqtsForm.elements['dL3ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		DL3A_CMNT = true;
	} else {
		document.dqtsForm.elements['dL3ACMNT'].style.color = "black";
		document.dqtsForm.elements['dL3ACMNT'].style.backgroundColor = "white";

	}

	// DL4A
	// DL4A[0]
	if ((document.dqtsForm.elements['dL4A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dL4A[0]'].value))) {
		document.dqtsForm.elements['dL4A[0]'].style.color = "red";
		document.dqtsForm.elements['dL4A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		DL4A_0 = true;
	} else if ((document.dqtsForm.elements['dL4A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dL4A[0]'].value))
			&& (document.dqtsForm.elements['dL4A[0]'].value.length > 2)) {
		document.dqtsForm.elements['dL4A[0]'].style.color = "red";
		document.dqtsForm.elements['dL4A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		DL4A_0 = true;
	} else {
		document.dqtsForm.elements['dL4A[0]'].style.color = "black";
		document.dqtsForm.elements['dL4A[0]'].style.backgroundColor = "white";

	}

	// DL4A[1]
	if ((document.dqtsForm.elements['dL4A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dL4A[1]'].value))) {
		document.dqtsForm.elements['dL4A[1]'].style.color = "red";
		document.dqtsForm.elements['dL4A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		DL4A_1 = true;
	} else if ((document.dqtsForm.elements['dL4A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dL4A[1]'].value))
			&& (document.dqtsForm.elements['dL4A[1]'].value.length > 2)) {
		document.dqtsForm.elements['dL4A[1]'].style.color = "red";
		document.dqtsForm.elements['dL4A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		DL4A_1 = true;
	} else {
		document.dqtsForm.elements['dL4A[1]'].style.color = "black";
		document.dqtsForm.elements['dL4A[1]'].style.backgroundColor = "white";

	}

	// DL4A[2]
	if ((document.dqtsForm.elements['dL4A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dL4A[2]'].value))) {
		document.dqtsForm.elements['dL4A[2]'].style.color = "red";
		document.dqtsForm.elements['dL4A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		DL4A_2 = true;
	} else if ((document.dqtsForm.elements['dL4A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dL4A[2]'].value))
			&& (document.dqtsForm.elements['dL4A[2]'].value.length > 2)) {
		document.dqtsForm.elements['dL4A[2]'].style.color = "red";
		document.dqtsForm.elements['dL4A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		DL4A_2 = true;
	} else {
		document.dqtsForm.elements['dL4A[2]'].style.color = "black";
		document.dqtsForm.elements['dL4A[2]'].style.backgroundColor = "white";

	}

	// DL4ACMNT
	if ((document.dqtsForm.elements['dL4ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['dL4ACMNT'].value))) {
		document.dqtsForm.elements['dL4ACMNT'].style.color = "red";
		document.dqtsForm.elements['dL4ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		DL4A_CMNT = true;
	} else if ((document.dqtsForm.elements['dL4ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['dL4ACMNT'].value))
			&& (document.dqtsForm.elements['dL4ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['dL4ACMNT'].style.color = "red";
		document.dqtsForm.elements['dL4ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		DL4A_CMNT = true;
	} else {
		document.dqtsForm.elements['dL4ACMNT'].style.color = "black";
		document.dqtsForm.elements['dL4ACMNT'].style.backgroundColor = "white";

	}

	// DL5A
	// DL5A[0]
	if ((document.dqtsForm.elements['dL5A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dL5A[0]'].value))) {
		document.dqtsForm.elements['dL5A[0]'].style.color = "red";
		document.dqtsForm.elements['dL5A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		DL5A_0 = true;
	} else if ((document.dqtsForm.elements['dL5A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dL5A[0]'].value))
			&& (document.dqtsForm.elements['dL5A[0]'].value.length > 2)) {
		document.dqtsForm.elements['dL5A[0]'].style.color = "red";
		document.dqtsForm.elements['dL5A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		DL5A_0 = true;
	} else {
		document.dqtsForm.elements['dL5A[0]'].style.color = "black";
		document.dqtsForm.elements['dL5A[0]'].style.backgroundColor = "white";

	}

	// DL5A[1]
	if ((document.dqtsForm.elements['dL5A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dL5A[1]'].value))) {
		document.dqtsForm.elements['dL5A[1]'].style.color = "red";
		document.dqtsForm.elements['dL5A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		DL5A_1 = true;
	} else if ((document.dqtsForm.elements['dL5A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dL5A[1]'].value))
			&& (document.dqtsForm.elements['dL5A[1]'].value.length > 2)) {
		document.dqtsForm.elements['dL5A[1]'].style.color = "red";
		document.dqtsForm.elements['dL5A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		DL5A_1 = true;
	} else {
		document.dqtsForm.elements['dL5A[1]'].style.color = "black";
		document.dqtsForm.elements['dL5A[1]'].style.backgroundColor = "white";

	}

	// DL5A[2]
	if ((document.dqtsForm.elements['dL5A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dL5A[2]'].value))) {
		document.dqtsForm.elements['dL5A[2]'].style.color = "red";
		document.dqtsForm.elements['dL5A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		DL5A_2 = true;
	} else if ((document.dqtsForm.elements['dL5A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dL5A[2]'].value))
			&& (document.dqtsForm.elements['dL5A[2]'].value.length > 2)) {
		document.dqtsForm.elements['dL5A[2]'].style.color = "red";
		document.dqtsForm.elements['dL5A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		DL5A_2 = true;
	} else {
		document.dqtsForm.elements['dL5A[2]'].style.color = "black";
		document.dqtsForm.elements['dL5A[2]'].style.backgroundColor = "white";

	}

	// DL5ADESC
	if ((document.dqtsForm.elements['dL5ADESC'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['dL5ADESC'].value))) {
		document.dqtsForm.elements['dL5ADESC'].style.color = "red";
		document.dqtsForm.elements['dL5ADESC'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		DL5A_DESC = true;
	} else if ((document.dqtsForm.elements['dL5ADESC'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['dL5ADESC'].value))
			&& (document.dqtsForm.elements['dL5ADESC'].value.length > 255)) {
		document.dqtsForm.elements['dL5ADESC'].style.color = "red";
		document.dqtsForm.elements['dL5ADESC'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		DL5A_DESC = true;
	} else {
		document.dqtsForm.elements['dL5ADESC'].style.color = "black";
		document.dqtsForm.elements['dL5ADESC'].style.backgroundColor = "white";

	}
	// DD1A
	// DD1A[0]
	if ((document.dqtsForm.elements['dD1A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dD1A[0]'].value))) {
		document.dqtsForm.elements['dD1A[0]'].style.color = "red";
		document.dqtsForm.elements['dD1A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		DD1A_0 = true;
	} else if ((document.dqtsForm.elements['dD1A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dD1A[0]'].value))
			&& (document.dqtsForm.elements['dD1A[0]'].value.length > 2)) {
		document.dqtsForm.elements['dD1A[0]'].style.color = "red";
		document.dqtsForm.elements['dD1A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		DD1A_0 = true;
	} else {
		document.dqtsForm.elements['dD1A[0]'].style.color = "black";
		document.dqtsForm.elements['dD1A[0]'].style.backgroundColor = "white";
	}

	// DD1A[1]
	if ((document.dqtsForm.elements['dD1A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dD1A[1]'].value))) {
		document.dqtsForm.elements['dD1A[1]'].style.color = "red";
		document.dqtsForm.elements['dD1A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		DD1A_1 = true;
	} else if ((document.dqtsForm.elements['dD1A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dD1A[1]'].value))
			&& (document.dqtsForm.elements['dD1A[1]'].value.length > 2)) {
		document.dqtsForm.elements['dD1A[1]'].style.color = "red";
		document.dqtsForm.elements['dD1A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		DD1A_1 = true;
	} else {
		document.dqtsForm.elements['dD1A[1]'].style.color = "black";
		document.dqtsForm.elements['dD1A[1]'].style.backgroundColor = "white";

	}

	// DD1A[2]
	if ((document.dqtsForm.elements['dD1A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dD1A[2]'].value))) {
		document.dqtsForm.elements['dD1A[2]'].style.color = "red";
		document.dqtsForm.elements['dD1A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		DD1A_2 = true;
	} else if ((document.dqtsForm.elements['dD1A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dD1A[2]'].value))
			&& (document.dqtsForm.elements['dD1A[2]'].value.length > 2)) {
		document.dqtsForm.elements['dD1A[2]'].style.color = "red";
		document.dqtsForm.elements['dD1A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		DD1A_2 = true;
	} else {
		document.dqtsForm.elements['dD1A[2]'].style.color = "black";
		document.dqtsForm.elements['dD1A[2]'].style.backgroundColor = "white";

	}

	// DD1ACMNT
	if ((document.dqtsForm.elements['dD1ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['dD1ACMNT'].value))) {
		document.dqtsForm.elements['dD1ACMNT'].style.color = "red";
		document.dqtsForm.elements['dD1ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		DD1A_CMNT = true;
	} else if ((document.dqtsForm.elements['dD1ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['dD1ACMNT'].value))
			&& (document.dqtsForm.elements['dD1ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['dD1ACMNT'].style.color = "red";
		document.dqtsForm.elements['dD1ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		DD1A_CMNT = true;
	} else {
		document.dqtsForm.elements['dD1ACMNT'].style.color = "black";
		document.dqtsForm.elements['dD1ACMNT'].style.backgroundColor = "white";

	}

	// DD2A
	// DD2A[0]
	if ((document.dqtsForm.elements['dD2A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dD2A[0]'].value))) {
		document.dqtsForm.elements['dD2A[0]'].style.color = "red";
		document.dqtsForm.elements['dD2A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		DD2A_0 = true;
	} else if ((document.dqtsForm.elements['dD2A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dD2A[0]'].value))
			&& (document.dqtsForm.elements['dD2A[0]'].value.length > 2)) {
		document.dqtsForm.elements['dD2A[0]'].style.color = "red";
		document.dqtsForm.elements['dD2A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		DD2A_0 = true;
	} else {
		document.dqtsForm.elements['dD2A[0]'].style.color = "black";
		document.dqtsForm.elements['dD2A[0]'].style.backgroundColor = "white";

	}

	// DD2A[1]
	if ((document.dqtsForm.elements['dD2A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dD2A[1]'].value))) {
		document.dqtsForm.elements['dD2A[1]'].style.color = "red";
		document.dqtsForm.elements['dD2A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		DD2A_1 = true;
	} else if ((document.dqtsForm.elements['dD2A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dD2A[1]'].value))
			&& (document.dqtsForm.elements['dD2A[1]'].value.length > 2)) {
		document.dqtsForm.elements['dD2A[1]'].style.color = "red";
		document.dqtsForm.elements['dD2A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		DD2A_1 = true;
	} else {
		document.dqtsForm.elements['dD2A[1]'].style.color = "black";
		document.dqtsForm.elements['dD2A[1]'].style.backgroundColor = "white";

	}

	// DD2A[2]
	if ((document.dqtsForm.elements['dD2A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dD2A[2]'].value))) {
		document.dqtsForm.elements['dD2A[2]'].style.color = "red";
		document.dqtsForm.elements['dD2A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		DD2A_2 = true;
	} else if ((document.dqtsForm.elements['dD2A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dD2A[2]'].value))
			&& (document.dqtsForm.elements['dD2A[2]'].value.length > 2)) {
		document.dqtsForm.elements['dD2A[2]'].style.color = "red";
		document.dqtsForm.elements['dD2A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		DD2A_2 = true;
	} else {
		document.dqtsForm.elements['dD2A[2]'].style.color = "black";
		document.dqtsForm.elements['dD2A[2]'].style.backgroundColor = "white";

	}

	// DD2ACMNT
	if ((document.dqtsForm.elements['dD2ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['dD2ACMNT'].value))) {
		document.dqtsForm.elements['dD2ACMNT'].style.color = "red";
		document.dqtsForm.elements['dD2ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		DD2A_CMNT = true;
	} else if ((document.dqtsForm.elements['dD2ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['dD2ACMNT'].value))
			&& (document.dqtsForm.elements['dD2ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['dD2ACMNT'].style.color = "red";
		document.dqtsForm.elements['dD2ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		DD2A_CMNT = true;
	} else {
		document.dqtsForm.elements['dD2ACMNT'].style.color = "black";
		document.dqtsForm.elements['dD2ACMNT'].style.backgroundColor = "white";

	}

	// DD3A
	// DD3A[0]
	if ((document.dqtsForm.elements['dD3A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dD3A[0]'].value))) {
		document.dqtsForm.elements['dD3A[0]'].style.color = "red";
		document.dqtsForm.elements['dD3A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		DD3A_0 = true;
	} else if ((document.dqtsForm.elements['dD3A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dD3A[0]'].value))
			&& (document.dqtsForm.elements['dD3A[0]'].value.length > 2)) {
		document.dqtsForm.elements['dD3A[0]'].style.color = "red";
		document.dqtsForm.elements['dD3A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		DD3A_0 = true;
	} else {
		document.dqtsForm.elements['dD3A[0]'].style.color = "black";
		document.dqtsForm.elements['dD3A[0]'].style.backgroundColor = "white";

	}

	// DD3A[1]
	if ((document.dqtsForm.elements['dD3A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dD3A[1]'].value))) {
		document.dqtsForm.elements['dD3A[1]'].style.color = "red";
		document.dqtsForm.elements['dD3A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		DD3A_1 = true;
	} else if ((document.dqtsForm.elements['dD3A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dD3A[1]'].value))
			&& (document.dqtsForm.elements['dD3A[1]'].value.length > 2)) {
		document.dqtsForm.elements['dD3A[1]'].style.color = "red";
		document.dqtsForm.elements['dD3A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		DD3A_1 = true;
	} else {
		document.dqtsForm.elements['dD3A[1]'].style.color = "black";
		document.dqtsForm.elements['dD3A[1]'].style.backgroundColor = "white";

	}

	// DD3A[2]
	if ((document.dqtsForm.elements['dD3A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dD3A[2]'].value))) {
		document.dqtsForm.elements['dD3A[2]'].style.color = "red";
		document.dqtsForm.elements['dD3A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		DD3A_2 = true;
	} else if ((document.dqtsForm.elements['dD3A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dD3A[2]'].value))
			&& (document.dqtsForm.elements['dD3A[2]'].value.length > 2)) {
		document.dqtsForm.elements['dD3A[2]'].style.color = "red";
		document.dqtsForm.elements['dD3A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		DD3A_2 = true;
	} else {
		document.dqtsForm.elements['dD3A[2]'].style.color = "black";
		document.dqtsForm.elements['dD3A[2]'].style.backgroundColor = "white";

	}

	// DD3ACMNT
	if ((document.dqtsForm.elements['dD3ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['dD3ACMNT'].value))) {
		document.dqtsForm.elements['dD3ACMNT'].style.color = "red";
		document.dqtsForm.elements['dD2ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		DD3A_CMNT = true;
	} else if ((document.dqtsForm.elements['dD3ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['dD3ACMNT'].value))
			&& (document.dqtsForm.elements['dD3ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['dD3ACMNT'].style.color = "red";
		document.dqtsForm.elements['dD3ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		DD3A_CMNT = true;
	} else {
		document.dqtsForm.elements['dD2ACMNT'].style.color = "black";
		document.dqtsForm.elements['dD2ACMNT'].style.backgroundColor = "white";

	}
	// DD4A
	// DD4A[0]
	if ((document.dqtsForm.elements['dD4A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dD4A[0]'].value))) {
		document.dqtsForm.elements['dD4A[0]'].style.color = "red";
		document.dqtsForm.elements['dD4A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		DD4A_0 = true;
	} else if ((document.dqtsForm.elements['dD4A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dD4A[0]'].value))
			&& (document.dqtsForm.elements['dD4A[0]'].value.length > 2)) {
		document.dqtsForm.elements['dD4A[0]'].style.color = "red";
		document.dqtsForm.elements['dD4A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		DD4A_0 = true;
	} else {
		document.dqtsForm.elements['dD4A[0]'].style.color = "black";
		document.dqtsForm.elements['dD4A[0]'].style.backgroundColor = "white";

	}

	// DD4A[1]
	if ((document.dqtsForm.elements['dD4A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dD4A[1]'].value))) {
		document.dqtsForm.elements['dD4A[1]'].style.color = "red";
		document.dqtsForm.elements['dD4A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		DD4A_1 = true;
	} else if ((document.dqtsForm.elements['dD4A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dD4A[1]'].value))
			&& (document.dqtsForm.elements['dD4A[1]'].value.length > 2)) {
		document.dqtsForm.elements['dD4A[1]'].style.color = "red";
		document.dqtsForm.elements['dD4A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		DD4A_1 = true;
	} else {
		document.dqtsForm.elements['dD4A[1]'].style.color = "black";
		document.dqtsForm.elements['dD4A[1]'].style.backgroundColor = "white";

	}

	// DD4A[2]
	if ((document.dqtsForm.elements['dD4A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dD4A[2]'].value))) {
		document.dqtsForm.elements['dD4A[2]'].style.color = "red";
		document.dqtsForm.elements['dD4A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		DD4A_2 = true;
	} else if ((document.dqtsForm.elements['dD4A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dD4A[2]'].value))
			&& (document.dqtsForm.elements['dD4A[2]'].value.length > 2)) {
		document.dqtsForm.elements['dD4A[2]'].style.color = "red";
		document.dqtsForm.elements['dD4A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		DD4A_2 = true;
	} else {
		document.dqtsForm.elements['dD4A[2]'].style.color = "black";
		document.dqtsForm.elements['dD4A[2]'].style.backgroundColor = "white";

	}

	// DD4ACMNT
	if ((document.dqtsForm.elements['dD4ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['dD4ACMNT'].value))) {
		document.dqtsForm.elements['dD4ACMNT'].style.color = "red";
		document.dqtsForm.elements['dD4ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		DD4A_CMNT = true;
	} else if ((document.dqtsForm.elements['dD4ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['dD4ACMNT'].value))
			&& (document.dqtsForm.elements['dD4ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['dD4ACMNT'].style.color = "red";
		document.dqtsForm.elements['dD4ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		DD4A_CMNT = true;
	} else {
		document.dqtsForm.elements['dD4ACMNT'].style.color = "black";
		document.dqtsForm.elements['dD4ACMNT'].style.backgroundColor = "white";

	}

	// DD5A
	// DD5A[0]
	if ((document.dqtsForm.elements['dD5A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dD5A[0]'].value))) {
		document.dqtsForm.elements['dD5A[0]'].style.color = "red";
		document.dqtsForm.elements['dD5A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		DD5A_0 = true;
	} else if ((document.dqtsForm.elements['dD5A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dD5A[0]'].value))
			&& (document.dqtsForm.elements['dD5A[0]'].value.length > 2)) {
		document.dqtsForm.elements['dD5A[0]'].style.color = "red";
		document.dqtsForm.elements['dD5A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		DD5A_0 = true;
	} else {
		document.dqtsForm.elements['dD5A[0]'].style.color = "black";
		document.dqtsForm.elements['dD5A[0]'].style.backgroundColor = "white";

	}

	// DD5A[1]
	if ((document.dqtsForm.elements['dD5A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dD5A[1]'].value))) {
		document.dqtsForm.elements['dD5A[1]'].style.color = "red";
		document.dqtsForm.elements['dD5A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		DD5A_1 = true;
	} else if ((document.dqtsForm.elements['dD5A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dD5A[1]'].value))
			&& (document.dqtsForm.elements['dD5A[1]'].value.length > 2)) {
		document.dqtsForm.elements['dD5A[1]'].style.color = "red";
		document.dqtsForm.elements['dD5A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		DD5A_1 = true;
	} else {
		document.dqtsForm.elements['dD5A[1]'].style.color = "black";
		document.dqtsForm.elements['dD5A[1]'].style.backgroundColor = "white";

	}

	// DD5A[2]
	if ((document.dqtsForm.elements['dD5A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dD5A[2]'].value))) {
		document.dqtsForm.elements['dD5A[2]'].style.color = "red";
		document.dqtsForm.elements['dD5A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		DD5A_2 = true;
	} else if ((document.dqtsForm.elements['dD5A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dD5A[2]'].value))
			&& (document.dqtsForm.elements['dD5A[2]'].value.length > 2)) {
		document.dqtsForm.elements['dD5A[2]'].style.color = "red";
		document.dqtsForm.elements['dD5A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		DD5A_2 = true;
	} else {
		document.dqtsForm.elements['dD5A[2]'].style.color = "black";
		document.dqtsForm.elements['dD5A[2]'].style.backgroundColor = "white";

	}

	// DD5ACMNT
	if ((document.dqtsForm.elements['dD5ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['dD5ACMNT'].value))) {
		document.dqtsForm.elements['dD5ACMNT'].style.color = "red";
		document.dqtsForm.elements['dD5ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		DD5A_CMNT = true;
	} else if ((document.dqtsForm.elements['dD5ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['dD5ACMNT'].value))
			&& (document.dqtsForm.elements['dD5ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['dD5ACMNT'].style.color = "red";
		document.dqtsForm.elements['dD5ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		DD5A_CMNT = true;
	} else {
		document.dqtsForm.elements['dD5ACMNT'].style.color = "black";
		document.dqtsForm.elements['dD5ACMNT'].style.backgroundColor = "white";

	}

	// DD6A
	// DD6A[0]
	if ((document.dqtsForm.elements['dD6A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dD6A[0]'].value))) {
		document.dqtsForm.elements['dD6A[0]'].style.color = "red";
		document.dqtsForm.elements['dD6A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		DD6A_0 = true;
	} else if ((document.dqtsForm.elements['dD6A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dD6A[0]'].value))
			&& (document.dqtsForm.elements['dD6A[0]'].value.length > 2)) {
		document.dqtsForm.elements['dD6A[0]'].style.color = "red";
		document.dqtsForm.elements['dD6A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		DD6A_0 = true;
	} else {
		document.dqtsForm.elements['dD6A[0]'].style.color = "black";
		document.dqtsForm.elements['dD6A[0]'].style.backgroundColor = "white";

	}

	// DD6A[1]
	if ((document.dqtsForm.elements['dD6A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dD6A[1]'].value))) {
		document.dqtsForm.elements['dD6A[1]'].style.color = "red";
		document.dqtsForm.elements['dD6A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		DD6A_1 = true;
	} else if ((document.dqtsForm.elements['dD6A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dD6A[1]'].value))
			&& (document.dqtsForm.elements['dD6A[1]'].value.length > 2)) {
		document.dqtsForm.elements['dD6A[1]'].style.color = "red";
		document.dqtsForm.elements['dD6A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		DD6A_1 = true;
	} else {
		document.dqtsForm.elements['dD6A[1]'].style.color = "black";
		document.dqtsForm.elements['dD6A[1]'].style.backgroundColor = "white";

	}

	// DD6A[2]
	if ((document.dqtsForm.elements['dD6A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dD6A[2]'].value))) {
		document.dqtsForm.elements['dD6A[2]'].style.color = "red";
		document.dqtsForm.elements['dD6A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		DD6A_2 = true;
	} else if ((document.dqtsForm.elements['dD6A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dD6A[2]'].value))
			&& (document.dqtsForm.elements['dD6A[2]'].value.length > 2)) {
		document.dqtsForm.elements['dD6A[2]'].style.color = "red";
		document.dqtsForm.elements['dD6A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		DD6A_2 = true;
	} else {
		document.dqtsForm.elements['dD6A[2]'].style.color = "black";
		document.dqtsForm.elements['dD6A[2]'].style.backgroundColor = "white";

	}

	// DD6ACMNT
	if ((document.dqtsForm.elements['dD6ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['dD6ACMNT'].value))) {
		document.dqtsForm.elements['dD6ACMNT'].style.color = "red";
		document.dqtsForm.elements['dD6ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		DD6A_CMNT = true;
	} else if ((document.dqtsForm.elements['dD6ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['dD6ACMNT'].value))
			&& (document.dqtsForm.elements['dD6ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['dD6ACMNT'].style.color = "red";
		document.dqtsForm.elements['dD6ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		DD6A_CMNT = true;
	} else {
		document.dqtsForm.elements['dD6ACMNT'].style.color = "black";
		document.dqtsForm.elements['dD6ACMNT'].style.backgroundColor = "white";

	}

	// DD7A
	// DD7A[0]
	if ((document.dqtsForm.elements['dD7A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dD7A[0]'].value))) {
		document.dqtsForm.elements['dD7A[0]'].style.color = "red";
		document.dqtsForm.elements['dD7A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		DD7A_0 = true;
	} else if ((document.dqtsForm.elements['dD7A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dD7A[0]'].value))
			&& (document.dqtsForm.elements['dD7A[0]'].value.length > 2)) {
		document.dqtsForm.elements['dD7A[0]'].style.color = "red";
		document.dqtsForm.elements['dD7A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		DD7A_0 = true;
	} else {
		document.dqtsForm.elements['dD7A[0]'].style.color = "black";
		document.dqtsForm.elements['dD7A[0]'].style.backgroundColor = "white";

	}

	// DD7A[1]
	if ((document.dqtsForm.elements['dD7A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dD7A[1]'].value))) {
		document.dqtsForm.elements['dD7A[1]'].style.color = "red";
		document.dqtsForm.elements['dD7A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		DD7A_1 = true;
	} else if ((document.dqtsForm.elements['dD7A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dD7A[1]'].value))
			&& (document.dqtsForm.elements['dD7A[1]'].value.length > 2)) {
		document.dqtsForm.elements['dD7A[1]'].style.color = "red";
		document.dqtsForm.elements['dD7A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		DD7A_1 = true;
	} else {
		document.dqtsForm.elements['dD7A[1]'].style.color = "black";
		document.dqtsForm.elements['dD7A[1]'].style.backgroundColor = "white";

	}

	// DD7A[2]
	if ((document.dqtsForm.elements['dD7A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dD7A[2]'].value))) {
		document.dqtsForm.elements['dD7A[2]'].style.color = "red";
		document.dqtsForm.elements['dD7A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		DD7A_2 = true;
	} else if ((document.dqtsForm.elements['dD7A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dD7A[2]'].value))
			&& (document.dqtsForm.elements['dD7A[2]'].value.length > 2)) {
		document.dqtsForm.elements['dD7A[2]'].style.color = "red";
		document.dqtsForm.elements['dD7A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		DD7A_2 = true;
	} else {
		document.dqtsForm.elements['dD7A[2]'].style.color = "black";
		document.dqtsForm.elements['dD7A[2]'].style.backgroundColor = "white";

	}

	// DD7ACMNT
	if ((document.dqtsForm.elements['dD7ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['dD7ACMNT'].value))) {
		document.dqtsForm.elements['dD7ACMNT'].style.color = "red";
		document.dqtsForm.elements['dD7ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		DD7A_CMNT = true;
	} else if ((document.dqtsForm.elements['dD7ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['dD7ACMNT'].value))
			&& (document.dqtsForm.elements['dD7ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['dD7ACMNT'].style.color = "red";
		document.dqtsForm.elements['dD7ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		DD7A_CMNT = true;
	} else {
		document.dqtsForm.elements['dD7ACMNT'].style.color = "black";
		document.dqtsForm.elements['dD7ACMNT'].style.backgroundColor = "white";

	}

	// DD8A
	// DD8A[0]
	if ((document.dqtsForm.elements['dD8A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dD8A[0]'].value))) {
		document.dqtsForm.elements['dD8A[0]'].style.color = "red";
		document.dqtsForm.elements['dD8A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		DD8A_0 = true;
	} else if ((document.dqtsForm.elements['dD8A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dD8A[0]'].value))
			&& (document.dqtsForm.elements['dD8A[0]'].value.length > 2)) {
		document.dqtsForm.elements['dD8A[0]'].style.color = "red";
		document.dqtsForm.elements['dD8A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		DD8A_0 = true;
	} else {
		document.dqtsForm.elements['dD8A[0]'].style.color = "black";
		document.dqtsForm.elements['dD8A[0]'].style.backgroundColor = "white";

	}

	// DD8A[1]
	if ((document.dqtsForm.elements['dD8A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dD8A[1]'].value))) {
		document.dqtsForm.elements['dD8A[1]'].style.color = "red";
		document.dqtsForm.elements['dD8A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		DD8A_1 = true;
	} else if ((document.dqtsForm.elements['dD8A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dD8A[1]'].value))
			&& (document.dqtsForm.elements['dD8A[1]'].value.length > 2)) {
		document.dqtsForm.elements['dD8A[1]'].style.color = "red";
		document.dqtsForm.elements['dD8A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		DD8A_1 = true;
	} else {
		document.dqtsForm.elements['dD8A[1]'].style.color = "black";
		document.dqtsForm.elements['dD8A[1]'].style.backgroundColor = "white";

	}

	// DD8A[2]
	if ((document.dqtsForm.elements['dD8A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['dD8A[2]'].value))) {
		document.dqtsForm.elements['dD8A[2]'].style.color = "red";
		document.dqtsForm.elements['dD8A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		DD8A_2 = true;
	} else if ((document.dqtsForm.elements['dD8A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['dD8A[2]'].value))
			&& (document.dqtsForm.elements['dD8A[2]'].value.length > 2)) {
		document.dqtsForm.elements['dD8A[2]'].style.color = "red";
		document.dqtsForm.elements['dD8A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		DD8A_2 = true;
	} else {
		document.dqtsForm.elements['dD8A[2]'].style.color = "black";
		document.dqtsForm.elements['dD8A[2]'].style.backgroundColor = "white";

	}

	// DD8ADESC
	if ((document.dqtsForm.elements['dD8ADESC'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['dD8ADESC'].value))) {
		document.dqtsForm.elements['dD8ADESC'].style.color = "red";
		document.dqtsForm.elements['dD8ADESC'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		DD8A_DESC = true;
	} else if ((document.dqtsForm.elements['dD8ADESC'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['dD8ADESC'].value))
			&& (document.dqtsForm.elements['dD8ADESC'].value.length > 255)) {
		document.dqtsForm.elements['dD8ADESC'].style.color = "red";
		document.dqtsForm.elements['dD8ADESC'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		DD8A_DESC = true;
	} else {
		document.dqtsForm.elements['dD8ADESC'].style.color = "black";
		document.dqtsForm.elements['dD8ADESC'].style.backgroundColor = "white";

	}

	// EDSN1A
	// EDSN1A[0]
	if ((document.dqtsForm.elements['eDSN1A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN1A[0]'].value))) {
		document.dqtsForm.elements['eDSN1A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN1A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		EDSN1A_0 = true;
	} else if ((document.dqtsForm.elements['eDSN1A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN1A[0]'].value))
			&& (document.dqtsForm.elements['eDSN1A[0]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN1A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN1A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		EDSN1A_0 = true;
	} else {
		document.dqtsForm.elements['eDSN1A[0]'].style.color = "black";
		document.dqtsForm.elements['eDSN1A[0]'].style.backgroundColor = "white";

	}

	// EDSN1A[1]
	if ((document.dqtsForm.elements['eDSN1A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN1A[1]'].value))) {
		document.dqtsForm.elements['eDSN1A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN1A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		EDSN1A_1 = true;
	} else if ((document.dqtsForm.elements['eDSN1A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN1A[1]'].value))
			&& (document.dqtsForm.elements['eDSN1A[1]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN1A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN1A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		EDSN1A_1 = true;
	} else {
		document.dqtsForm.elements['eDSN1A[1]'].style.color = "black";
		document.dqtsForm.elements['eDSN1A[1]'].style.backgroundColor = "white";

	}

	// EDSN1A[2]
	if ((document.dqtsForm.elements['eDSN1A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN1A[2]'].value))) {
		document.dqtsForm.elements['eDSN1A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN1A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		EDSN1A_2 = true;
	} else if ((document.dqtsForm.elements['eDSN1A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN1A[2]'].value))
			&& (document.dqtsForm.elements['eDSN1A[2]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN1A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN1A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		EDSN1A_2 = true;
	} else {
		document.dqtsForm.elements['eDSN1A[2]'].style.color = "black";
		document.dqtsForm.elements['eDSN1A[2]'].style.backgroundColor = "white";

	}

	// EDSN1ACMNT
	if ((document.dqtsForm.elements['eDSN1ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN1ACMNT'].value))) {
		document.dqtsForm.elements['eDSN1ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN1ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		EDSN1A_CMNT = true;
	} else if ((document.dqtsForm.elements['eDSN1ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN1ACMNT'].value))
			&& (document.dqtsForm.elements['eDSN1ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['eDSN1ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN1ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		EDSN1A_CMNT = true;
	} else {
		document.dqtsForm.elements['eDSN1ACMNT'].style.color = "black";
		document.dqtsForm.elements['eDSN1ACMNT'].style.backgroundColor = "white";

	}

	// EDSN2A
	// EDSN2A[0]
	if ((document.dqtsForm.elements['eDSN2A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN2A[0]'].value))) {
		document.dqtsForm.elements['eDSN2A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN2A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		EDSN2A_0 = true;
	} else if ((document.dqtsForm.elements['eDSN2A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN2A[0]'].value))
			&& (document.dqtsForm.elements['eDSN2A[0]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN2A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN2A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		EDSN2A_0 = true;
	} else {
		document.dqtsForm.elements['eDSN2A[0]'].style.color = "black";
		document.dqtsForm.elements['eDSN2A[0]'].style.backgroundColor = "white";

	}

	// EDSN2A[1]
	if ((document.dqtsForm.elements['eDSN2A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN2A[1]'].value))) {
		document.dqtsForm.elements['eDSN2A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN2A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		EDSN2A_1 = true;
	} else if ((document.dqtsForm.elements['eDSN2A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN2A[1]'].value))
			&& (document.dqtsForm.elements['eDSN2A[1]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN2A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN2A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		EDSN2A_1 = true;
	} else {
		document.dqtsForm.elements['eDSN2A[1]'].style.color = "black";
		document.dqtsForm.elements['eDSN2A[1]'].style.backgroundColor = "white";

	}

	// EDSN2A[2]
	if ((document.dqtsForm.elements['eDSN2A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN2A[2]'].value))) {
		document.dqtsForm.elements['eDSN2A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN2A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		EDSN2A_2 = true;
	} else if ((document.dqtsForm.elements['eDSN2A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN2A[2]'].value))
			&& (document.dqtsForm.elements['eDSN2A[2]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN2A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN2A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		EDSN2A_2 = true;
	} else {
		document.dqtsForm.elements['eDSN2A[2]'].style.color = "black";
		document.dqtsForm.elements['eDSN2A[2]'].style.backgroundColor = "white";

	}

	// EDSN2ACMNT
	if ((document.dqtsForm.elements['eDSN2ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN2ACMNT'].value))) {
		document.dqtsForm.elements['eDSN2ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN2ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		EDSN2A_CMNT = true;
	} else if ((document.dqtsForm.elements['eDSN2ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN2ACMNT'].value))
			&& (document.dqtsForm.elements['eDSN1ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['eDSN2ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN2ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		EDSN2A_CMNT = true;
	} else {
		document.dqtsForm.elements['eDSN2ACMNT'].style.color = "black";
		document.dqtsForm.elements['eDSN2ACMNT'].style.backgroundColor = "white";

	}

	// EDSN3A
	// EDSN3A[0]
	if ((document.dqtsForm.elements['eDSN3A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN3A[0]'].value))) {
		document.dqtsForm.elements['eDSN3A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN3A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		EDSN3A_0 = true;
	} else if ((document.dqtsForm.elements['eDSN3A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN3A[0]'].value))
			&& (document.dqtsForm.elements['eDSN3A[0]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN3A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN3A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		EDSN3A_0 = true;
	} else {
		document.dqtsForm.elements['eDSN3A[0]'].style.color = "black";
		document.dqtsForm.elements['eDSN3A[0]'].style.backgroundColor = "white";

	}

	// EDSN3A[1]
	if ((document.dqtsForm.elements['eDSN3A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN3A[1]'].value))) {
		document.dqtsForm.elements['eDSN3A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN3A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		EDSN3A_1 = true;
	} else if ((document.dqtsForm.elements['eDSN3A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN3A[1]'].value))
			&& (document.dqtsForm.elements['eDSN3A[1]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN3A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN3A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		EDSN3A_1 = true;
	} else {
		document.dqtsForm.elements['eDSN3A[1]'].style.color = "black";
		document.dqtsForm.elements['eDSN3A[1]'].style.backgroundColor = "white";

	}

	// EDSN3A[2]
	if ((document.dqtsForm.elements['eDSN3A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN3A[2]'].value))) {
		document.dqtsForm.elements['eDSN3A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN3A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		EDSN3A_2 = true;
	} else if ((document.dqtsForm.elements['eDSN3A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN3A[2]'].value))
			&& (document.dqtsForm.elements['eDSN3A[2]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN3A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN3A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		EDSN3A_2 = true;
	} else {
		document.dqtsForm.elements['eDSN3A[2]'].style.color = "black";
		document.dqtsForm.elements['eDSN3A[2]'].style.backgroundColor = "white";

	}

	// EDSN3ACMNT
	if ((document.dqtsForm.elements['eDSN3ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN3ACMNT'].value))) {
		document.dqtsForm.elements['eDSN3ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN3ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		EDSN3A_CMNT = true;
	} else if ((document.dqtsForm.elements['eDSN3ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN3ACMNT'].value))
			&& (document.dqtsForm.elements['eDSN3ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['eDSN3ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN3ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		EDSN3A_CMNT = true;
	} else {
		document.dqtsForm.elements['eDSN3ACMNT'].style.color = "black";
		document.dqtsForm.elements['eDSN3ACMNT'].style.backgroundColor = "white";

	}

	// EDSN4A
	// EDSN4A[0]
	if ((document.dqtsForm.elements['eDSN4A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN4A[0]'].value))) {
		document.dqtsForm.elements['eDSN4A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN4A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		EDSN4A_0 = true;
	} else if ((document.dqtsForm.elements['eDSN4A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN4A[0]'].value))
			&& (document.dqtsForm.elements['eDSN4A[0]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN4A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN4A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		EDSN4A_0 = true;
	} else {
		document.dqtsForm.elements['eDSN4A[0]'].style.color = "black";
		document.dqtsForm.elements['eDSN4A[0]'].style.backgroundColor = "white";

	}

	// EDSN4A[1]
	if ((document.dqtsForm.elements['eDSN4A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN4A[1]'].value))) {
		document.dqtsForm.elements['eDSN4A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN4A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		EDSN4A_1 = true;
	} else if ((document.dqtsForm.elements['eDSN4A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN4A[1]'].value))
			&& (document.dqtsForm.elements['eDSN4A[1]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN4A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN4A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		EDSN4A_1 = true;
	} else {
		document.dqtsForm.elements['eDSN4A[1]'].style.color = "black";
		document.dqtsForm.elements['eDSN4A[1]'].style.backgroundColor = "white";

	}

	// EDSN4A[2]
	if ((document.dqtsForm.elements['eDSN4A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN4A[2]'].value))) {
		document.dqtsForm.elements['eDSN4A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN4A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		EDSN4A_2 = true;
	} else if ((document.dqtsForm.elements['eDSN4A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN4A[2]'].value))
			&& (document.dqtsForm.elements['eDSN4A[2]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN4A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN4A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		EDSN4A_2 = true;
	} else {
		document.dqtsForm.elements['eDSN4A[2]'].style.color = "black";
		document.dqtsForm.elements['eDSN4A[2]'].style.backgroundColor = "white";

	}

	// EDSN4ACMNT
	if ((document.dqtsForm.elements['eDSN4ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN4ACMNT'].value))) {
		document.dqtsForm.elements['eDSN4ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN4ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		EDSN4A_CMNT = true;
	} else if ((document.dqtsForm.elements['eDSN4ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN4ACMNT'].value))
			&& (document.dqtsForm.elements['eDSN4ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['eDSN4ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN4ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		EDSN4A_CMNT = true;
	} else {
		document.dqtsForm.elements['eDSN4ACMNT'].style.color = "black";
		document.dqtsForm.elements['eDSN4ACMNT'].style.backgroundColor = "white";

	}

	// EDSN5A
	// EDSN5A[0]
	if ((document.dqtsForm.elements['eDSN5A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN5A[0]'].value))) {
		document.dqtsForm.elements['eDSN5A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN5A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		EDSN5A_0 = true;
	} else if ((document.dqtsForm.elements['eDSN5A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN5A[0]'].value))
			&& (document.dqtsForm.elements['eDSN5A[0]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN5A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN5A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		EDSN5A_0 = true;
	} else {
		document.dqtsForm.elements['eDSN5A[0]'].style.color = "black";
		document.dqtsForm.elements['eDSN5A[0]'].style.backgroundColor = "white";

	}

	// EDSN5A[1]
	if ((document.dqtsForm.elements['eDSN5A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN5A[1]'].value))) {
		document.dqtsForm.elements['eDSN5A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN5A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		EDSN5A_1 = true;
	} else if ((document.dqtsForm.elements['eDSN5A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN5A[1]'].value))
			&& (document.dqtsForm.elements['eDSN5A[1]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN5A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN5A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		EDSN5A_1 = true;
	} else {
		document.dqtsForm.elements['eDSN5A[1]'].style.color = "black";
		document.dqtsForm.elements['eDSN5A[1]'].style.backgroundColor = "white";

	}

	// EDSN5A[2]
	if ((document.dqtsForm.elements['eDSN5A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN5A[2]'].value))) {
		document.dqtsForm.elements['eDSN5A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN5A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		EDSN5A_2 = true;
	} else if ((document.dqtsForm.elements['eDSN5A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN5A[2]'].value))
			&& (document.dqtsForm.elements['eDSN5A[2]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN5A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN5A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		EDSN5A_2 = true;
	} else {
		document.dqtsForm.elements['eDSN5A[2]'].style.color = "black";
		document.dqtsForm.elements['eDSN5A[2]'].style.backgroundColor = "white";

	}

	// EDSN5ACMNT
	if ((document.dqtsForm.elements['eDSN5ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN5ACMNT'].value))) {
		document.dqtsForm.elements['eDSN5ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN5ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		EDSN5A_CMNT = true;
	} else if ((document.dqtsForm.elements['eDSN5ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN5ACMNT'].value))
			&& (document.dqtsForm.elements['eDSN5ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['eDSN5ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN5ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		EDSN5A_CMNT = true;
	} else {
		document.dqtsForm.elements['eDSN5ACMNT'].style.color = "black";
		document.dqtsForm.elements['eDSN5ACMNT'].style.backgroundColor = "white";

	}

	// EDSN6A
	// EDSN6A[0]
	if ((document.dqtsForm.elements['eDSN6A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN6A[0]'].value))) {
		document.dqtsForm.elements['eDSN6A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN6A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		EDSN6A_0 = true;
	} else if ((document.dqtsForm.elements['eDSN6A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN6A[0]'].value))
			&& (document.dqtsForm.elements['eDSN6A[0]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN6A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN6A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		EDSN6A_0 = true;
	} else {
		document.dqtsForm.elements['eDSN6A[0]'].style.color = "black";
		document.dqtsForm.elements['eDSN6A[0]'].style.backgroundColor = "white";

	}

	// EDSN6A[1]
	if ((document.dqtsForm.elements['eDSN6A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN6A[1]'].value))) {
		document.dqtsForm.elements['eDSN6A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN6A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		EDSN6A_1 = true;
	} else if ((document.dqtsForm.elements['eDSN6A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN6A[1]'].value))
			&& (document.dqtsForm.elements['eDSN6A[1]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN6A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN6A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		EDSN6A_1 = true;
	} else {
		document.dqtsForm.elements['eDSN6A[1]'].style.color = "black";
		document.dqtsForm.elements['eDSN6A[1]'].style.backgroundColor = "white";

	}

	// EDSN6A[2]
	if ((document.dqtsForm.elements['eDSN6A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN6A[2]'].value))) {
		document.dqtsForm.elements['eDSN6A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN6A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		EDSN6A_2 = true;
	} else if ((document.dqtsForm.elements['eDSN6A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN6A[2]'].value))
			&& (document.dqtsForm.elements['eDSN6A[2]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN6A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN6A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		EDSN6A_2 = true;
	} else {
		document.dqtsForm.elements['eDSN6A[2]'].style.color = "black";
		document.dqtsForm.elements['eDSN6A[2]'].style.backgroundColor = "white";

	}

	// EDSN6ACMNT
	if ((document.dqtsForm.elements['eDSN6ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN6ACMNT'].value))) {
		document.dqtsForm.elements['eDSN6ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN6ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		EDSN6A_CMNT = true;
	} else if ((document.dqtsForm.elements['eDSN6ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN6ACMNT'].value))
			&& (document.dqtsForm.elements['eDSN6ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['eDSN6ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN6ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		EDSN6A_CMNT = true;
	} else {
		document.dqtsForm.elements['eDSN6ACMNT'].style.color = "black";
		document.dqtsForm.elements['eDSN6ACMNT'].style.backgroundColor = "white";

	}

	// EDSN7A
	// EDSN7A[0]
	if ((document.dqtsForm.elements['eDSN7A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN7A[0]'].value))) {
		document.dqtsForm.elements['eDSN7A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN7A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		EDSN7A_0 = true;
	} else if ((document.dqtsForm.elements['eDSN7A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN7A[0]'].value))
			&& (document.dqtsForm.elements['eDSN7A[0]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN7A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN7A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		EDSN7A_0 = true;
	} else {
		document.dqtsForm.elements['eDSN7A[0]'].style.color = "black";
		document.dqtsForm.elements['eDSN7A[0]'].style.backgroundColor = "white";

	}

	// EDSN7A[1]
	if ((document.dqtsForm.elements['eDSN7A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN7A[1]'].value))) {
		document.dqtsForm.elements['eDSN7A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN7A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		EDSN7A_1 = true;
	} else if ((document.dqtsForm.elements['eDSN7A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN7A[1]'].value))
			&& (document.dqtsForm.elements['eDSN7A[1]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN7A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN7A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		EDSN7A_1 = true;
	} else {
		document.dqtsForm.elements['eDSN7A[1]'].style.color = "black";
		document.dqtsForm.elements['eDSN7A[1]'].style.backgroundColor = "white";

	}

	// EDSN7A[2]
	if ((document.dqtsForm.elements['eDSN7A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN7A[2]'].value))) {
		document.dqtsForm.elements['eDSN7A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN7A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		EDSN7A_2 = true;
	} else if ((document.dqtsForm.elements['eDSN7A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN7A[2]'].value))
			&& (document.dqtsForm.elements['eDSN7A[2]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN7A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN7A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		EDSN7A_2 = true;
	} else {
		document.dqtsForm.elements['eDSN7A[2]'].style.color = "black";
		document.dqtsForm.elements['eDSN7A[2]'].style.backgroundColor = "white";

	}

	// EDSN7ACMNT
	if ((document.dqtsForm.elements['eDSN7ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN7ACMNT'].value))) {
		document.dqtsForm.elements['eDSN7ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN7ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		EDSN7A_CMNT = true;
	} else if ((document.dqtsForm.elements['eDSN7ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN7ACMNT'].value))
			&& (document.dqtsForm.elements['eDSN7ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['eDSN7ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN7ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		EDSN7A_CMNT = true;
	} else {
		document.dqtsForm.elements['eDSN7ACMNT'].style.color = "black";
		document.dqtsForm.elements['eDSN7ACMNT'].style.backgroundColor = "white";

	}

	// EDSN8A
	// EDSN8A[0]
	if ((document.dqtsForm.elements['eDSN8A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN8A[0]'].value))) {
		document.dqtsForm.elements['eDSN8A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN8A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		EDSN8A_0 = true;
	} else if ((document.dqtsForm.elements['eDSN8A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN8A[0]'].value))
			&& (document.dqtsForm.elements['eDSN8A[0]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN8A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN8A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		EDSN8A_0 = true;
	} else {
		document.dqtsForm.elements['eDSN8A[0]'].style.color = "black";
		document.dqtsForm.elements['eDSN8A[0]'].style.backgroundColor = "white";

	}

	// EDSN8A[1]
	if ((document.dqtsForm.elements['eDSN8A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN8A[1]'].value))) {
		document.dqtsForm.elements['eDSN8A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN8A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		EDSN8A_1 = true;
	} else if ((document.dqtsForm.elements['eDSN8A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN8A[1]'].value))
			&& (document.dqtsForm.elements['eDSN8A[1]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN8A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN8A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		EDSN8A_1 = true;
	} else {
		document.dqtsForm.elements['eDSN8A[1]'].style.color = "black";
		document.dqtsForm.elements['eDSN8A[1]'].style.backgroundColor = "white";

	}

	// EDSN8A[2]
	if ((document.dqtsForm.elements['eDSN8A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN8A[2]'].value))) {
		document.dqtsForm.elements['eDSN8A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN8A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		EDSN8A_2 = true;
	} else if ((document.dqtsForm.elements['eDSN8A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN8A[2]'].value))
			&& (document.dqtsForm.elements['eDSN8A[2]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN8A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN8A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		EDSN8A_2 = true;
	} else {
		document.dqtsForm.elements['eDSN8A[2]'].style.color = "black";
		document.dqtsForm.elements['eDSN8A[2]'].style.backgroundColor = "white";

	}

	// EDSN8ACMNT
	if ((document.dqtsForm.elements['eDSN8ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN8ACMNT'].value))) {
		document.dqtsForm.elements['eDSN8ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN8ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		EDSN8A_CMNT = true;
	} else if ((document.dqtsForm.elements['eDSN8ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN8ACMNT'].value))
			&& (document.dqtsForm.elements['eDSN8ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['eDSN8ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN8ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		EDSN8A_CMNT = true;
	} else {
		document.dqtsForm.elements['eDSN8ACMNT'].style.color = "black";
		document.dqtsForm.elements['eDSN8ACMNT'].style.backgroundColor = "white";

	}

	// EDSN9A
	// EDSN9A[0]
	if ((document.dqtsForm.elements['eDSN9A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN9A[0]'].value))) {
		document.dqtsForm.elements['eDSN9A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN9A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		EDSN9A_0 = true;
	} else if ((document.dqtsForm.elements['eDSN9A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN9A[0]'].value))
			&& (document.dqtsForm.elements['eDSN9A[0]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN9A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN9A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		EDSN9A_0 = true;
	} else {
		document.dqtsForm.elements['eDSN9A[0]'].style.color = "black";
		document.dqtsForm.elements['eDSN9A[0]'].style.backgroundColor = "white";

	}

	// EDSN9A[1]
	if ((document.dqtsForm.elements['eDSN9A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN9A[1]'].value))) {
		document.dqtsForm.elements['eDSN9A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN9A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		EDSN9A_1 = true;
	} else if ((document.dqtsForm.elements['eDSN9A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN9A[1]'].value))
			&& (document.dqtsForm.elements['eDSN9A[1]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN9A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN9A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		EDSN9A_1 = true;
	} else {
		document.dqtsForm.elements['eDSN9A[1]'].style.color = "black";
		document.dqtsForm.elements['eDSN9A[1]'].style.backgroundColor = "white";

	}

	// EDSN9A[2]
	if ((document.dqtsForm.elements['eDSN9A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN9A[2]'].value))) {
		document.dqtsForm.elements['eDSN9A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN9A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		EDSN9A_2 = true;
	} else if ((document.dqtsForm.elements['eDSN9A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN9A[2]'].value))
			&& (document.dqtsForm.elements['eDSN9A[2]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN9A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN9A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		EDSN9A_2 = true;
	} else {
		document.dqtsForm.elements['eDSN9A[2]'].style.color = "black";
		document.dqtsForm.elements['eDSN9A[2]'].style.backgroundColor = "white";

	}

	// EDSN9ACMNT
	if ((document.dqtsForm.elements['eDSN9ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN9ACMNT'].value))) {
		document.dqtsForm.elements['eDSN9ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN9ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		EDSN9A_CMNT = true;
	} else if ((document.dqtsForm.elements['eDSN9ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN9ACMNT'].value))
			&& (document.dqtsForm.elements['eDSN9ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['eDSN9ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN9ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		EDSN9A_CMNT = true;
	} else {
		document.dqtsForm.elements['eDSN9ACMNT'].style.color = "black";
		document.dqtsForm.elements['eDSN9ACMNT'].style.backgroundColor = "white";

	}

	// EDSN10A
	// EDSN10A[0]
	if ((document.dqtsForm.elements['eDSN10A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN10A[0]'].value))) {
		document.dqtsForm.elements['eDSN10A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN10A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		EDSN10A_0 = true;
	} else if ((document.dqtsForm.elements['eDSN10A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN10A[0]'].value))
			&& (document.dqtsForm.elements['eDSN10A[0]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN10A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN10A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		EDSN10A_0 = true;
	} else {
		document.dqtsForm.elements['eDSN10A[0]'].style.color = "black";
		document.dqtsForm.elements['eDSN10A[0]'].style.backgroundColor = "white";

	}

	// EDSN10A[1]
	if ((document.dqtsForm.elements['eDSN10A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN10A[1]'].value))) {
		document.dqtsForm.elements['eDSN10A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN10A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		EDSN10A_1 = true;
	} else if ((document.dqtsForm.elements['eDSN10A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN10A[1]'].value))
			&& (document.dqtsForm.elements['eDSN10A[1]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN10A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN10A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		EDSN10A_1 = true;
	} else {
		document.dqtsForm.elements['eDSN10A[1]'].style.color = "black";
		document.dqtsForm.elements['eDSN10A[1]'].style.backgroundColor = "white";

	}

	// EDSN10A[2]
	if ((document.dqtsForm.elements['eDSN10A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN10A[2]'].value))) {
		document.dqtsForm.elements['eDSN10A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN10A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		EDSN10A_2 = true;
	} else if ((document.dqtsForm.elements['eDSN10A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN10A[2]'].value))
			&& (document.dqtsForm.elements['eDSN10A[2]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN10A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN10A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		EDSN10A_2 = true;
	} else {
		document.dqtsForm.elements['eDSN10A[2]'].style.color = "black";
		document.dqtsForm.elements['eDSN10A[2]'].style.backgroundColor = "white";

	}

	// EDSN10ACMNT
	if ((document.dqtsForm.elements['eDSN10ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN10ACMNT'].value))) {
		document.dqtsForm.elements['eDSN10ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN10ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		EDSN10A_CMNT = true;
	} else if ((document.dqtsForm.elements['eDSN10ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN10ACMNT'].value))
			&& (document.dqtsForm.elements['eDSN10ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['eDSN10ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN10ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		EDSN10A_CMNT = true;
	} else {
		document.dqtsForm.elements['eDSN10ACMNT'].style.color = "black";
		document.dqtsForm.elements['eDSN10ACMNT'].style.backgroundColor = "white";

	}

	// EDSN11A
	// EDSN11A[0]
	if ((document.dqtsForm.elements['eDSN11A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN11A[0]'].value))) {
		document.dqtsForm.elements['eDSN11A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN11A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		EDSN11A_0 = true;
	} else if ((document.dqtsForm.elements['eDSN11A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN11A[0]'].value))
			&& (document.dqtsForm.elements['eDSN11A[0]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN11A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN11A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		EDSN11A_0 = true;
	} else {
		document.dqtsForm.elements['eDSN11A[0]'].style.color = "black";
		document.dqtsForm.elements['eDSN11A[0]'].style.backgroundColor = "white";

	}

	// EDSN11A[1]
	if ((document.dqtsForm.elements['eDSN11A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN11A[1]'].value))) {
		document.dqtsForm.elements['eDSN11A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN11A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		EDSN11A_1 = true;
	} else if ((document.dqtsForm.elements['eDSN11A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN11A[1]'].value))
			&& (document.dqtsForm.elements['eDSN11A[1]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN11A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN11A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		EDSN11A_1 = true;
	} else {
		document.dqtsForm.elements['eDSN11A[1]'].style.color = "black";
		document.dqtsForm.elements['eDSN11A[1]'].style.backgroundColor = "white";

	}

	// EDSN11A[2]
	if ((document.dqtsForm.elements['eDSN11A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN11A[2]'].value))) {
		document.dqtsForm.elements['eDSN11A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN11A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		EDSN11A_2 = true;
	} else if ((document.dqtsForm.elements['eDSN11A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN11A[2]'].value))
			&& (document.dqtsForm.elements['eDSN11A[2]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN11A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN11A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		EDSN11A_2 = true;
	} else {
		document.dqtsForm.elements['eDSN11A[2]'].style.color = "black";
		document.dqtsForm.elements['eDSN11A[2]'].style.backgroundColor = "white";

	}

	// EDSN11ACMNT
	if ((document.dqtsForm.elements['eDSN11ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN11ACMNT'].value))) {
		document.dqtsForm.elements['eDSN11ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN11ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		EDSN11A_CMNT = true;
	} else if ((document.dqtsForm.elements['eDSN11ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN11ACMNT'].value))
			&& (document.dqtsForm.elements['eDSN11ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['eDSN11ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN11ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		EDSN11A_CMNT = true;
	} else {
		document.dqtsForm.elements['eDSN11ACMNT'].style.color = "black";
		document.dqtsForm.elements['eDSN11ACMNT'].style.backgroundColor = "white";

	}

	// EDSN12A
	// EDSN12A[0]
	if ((document.dqtsForm.elements['eDSN12A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN12A[0]'].value))) {
		document.dqtsForm.elements['eDSN12A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN12A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		EDSN12A_0 = true;
	} else if ((document.dqtsForm.elements['eDSN12A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN12A[0]'].value))
			&& (document.dqtsForm.elements['eDSN12A[0]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN12A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN12A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		EDSN12A_0 = true;
	} else {
		document.dqtsForm.elements['eDSN12A[0]'].style.color = "black";
		document.dqtsForm.elements['eDSN12A[0]'].style.backgroundColor = "white";

	}

	// EDSN12A[1]
	if ((document.dqtsForm.elements['eDSN12A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN12A[1]'].value))) {
		document.dqtsForm.elements['eDSN12A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN12A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		EDSN12A_1 = true;
	} else if ((document.dqtsForm.elements['eDSN12A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN12A[1]'].value))
			&& (document.dqtsForm.elements['eDSN12A[1]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN12A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN12A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		EDSN12A_1 = true;
	} else {
		document.dqtsForm.elements['eDSN12A[1]'].style.color = "black";
		document.dqtsForm.elements['eDSN12A[1]'].style.backgroundColor = "white";

	}

	// EDSN12A[2]
	if ((document.dqtsForm.elements['eDSN12A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN12A[2]'].value))) {
		document.dqtsForm.elements['eDSN12A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN12A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		EDSN12A_2 = true;
	} else if ((document.dqtsForm.elements['eDSN12A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN12A[2]'].value))
			&& (document.dqtsForm.elements['eDSN12A[2]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN12A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN12A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		EDSN12A_2 = true;
	} else {
		document.dqtsForm.elements['eDSN12A[2]'].style.color = "black";
		document.dqtsForm.elements['eDSN12A[2]'].style.backgroundColor = "white";

	}

	// EDSN12ACMNT
	if ((document.dqtsForm.elements['eDSN12ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN12ACMNT'].value))) {
		document.dqtsForm.elements['eDSN12ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN12ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		EDSN12A_CMNT = true;
	} else if ((document.dqtsForm.elements['eDSN12ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN12ACMNT'].value))
			&& (document.dqtsForm.elements['eDSN12ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['eDSN12ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN12ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		EDSN12A_CMNT = true;
	} else {
		document.dqtsForm.elements['eDSN12ACMNT'].style.color = "black";
		document.dqtsForm.elements['eDSN12ACMNT'].style.backgroundColor = "white";

	}

	// EDSN13A
	// EDSN13A[0]
	if ((document.dqtsForm.elements['eDSN13A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN13A[0]'].value))) {
		document.dqtsForm.elements['eDSN13A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN13A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		EDSN13A_0 = true;
	} else if ((document.dqtsForm.elements['eDSN13A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN13A[0]'].value))
			&& (document.dqtsForm.elements['eDSN13A[0]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN13A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN13A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		EDSN13A_0 = true;
	} else {
		document.dqtsForm.elements['eDSN13A[0]'].style.color = "black";
		document.dqtsForm.elements['eDSN13A[0]'].style.backgroundColor = "white";

	}

	// EDSN13A[1]
	if ((document.dqtsForm.elements['eDSN13A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN13A[1]'].value))) {
		document.dqtsForm.elements['eDSN13A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN13A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		EDSN13A_1 = true;
	} else if ((document.dqtsForm.elements['eDSN13A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN13A[1]'].value))
			&& (document.dqtsForm.elements['eDSN13A[1]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN13A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN13A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		EDSN13A_1 = true;
	} else {
		document.dqtsForm.elements['eDSN13A[1]'].style.color = "black";
		document.dqtsForm.elements['eDSN13A[1]'].style.backgroundColor = "white";

	}

	// EDSN13A[2]
	if ((document.dqtsForm.elements['eDSN13A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN13A[2]'].value))) {
		document.dqtsForm.elements['eDSN13A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN13A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		EDSN13A_2 = true;
	} else if ((document.dqtsForm.elements['eDSN13A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN13A[2]'].value))
			&& (document.dqtsForm.elements['eDSN13A[2]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN13A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN13A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		EDSN13A_2 = true;
	} else {
		document.dqtsForm.elements['eDSN13A[2]'].style.color = "black";
		document.dqtsForm.elements['eDSN13A[2]'].style.backgroundColor = "white";

	}

	// EDSN13ACMNT
	if ((document.dqtsForm.elements['eDSN13ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN13ACMNT'].value))) {
		document.dqtsForm.elements['eDSN13ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN13ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		EDSN13A_CMNT = true;
	} else if ((document.dqtsForm.elements['eDSN13ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN13ACMNT'].value))
			&& (document.dqtsForm.elements['eDSN13ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['eDSN13ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN13ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		EDSN13A_CMNT = true;
	} else {
		document.dqtsForm.elements['eDSN13ACMNT'].style.color = "black";
		document.dqtsForm.elements['eDSN13ACMNT'].style.backgroundColor = "white";

	}

	// EDSN14A
	// EDSN14A[0]
	if ((document.dqtsForm.elements['eDSN14A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN14A[0]'].value))) {
		document.dqtsForm.elements['eDSN14A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN14A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		EDSN14A_0 = true;
	} else if ((document.dqtsForm.elements['eDSN14A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN14A[0]'].value))
			&& (document.dqtsForm.elements['eDSN14A[0]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN14A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN14A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		EDSN14A_0 = true;
	} else {
		document.dqtsForm.elements['eDSN14A[0]'].style.color = "black";
		document.dqtsForm.elements['eDSN14A[0]'].style.backgroundColor = "white";

	}

	// EDSN14A[1]
	if ((document.dqtsForm.elements['eDSN14A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN14A[1]'].value))) {
		document.dqtsForm.elements['eDSN14A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN14A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		EDSN14A_1 = true;
	} else if ((document.dqtsForm.elements['eDSN14A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN14A[1]'].value))
			&& (document.dqtsForm.elements['eDSN14A[1]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN14A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN14A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		EDSN14A_1 = true;
	} else {
		document.dqtsForm.elements['eDSN14A[1]'].style.color = "black";
		document.dqtsForm.elements['eDSN14A[1]'].style.backgroundColor = "white";

	}

	// EDSN14A[2]
	if ((document.dqtsForm.elements['eDSN14A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN14A[2]'].value))) {
		document.dqtsForm.elements['eDSN14A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN14A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		EDSN14A_2 = true;
	} else if ((document.dqtsForm.elements['eDSN14A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN14A[2]'].value))
			&& (document.dqtsForm.elements['eDSN14A[2]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN14A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN14A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		EDSN14A_2 = true;
	} else {
		document.dqtsForm.elements['eDSN14A[2]'].style.color = "black";
		document.dqtsForm.elements['eDSN14A[2]'].style.backgroundColor = "white";

	}

	// EDSN14ACMNT
	if ((document.dqtsForm.elements['eDSN14ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN14ACMNT'].value))) {
		document.dqtsForm.elements['eDSN14ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN14ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		EDSN14A_CMNT = true;
	} else if ((document.dqtsForm.elements['eDSN14ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN14ACMNT'].value))
			&& (document.dqtsForm.elements['eDSN14ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['eDSN14ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN14ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		EDSN14A_CMNT = true;
	} else {
		document.dqtsForm.elements['eDSN14ACMNT'].style.color = "black";
		document.dqtsForm.elements['eDSN14ACMNT'].style.backgroundColor = "white";

	}

	// EDSN15A
	// EDSN15A[0]
	if ((document.dqtsForm.elements['eDSN15A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN15A[0]'].value))) {
		document.dqtsForm.elements['eDSN15A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN15A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		EDSN15A_0 = true;
	} else if ((document.dqtsForm.elements['eDSN15A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN15A[0]'].value))
			&& (document.dqtsForm.elements['eDSN15A[0]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN15A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN15A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		EDSN15A_0 = true;
	} else {
		document.dqtsForm.elements['eDSN15A[0]'].style.color = "black";
		document.dqtsForm.elements['eDSN15A[0]'].style.backgroundColor = "white";

	}

	// EDSN15A[1]
	if ((document.dqtsForm.elements['eDSN15A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN15A[1]'].value))) {
		document.dqtsForm.elements['eDSN15A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN15A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		EDSN15A_1 = true;
	} else if ((document.dqtsForm.elements['eDSN15A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN15A[1]'].value))
			&& (document.dqtsForm.elements['eDSN15A[1]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN15A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN15A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		EDSN15A_1 = true;
	} else {
		document.dqtsForm.elements['eDSN15A[1]'].style.color = "black";
		document.dqtsForm.elements['eDSN15A[1]'].style.backgroundColor = "white";

	}

	// EDSN15A[2]
	if ((document.dqtsForm.elements['eDSN15A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN15A[2]'].value))) {
		document.dqtsForm.elements['eDSN15A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN15A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		EDSN15A_2 = true;
	} else if ((document.dqtsForm.elements['eDSN15A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN15A[2]'].value))
			&& (document.dqtsForm.elements['eDSN15A[2]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN15A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN15A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		EDSN15A_2 = true;
	} else {
		document.dqtsForm.elements['eDSN15A[2]'].style.color = "black";
		document.dqtsForm.elements['eDSN15A[2]'].style.backgroundColor = "white";

	}

	// EDSN15ACMNT
	if ((document.dqtsForm.elements['eDSN15ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN15ACMNT'].value))) {
		document.dqtsForm.elements['eDSN15ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN15ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		EDSN15A_CMNT = true;
	} else if ((document.dqtsForm.elements['eDSN15ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN15ACMNT'].value))
			&& (document.dqtsForm.elements['eDSN15ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['eDSN15ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN15ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		EDSN15A_CMNT = true;
	} else {
		document.dqtsForm.elements['eDSN15ACMNT'].style.color = "black";
		document.dqtsForm.elements['eDSN15ACMNT'].style.backgroundColor = "white";

	}

	// EDSN16A
	// EDSN16A[0]
	if ((document.dqtsForm.elements['eDSN16A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN16A[0]'].value))) {
		document.dqtsForm.elements['eDSN16A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN16A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		EDSN16A_0 = true;
	} else if ((document.dqtsForm.elements['eDSN16A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN16A[0]'].value))
			&& (document.dqtsForm.elements['eDSN16A[0]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN16A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN16A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		EDSN16A_0 = true;
	} else {
		document.dqtsForm.elements['eDSN16A[0]'].style.color = "black";
		document.dqtsForm.elements['eDSN16A[0]'].style.backgroundColor = "white";

	}

	// EDSN16A[1]
	if ((document.dqtsForm.elements['eDSN16A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN16A[1]'].value))) {
		document.dqtsForm.elements['eDSN16A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN16A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		EDSN16A_1 = true;
	} else if ((document.dqtsForm.elements['eDSN16A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN16A[1]'].value))
			&& (document.dqtsForm.elements['eDSN16A[1]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN16A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN16A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		EDSN16A_1 = true;
	} else {
		document.dqtsForm.elements['eDSN16A[1]'].style.color = "black";
		document.dqtsForm.elements['eDSN16A[1]'].style.backgroundColor = "white";

	}

	// EDSN16A[2]
	if ((document.dqtsForm.elements['eDSN16A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN16A[2]'].value))) {
		document.dqtsForm.elements['eDSN16A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN16A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		EDSN16A_2 = true;
	} else if ((document.dqtsForm.elements['eDSN16A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN16A[2]'].value))
			&& (document.dqtsForm.elements['eDSN16A[2]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN16A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN16A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		EDSN16A_2 = true;
	} else {
		document.dqtsForm.elements['eDSN16A[2]'].style.color = "black";
		document.dqtsForm.elements['eDSN16A[2]'].style.backgroundColor = "white";

	}

	// EDSN16ACMNT
	if ((document.dqtsForm.elements['eDSN16ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN16ACMNT'].value))) {
		document.dqtsForm.elements['eDSN16ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN16ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		EDSN16A_CMNT = true;
	} else if ((document.dqtsForm.elements['eDSN16ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN16ACMNT'].value))
			&& (document.dqtsForm.elements['eDSN16ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['eDSN16ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN16ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		EDSN16A_CMNT = true;
	} else {
		document.dqtsForm.elements['eDSN16ACMNT'].style.color = "black";
		document.dqtsForm.elements['eDSN16ACMNT'].style.backgroundColor = "white";

	}

	// EDSN17A
	// EDSN17A[0]
	if ((document.dqtsForm.elements['eDSN17A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN17A[0]'].value))) {
		document.dqtsForm.elements['eDSN17A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN17A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		EDSN17A_0 = true;
	} else if ((document.dqtsForm.elements['eDSN17A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN17A[0]'].value))
			&& (document.dqtsForm.elements['eDSN17A[0]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN17A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN17A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		EDSN17A_0 = true;
	} else {
		document.dqtsForm.elements['eDSN17A[0]'].style.color = "black";
		document.dqtsForm.elements['eDSN17A[0]'].style.backgroundColor = "white";

	}

	// EDSN17A[1]
	if ((document.dqtsForm.elements['eDSN17A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN17A[1]'].value))) {
		document.dqtsForm.elements['eDSN17A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN17A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		EDSN17A_1 = true;
	} else if ((document.dqtsForm.elements['eDSN17A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN17A[1]'].value))
			&& (document.dqtsForm.elements['eDSN17A[1]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN17A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN17A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		EDSN17A_1 = true;
	} else {
		document.dqtsForm.elements['eDSN17A[1]'].style.color = "black";
		document.dqtsForm.elements['eDSN17A[1]'].style.backgroundColor = "white";

	}

	// EDSN17A[2]
	if ((document.dqtsForm.elements['eDSN17A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN17A[2]'].value))) {
		document.dqtsForm.elements['eDSN17A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN17A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		EDSN17A_2 = true;
	} else if ((document.dqtsForm.elements['eDSN17A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN17A[2]'].value))
			&& (document.dqtsForm.elements['eDSN17A[2]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN17A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN17A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		EDSN17A_2 = true;
	} else {
		document.dqtsForm.elements['eDSN17A[2]'].style.color = "black";
		document.dqtsForm.elements['eDSN17A[2]'].style.backgroundColor = "white";

	}

	// EDSN17ACMNT
	if ((document.dqtsForm.elements['eDSN17ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN17ACMNT'].value))) {
		document.dqtsForm.elements['eDSN17ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN17ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		EDSN17A_CMNT = true;
	} else if ((document.dqtsForm.elements['eDSN17ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN17ACMNT'].value))
			&& (document.dqtsForm.elements['eDSN17ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['eDSN17ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN17ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		EDSN17A_CMNT = true;
	} else {
		document.dqtsForm.elements['eDSN17ACMNT'].style.color = "black";
		document.dqtsForm.elements['eDSN17ACMNT'].style.backgroundColor = "white";

	}

	// EDSN18A
	// EDSN18A[0]
	if ((document.dqtsForm.elements['eDSN18A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN18A[0]'].value))) {
		document.dqtsForm.elements['eDSN18A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN18A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		EDSN18A_0 = true;
	} else if ((document.dqtsForm.elements['eDSN18A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN18A[0]'].value))
			&& (document.dqtsForm.elements['eDSN18A[0]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN18A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN18A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		EDSN18A_0 = true;
	} else {
		document.dqtsForm.elements['eDSN18A[0]'].style.color = "black";
		document.dqtsForm.elements['eDSN18A[0]'].style.backgroundColor = "white";

	}

	// EDSN18A[1]
	if ((document.dqtsForm.elements['eDSN18A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN18A[1]'].value))) {
		document.dqtsForm.elements['eDSN18A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN18A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		EDSN18A_1 = true;
	} else if ((document.dqtsForm.elements['eDSN18A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN18A[1]'].value))
			&& (document.dqtsForm.elements['eDSN18A[1]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN18A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN18A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		EDSN18A_1 = true;
	} else {
		document.dqtsForm.elements['eDSN18A[1]'].style.color = "black";
		document.dqtsForm.elements['eDSN18A[1]'].style.backgroundColor = "white";

	}

	// EDSN18A[2]
	if ((document.dqtsForm.elements['eDSN18A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN18A[2]'].value))) {
		document.dqtsForm.elements['eDSN18A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN18A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		EDSN18A_2 = true;
	} else if ((document.dqtsForm.elements['eDSN18A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN18A[2]'].value))
			&& (document.dqtsForm.elements['eDSN18A[2]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN18A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN18A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		EDSN18A_2 = true;
	} else {
		document.dqtsForm.elements['eDSN18A[2]'].style.color = "black";
		document.dqtsForm.elements['eDSN18A[2]'].style.backgroundColor = "white";

	}

	// EDSN18ACMNT
	if ((document.dqtsForm.elements['eDSN18ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN18ACMNT'].value))) {
		document.dqtsForm.elements['eDSN18ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN18ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		EDSN18A_CMNT = true;
	} else if ((document.dqtsForm.elements['eDSN18ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN18ACMNT'].value))
			&& (document.dqtsForm.elements['eDSN18ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['eDSN18ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN18ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		EDSN18A_CMNT = true;
	} else {
		document.dqtsForm.elements['eDSN18ACMNT'].style.color = "black";
		document.dqtsForm.elements['eDSN18ACMNT'].style.backgroundColor = "white";

	}

	// EDSN19A
	// EDSN19A[0]
	if ((document.dqtsForm.elements['eDSN19A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN19A[0]'].value))) {
		document.dqtsForm.elements['eDSN19A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN19A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		EDSN19A_0 = true;
	} else if ((document.dqtsForm.elements['eDSN19A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN19A[0]'].value))
			&& (document.dqtsForm.elements['eDSN19A[0]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN19A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN19A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		EDSN19A_0 = true;
	} else {
		document.dqtsForm.elements['eDSN19A[0]'].style.color = "black";
		document.dqtsForm.elements['eDSN19A[0]'].style.backgroundColor = "white";

	}

	// EDSN19A[1]
	if ((document.dqtsForm.elements['eDSN19A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN19A[1]'].value))) {
		document.dqtsForm.elements['eDSN19A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN19A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		EDSN19A_1 = true;
	} else if ((document.dqtsForm.elements['eDSN19A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN19A[1]'].value))
			&& (document.dqtsForm.elements['eDSN19A[1]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN19A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN19A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		EDSN19A_1 = true;
	} else {
		document.dqtsForm.elements['eDSN19A[1]'].style.color = "black";
		document.dqtsForm.elements['eDSN19A[1]'].style.backgroundColor = "white";

	}

	// EDSN19A[2]
	if ((document.dqtsForm.elements['eDSN19A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN19A[2]'].value))) {
		document.dqtsForm.elements['eDSN19A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN19A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		EDSN19A_2 = true;
	} else if ((document.dqtsForm.elements['eDSN19A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN19A[2]'].value))
			&& (document.dqtsForm.elements['eDSN19A[2]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN19A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN19A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		EDSN19A_2 = true;
	} else {
		document.dqtsForm.elements['eDSN19A[2]'].style.color = "black";
		document.dqtsForm.elements['eDSN19A[2]'].style.backgroundColor = "white";

	}

	// EDSN19ACMNT
	if ((document.dqtsForm.elements['eDSN19ACMNT'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN19ACMNT'].value))) {
		document.dqtsForm.elements['eDSN19ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN19ACMNT'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		EDSN19A_CMNT = true;
	} else if ((document.dqtsForm.elements['eDSN19ACMNT'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN19ACMNT'].value))
			&& (document.dqtsForm.elements['eDSN19ACMNT'].value.length > 255)) {
		document.dqtsForm.elements['eDSN19ACMNT'].style.color = "red";
		document.dqtsForm.elements['eDSN19ACMNT'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		EDSN19A_CMNT = true;
	} else {
		document.dqtsForm.elements['eDSN19ACMNT'].style.color = "black";
		document.dqtsForm.elements['eDSN19ACMNT'].style.backgroundColor = "white";

	}

	// EDSN20A
	// EDSN20A[0]
	if ((document.dqtsForm.elements['eDSN20A[0]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN20A[0]'].value))) {
		document.dqtsForm.elements['eDSN20A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN20A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error " + text);
		EDSN20A_0 = true;
	} else if ((document.dqtsForm.elements['eDSN20A[0]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN20A[0]'].value))
			&& (document.dqtsForm.elements['eDSN20A[0]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN20A[0]'].style.color = "red";
		document.dqtsForm.elements['eDSN20A[0]'].style.backgroundColor = "yellow";
		alert("Fundamental Error can not be greater than 2 characters");
		EDSN20A_0 = true;
	} else {
		document.dqtsForm.elements['eDSN20A[0]'].style.color = "black";
		document.dqtsForm.elements['eDSN20A[0]'].style.backgroundColor = "white";

	}

	// EDSN20A[1]
	if ((document.dqtsForm.elements['eDSN20A[1]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN20A[1]'].value))) {
		document.dqtsForm.elements['eDSN20A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN20A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error " + text);
		EDSN20A_1 = true;
	} else if ((document.dqtsForm.elements['eDSN20A[1]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN20A[1]'].value))
			&& (document.dqtsForm.elements['eDSN20A[1]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN20A[1]'].style.color = "red";
		document.dqtsForm.elements['eDSN20A[1]'].style.backgroundColor = "yellow";
		alert("Informational Error can not be greater than 2 characters");
		EDSN20A_1 = true;
	} else {
		document.dqtsForm.elements['eDSN20A[1]'].style.color = "black";
		document.dqtsForm.elements['eDSN20A[1]'].style.backgroundColor = "white";

	}

	// EDSN20A[2]
	if ((document.dqtsForm.elements['eDSN20A[2]'] != null)
			&& (!checkInputNumericDT(document.dqtsForm.elements['eDSN20A[2]'].value))) {
		document.dqtsForm.elements['eDSN20A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN20A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error " + text);
		EDSN20A_2 = true;
	} else if ((document.dqtsForm.elements['eDSN20A[2]'] != null)
			&& (checkInputNumericDT(document.dqtsForm.elements['eDSN20A[2]'].value))
			&& (document.dqtsForm.elements['eDSN20A[2]'].value.length > 2)) {
		document.dqtsForm.elements['eDSN20A[2]'].style.color = "red";
		document.dqtsForm.elements['eDSN20A[2]'].style.backgroundColor = "yellow";
		alert("Readability Error can not be greater than 2 characters");
		EDSN20A_2 = true;
	} else {
		document.dqtsForm.elements['eDSN20A[2]'].style.color = "black";
		document.dqtsForm.elements['eDSN20A[2]'].style.backgroundColor = "white";

	}

	// EDSN20ADESC
	if ((document.dqtsForm.elements['eDSN20ADESC'] != null)
			&& (!checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN20ADESC'].value))) {
		document.dqtsForm.elements['eDSN20ADESC'].style.color = "red";
		document.dqtsForm.elements['eDSN20ADESC'].style.backgroundColor = "yellow";
		alert("Comment " + text);
		EDSN20A_DESC = true;
	} else if ((document.dqtsForm.elements['eDSN20ADESC'] != null)
			&& (checkInputAlphaNumericSpecialCharDT(document.dqtsForm.elements['eDSN20ADESC'].value))
			&& (document.dqtsForm.elements['eDSN20ADESC'].value.length > 255)) {
		document.dqtsForm.elements['eDSN20ADESC'].style.color = "red";
		document.dqtsForm.elements['eDSN20ADESC'].style.backgroundColor = "yellow";
		alert("Comment can not be greater than 255 characters");
		EDSN20A_DESC = true;
	} else {
		document.dqtsForm.elements['eDSN20ADESC'].style.color = "black";
		document.dqtsForm.elements['eDSN20ADESC'].style.backgroundColor = "white";

	}

	if (
	// DD
	DD1A_0 || DD1A_1 || DD1A_2 || DD1A_CMNT ||

	DD2A_0 || DD2A_1 || DD2A_2 || DD2A_CMNT ||

	DD3A_0 || DD3A_1 || DD3A_2 || DD3A_CMNT ||

	DD4A_0 || DD4A_1 || DD4A_2 || DD4A_CMNT ||

	DD5A_0 || DD5A_1 || DD5A_2 || DD5A_CMNT ||

	DD6A_0 || DD6A_1 || DD6A_2 || DD6A_CMNT ||

	DD6A_0 || DD6A_1 || DD6A_2 || DD6A_CMNT ||

	DD7A_0 || DD7A_1 || DD7A_2 || DD7A_CMNT ||

	DD8A_0 || DD8A_1 || DD8A_2 || DD8A_DESC ||

	// DL
	DL1A_0 || DL1A_1 || DL1A_2 || DL1A_CMNT ||

	DL2A_0 || DL2A_1 || DL2A_2 || DL2A_CMNT ||

	DL3A_0 || DL3A_1 || DL3A_2 || DL3A_CMNT ||

	DL4A_0 || DL4A_1 || DL4A_2 || DL4A_CMNT ||

	DL5A_0 || DL5A_1 || DL5A_2 || DL5A_DESC ||

	// EDSN
	EDSN1A_0 || EDSN1A_1 || EDSN1A_2 || EDSN1A_CMNT ||

	EDSN2A_0 || EDSN2A_1 || EDSN2A_2 || EDSN2A_CMNT ||

	EDSN3A_0 || EDSN3A_1 || EDSN3A_2 || EDSN3A_CMNT ||

	EDSN4A_0 || EDSN4A_1 || EDSN4A_2 || EDSN4A_CMNT ||

	EDSN5A_0 || EDSN5A_1 || EDSN5A_2 || EDSN5A_CMNT ||

	EDSN6A_0 || EDSN6A_1 || EDSN6A_2 || EDSN6A_CMNT ||

	EDSN7A_0 || EDSN7A_1 || EDSN7A_2 || EDSN7A_CMNT ||

	EDSN8A_0 || EDSN8A_1 || EDSN8A_2 || EDSN8A_CMNT ||

	EDSN9A_0 || EDSN9A_1 || EDSN9A_2 || EDSN9A_CMNT ||

	EDSN10A_0 || EDSN10A_1 || EDSN10A_2 || EDSN10A_CMNT ||

	EDSN11A_0 || EDSN11A_1 || EDSN11A_2 || EDSN11A_CMNT ||

	EDSN12A_0 || EDSN12A_1 || EDSN12A_2 || EDSN12A_CMNT ||

	EDSN13A_0 || EDSN13A_1 || EDSN13A_2 || EDSN13A_CMNT ||

	EDSN14A_0 || EDSN14A_1 || EDSN14A_2 || EDSN14A_CMNT ||

	EDSN15A_0 || EDSN15A_1 || EDSN15A_2 || EDSN15A_CMNT ||

	EDSN16A_0 || EDSN16A_1 || EDSN16A_2 || EDSN16A_CMNT ||

	EDSN17A_0 || EDSN17A_1 || EDSN17A_2 || EDSN17A_CMNT ||

	EDSN18A_0 || EDSN18A_1 || EDSN18A_2 || EDSN18A_CMNT ||

	EDSN19A_0 || EDSN19A_1 || EDSN19A_2 || EDSN19A_CMNT ||

	EDSN20A_0 || EDSN20A_1 || EDSN20A_2 || EDSN1A_DESC ||

	// FMM
	FMM1A_0 || FMM1A_1 || FMM1A_2 || FMM1A_CMNT ||

	FMM2A_0 || FMM2A_1 || FMM2A_2 || FMM2A_CMNT ||

	FMM3A_0 || FMM3A_1 || FMM3A_2 || FMM3A_CMNT ||

	FMM4A_0 || FMM4A_1 || FMM4A_2 || FMM4A_CMNT ||

	FMM5A_0 || FMM5A_1 || FMM5A_2 || FMM5A_DESC ||

	// PC
	PC1A_0 || PC1A_1 || PC1A_2 || PC1A_CMNT ||

	PC2A_0 || PC2A_1 || PC2A_2 || PC2A_CMNT ||

	PC3A_0 || PC3A_1 || PC3A_2 || PC3A_CMNT ||

	PC4A_0 || PC4A_1 || PC4A_2 || PC4A_CMNT ||

	PC5A_0 || PC5A_1 || PC5A_2 || PC5A_CMNT ||

	PC6A_0 || PC6A_1 || PC6A_2 || PC6A_CMNT ||

	PC7A_0 || PC7A_1 || PC7A_2 || PC7A_CMNT ||

	// S
	S1A_0 || S1A_1 || S1A_2 || S1A_CMNT ||

	S2A_0 || S2A_1 || S2A_2 || S2A_CMNT ||

	S3A_0 || S3A_1 || S3A_2 || S3A_CMNT ||

	S4A_0 || S4A_1 || S4A_2 || S4A_CMNT ||

	S5A_0 || S5A_1 || S5A_2 || S5A_CMNT ||

	S6A_0 || S6A_1 || S6A_2 || S6A_CMNT ||

	S7A_0 || S7A_1 || S7A_2 || S7A_CMNT ||

	S8A_0 || S8A_1 || S8A_2 || S8A_CMNT ||

	S9A_0 || S9A_1 || S9A_2 || S9A_CMNT ||

	S10A_0 || S10A_1 || S10A_2 || S10A_CMNT ||

	S11A_0 || S11A_1 || S11A_2 || S11A_CMNT ||

	S12A_0 || S12A_1 || S12A_2 || S12A_CMNT ||

	S13A_0 || S13A_1 || S13A_2 || S1A_DESC ||

	// TB
	TB1A_0 || TB1A_1 || TB1A_2 || TB1A_CMNT ||

	TB2A_0 || TB2A_1 || TB2A_2 || TB2A_CMNT ||

	TB3A_0 || TB3A_1 || TB3A_2 || TB3A_DESC) {
		return false;
	} else {
		return true;
	}
}

function deleteErrorChecklist(trackingNumber, partNumber, assignedChecker,
		engineeringChangeLevel, role, source) {
	if (role == 09 && checkInputAlphaNumericDT(trackingNumber)
			&& checkInputAlphaNumericDT(partNumber)
			&& checkInputAlphaNumericSpecialCharDT(engineeringChangeLevel)
			&& checkInputNumericDT(role)) {
		// alert('deleteErrorChecklist '+
		// trackingNumber+'&nbsp;'+partNumber+'&nbsp;'+engineeringChangeLevel+'&nbsp;'+role);//for
		// testing
		// method = admin.package.errorChecklist.delete.action
		// location.href =
		// '/dqts/admin/package/errorChecklist.do?crumb=reset&method=Delete+Error+Checklist&editFlag=true&selectedTrackingNumber='
		// +trackingNumber+'&selectedPartNumber='+partNumber+'&selectedEngineeringChangeLevel='+engineeringChangeLevel+'&role='+role;
		window
				.open(
						'/dqts/admin/package/errorChecklist.do?crumb=reset&method=Delete+Error+Checklist&editFlag=true&selectedTrackingNumber='
								+ trackingNumber
								+ '&selectedPartNumber='
								+ partNumber
								+ '&selectedEngineeringChangeLevel='
								+ engineeringChangeLevel
								+ '&role='
								+ role
								+ '&source=' + source + '&x=' + Math.random(),
						'maincontent');
	} else if (checkInputAlphaNumericDT(trackingNumber)
			&& checkInputAlphaNumericDT(partNumber)
			&& checkInputAlphaNumericDT(assignedChecker)
			&& checkInputAlphaNumericSpecialCharDT(engineeringChangeLevel)
			&& checkInputNumericDT(role)) {
		// alert('deleteErrorChecklist '+
		// trackingNumber+'&nbsp;'+partNumber+'&nbsp;'+assignedChecker+'&nbsp;'+engineeringChangeLevel+'&nbsp;'+role);//for
		// testing
		// method = admin.package.errorChecklist.delete.action
		// location.href =
		// '/dqts/admin/package/errorChecklist.do?crumb=reset&method=Delete+Error+Checklist&editFlag=true&selectedTrackingNumber='
		// +trackingNumber+'&selectedPartNumber='+partNumber+'&assignedChecker='+assignedChecker+'&selectedEngineeringChangeLevel='+engineeringChangeLevel+'&role='+role;
		window
				.open(
						'/dqts/admin/package/errorChecklist.do?crumb=reset&method=Delete+Error+Checklist&editFlag=true&selectedTrackingNumber='
								+ trackingNumber
								+ '&selectedPartNumber='
								+ partNumber
								+ '&assignedChecker='
								+ assignedChecker
								+ '&selectedEngineeringChangeLevel='
								+ engineeringChangeLevel
								+ '&role='
								+ role
								+ '&source=' + source + '&x=' + Math.random(),
						'maincontent');
	} else {
		alert("Invalid input.");
	}
}

function deleteMentorErrorChecklist(trackingNumber, partNumber,
		assignedChecker, engineeringChangeLevel, role, source) {
	if (checkInputAlphaNumericDT(trackingNumber)
			&& checkInputAlphaNumericDT(partNumber)
			&& checkInputAlphaNumericDT(assignedChecker)
			&& checkInputAlphaNumericSpecialCharDT(engineeringChangeLevel)
			&& checkInputNumericDT(role)) {
		// alert('deleteMentorErrorChecklist '+
		// trackingNumber+'&nbsp;'+partNumber+'&nbsp;'+assignedChecker+'&nbsp;'+engineeringChangeLevel+'&nbsp;'+role);//for
		// testing
		// method = admin.package.errorChecklist.delete.action
		// location.href =
		// '/dqts/admin/package/mentorErrorChecklist.do?crumb=reset&method=Delete+Error+Checklist&editFlag=true&selectedTrackingNumber='
		// +trackingNumber+'&selectedPartNumber='+partNumber+'&assignedChecker='+assignedChecker+'&selectedEngineeringChangeLevel='+engineeringChangeLevel+'&role='+role;
		window
				.open(
						'/dqts/admin/package/mentorErrorChecklist.do?crumb=reset&method=Delete+Error+Checklist&editFlag=true&selectedTrackingNumber='
								+ trackingNumber
								+ '&selectedPartNumber='
								+ partNumber
								+ '&assignedChecker='
								+ assignedChecker
								+ '&selectedEngineeringChangeLevel='
								+ engineeringChangeLevel
								+ '&role='
								+ role
								+ '&source=' + source + '&x=' + Math.random(),
						'maincontent');
	} else {
		alert("Invalid input.");
	}
}

// var[] detailList = new Array();
var detailList = [];
function setPartDetailString(changeNotice, jobTitle, partNumber, changeLevel) {

	var cNote = changeNotice;
	var jTitle = jobTitle;
	var pNum = partNumber;
	var cLev = changeLevel;
	var detail = '';

	if (document.getElementById('action' + pNum + cLev).checked) {

		// Part Name
		var partName = new String("*");
		var partNameRadios = document.getElementsByName('partName' + pNum
				+ cLev);
		for (var i = 0, length = partNameRadios.length; i < length; i++) {
			partNameRadios[i].disabled = true;
			if (partNameRadios[i].checked && partNameRadios[i].value.length > 0) {
				partName = partNameRadios[i].value;
			}
		}

		// Part Type
		var partType = new String("*");
		var partTypeRadios = document.getElementsByName('partType' + pNum
				+ cLev);
		for (var i = 0, length = partTypeRadios.length; i < length; i++) {
			partTypeRadios[i].disabled = true;
			if (partTypeRadios[i].checked && partTypeRadios[i].value.length > 0) {
				partType = partTypeRadios[i].value;
			}
		}

		// Drawing Class Description
		var drawingClassDescription = new String("*");
		/*
		 * var drawingClassDescriptionRadios =
		 * document.getElementsByName('drawingClassDescription'+pNum+cLev); for
		 * (var i = 0, length = drawingClassDescriptionRadios.length; i <
		 * length; i++) { drawingClassDescriptionRadios[i].disabled=true; if
		 * (drawingClassDescriptionRadios[i].checked) { drawingClassDescription =
		 * drawingClassDescriptionRadios[i].value; } }
		 */

		// Design Control
		var designControl = new String("*");
		var designControlRadios = document.getElementsByName('designControl'
				+ pNum + cLev);
		for (var i = 0, length = designControlRadios.length; i < length; i++) {
			designControlRadios[i].disabled = true;
			if (designControlRadios[i].checked
					&& designControlRadios[i].value.length > 0) {
				designControl = designControlRadios[i].value;
			}
		}

		// Planning Job Number
		var planningJobNumber = new String("*");
		var planningJobNumberRadios = document
				.getElementsByName('planningJobNumber' + pNum + cLev);
		for (var i = 0, length = planningJobNumberRadios.length; i < length; i++) {
			planningJobNumberRadios[i].disabled = true;
			if (planningJobNumberRadios[i].checked
					&& planningJobNumberRadios[i].value.length > 0) {
				planningJobNumber = planningJobNumberRadios[i].value;
			}
		}

		// Team Center Coordinator (owningUser)
		var owningUser = new String("*");
		/*
		 * var owningUserRadios =
		 * document.getElementsByName('owningUser'+pNum+cLev); for (var i = 0,
		 * length = owningUserRadios.length; i < length; i++) {
		 * owningUserRadios[i].disabled=true; if (owningUserRadios[i].checked) {
		 * owningUser = owningUserRadios[i].value; } }
		 */

		// Engineer
		var engineer = new String("*");
		/*
		 * var engineerRadios =
		 * document.getElementsByName('engineer'+pNum+cLev); for (var i = 0,
		 * length = engineerRadios.length; i < length; i++) {
		 * engineerRadios[i].disabled=true; if (engineerRadios[i].checked) {
		 * engineer = engineerRadios[i].value; } }
		 */

		// Manager
		var manager = new String("*");
		/*
		 * var managerRadios = document.getElementsByName('manager'+pNum+cLev);
		 * for (var i = 0, length = managerRadios.length; i < length; i++) {
		 * managerRadios[i].disabled=true; if (managerRadios[i].checked) {
		 * manager = managerRadios[i].value; } }
		 */

		// Reason for Release
		var reasonForRelease = new String("*");
		/*
		 * var reasonForReleaseRadios =
		 * document.getElementsByName('reasonForRelease'+pNum+cLev); for (var i =
		 * 0, length = reasonForReleaseRadios.length; i < length; i++) {
		 * reasonForReleaseRadios[i].disabled=true; if
		 * (reasonForReleaseRadios[i].checked) { reasonForRelease =
		 * reasonForReleaseRadios[i].value; } }
		 */

		// Manual/ProE
		var manualProE = new String("*");
		var manualProERadios = document.getElementsByName('manualProE' + pNum
				+ cLev);
		for (var i = 0, length = manualProERadios.length; i < length; i++) {
			manualProERadios[i].disabled = true;
			if (manualProERadios[i].checked
					&& manualProERadios[i].value.length > 0) {
				manualProE = manualProERadios[i].value;
			}
		}

		// Facility
		var facility = new String("*");
		/*
		 * var facilityRadios =
		 * document.getElementsByName('facility'+pNum+cLev); for (var i = 0,
		 * length = facilityRadios.length; i < length; i++) {
		 * facilityRadios[i].disabled=true; if (facilityRadios[i].checked) {
		 * facility = facilityRadios[i].value; } }
		 */

		// Notice Type
		var noticeType = new String("*");
		/*
		 * var noticeTypeRadios =
		 * document.getElementsByName('noticeType'+pNum+cLev); for (var i = 0,
		 * length = noticeTypeRadios.length; i < length; i++) {
		 * noticeTypeRadios[i].disabled=true; if (noticeTypeRadios[i].checked) {
		 * noticeType = noticeTypeRadios[i].value; } }
		 */

		// Job Part Number Type
		var jobPartNumberType = new String("*");
		var jobPartNumberTypeRadios = document
				.getElementsByName('jobPartNumberType' + pNum + cLev);
		for (var i = 0, length = jobPartNumberTypeRadios.length; i < length; i++) {
			jobPartNumberTypeRadios[i].disabled = true;
			if (jobPartNumberTypeRadios[i].options[jobPartNumberTypeRadios[i].selectedIndex].value != null
					&& jobPartNumberTypeRadios[i].options[jobPartNumberTypeRadios[i].selectedIndex].value.length > 0) {
				jobPartNumberType = jobPartNumberTypeRadios[i].options[jobPartNumberTypeRadios[i].selectedIndex].value;
			}
		}

		// ADD to detail list
		// detail =
		// cNote+"|"+jTitle+"|"+pNum+"|"+cLev+"|"+partName+"|"+drawingClassDescription+"|"+designControl+"|"+planningJobNumber+"|"+owningUser+"|"+engineer+"|"+manager+"|"+reasonForRelease+"|"+manualProE+"|"+facility+"|"+noticeType+"||";
		detail = cNote + "|" + jTitle + "|" + pNum + "|" + cLev + "|"
				+ partName + "|" + drawingClassDescription + "|"
				+ designControl + "|" + planningJobNumber + "|" + owningUser
				+ "|" + engineer + "|" + manager + "|" + reasonForRelease + "|"
				+ manualProE + "|" + facility + "|" + noticeType + "|"
				+ partType + "|" + jobPartNumberType + "||";

		// alert(detail);
		detailList.push(detail);

	} else if (!document.getElementById('action' + pNum + cLev).checked) {

		// Part Name
		var partName = new String("*");
		var partNameRadios = document.getElementsByName('partName' + pNum
				+ cLev);
		for (var i = 0, length = partNameRadios.length; i < length; i++) {
			partNameRadios[i].disabled = false;
			if (partNameRadios[i].checked && partNameRadios[i].value.length > 0) {
				partName = partNameRadios[i].value;
			}
		}

		// Part Name
		var partType = new String("*");
		var partTypeRadios = document.getElementsByName('partType' + pNum
				+ cLev);
		for (var i = 0, length = partTypeRadios.length; i < length; i++) {
			partTypeRadios[i].disabled = false;
			if (partTypeRadios[i].checked && partTypeRadios[i].value.length > 0) {
				partType = partTypeRadios[i].value;
			}
		}

		// Drawing Class Description
		var drawingClassDescription = new String("*");
		/*
		 * var drawingClassDescriptionRadios =
		 * document.getElementsByName('drawingClassDescription'+pNum+cLev); for
		 * (var i = 0, length = drawingClassDescriptionRadios.length; i <
		 * length; i++) { drawingClassDescriptionRadios[i].disabled=false; if
		 * (drawingClassDescriptionRadios[i].checked) { drawingClassDescription =
		 * drawingClassDescriptionRadios[i].value; } }
		 */

		// Design Control
		var designControl = new String("*");
		var designControlRadios = document.getElementsByName('designControl'
				+ pNum + cLev);
		for (var i = 0, length = designControlRadios.length; i < length; i++) {
			designControlRadios[i].disabled = false;
			if (designControlRadios[i].checked
					&& designControlRadios[i].value.length > 0) {
				designControl = designControlRadios[i].value;
			}
		}

		// Planning Job Number
		var planningJobNumber = new String("*");
		var planningJobNumberRadios = document
				.getElementsByName('planningJobNumber' + pNum + cLev);
		for (var i = 0, length = planningJobNumberRadios.length; i < length; i++) {
			planningJobNumberRadios[i].disabled = false;
			if (planningJobNumberRadios[i].checked
					&& planningJobNumberRadios[i].value.length > 0) {
				planningJobNumber = planningJobNumberRadios[i].value;
			}
		}

		// Team Center Coordinator (owningUser)
		var owningUser = new String("*");
		/*
		 * var owningUserRadios =
		 * document.getElementsByName('owningUser'+pNum+cLev); for (var i = 0,
		 * length = owningUserRadios.length; i < length; i++) {
		 * owningUserRadios[i].disabled=false; if (owningUserRadios[i].checked) {
		 * owningUser = owningUserRadios[i].value; } }
		 */

		// Engineer
		var engineer = new String("*");
		/*
		 * var engineerRadios =
		 * document.getElementsByName('engineer'+pNum+cLev); for (var i = 0,
		 * length = engineerRadios.length; i < length; i++) {
		 * engineerRadios[i].disabled=false; if (engineerRadios[i].checked) {
		 * engineer = engineerRadios[i].value; } }
		 */

		// Manager
		var manager = new String("*");
		/*
		 * var managerRadios = document.getElementsByName('manager'+pNum+cLev);
		 * for (var i = 0, length = managerRadios.length; i < length; i++) {
		 * managerRadios[i].disabled=false; if (managerRadios[i].checked) {
		 * manager = managerRadios[i].value; } }
		 */

		// Reason for Release
		var reasonForRelease = new String("*");
		/*
		 * var reasonForReleaseRadios =
		 * document.getElementsByName('reasonForRelease'+pNum+cLev); for (var i =
		 * 0, length = reasonForReleaseRadios.length; i < length; i++) {
		 * reasonForReleaseRadios[i].disabled=false; if
		 * (reasonForReleaseRadios[i].checked) { reasonForRelease =
		 * reasonForReleaseRadios[i].value; } }
		 */

		// Manual/ProE
		var manualProE = new String("*");
		var manualProERadios = document.getElementsByName('manualProE' + pNum
				+ cLev);
		for (var i = 0, length = manualProERadios.length; i < length; i++) {
			manualProERadios[i].disabled = false;
			if (manualProERadios[i].checked
					&& manualProERadios[i].value.length > 0) {
				manualProE = manualProERadios[i].value;
			}
		}

		// Facility
		var facility = new String("*");
		/*
		 * var facilityRadios =
		 * document.getElementsByName('facility'+pNum+cLev); for (var i = 0,
		 * length = facilityRadios.length; i < length; i++) {
		 * facilityRadios[i].disabled=false; if (facilityRadios[i].checked) {
		 * facility = facilityRadios[i].value; } }
		 */

		// Notice Type
		var noticeType = new String("*");
		/*
		 * var noticeTypeRadios =
		 * document.getElementsByName('noticeType'+pNum+cLev); for (var i = 0,
		 * length = noticeTypeRadios.length; i < length; i++) {
		 * noticeTypeRadios[i].disabled=false; if (noticeTypeRadios[i].checked) {
		 * noticeType = noticeTypeRadios[i].value; } }
		 */

		// Job Part Number Type
		var jobPartNumberType = new String("*");
		var jobPartNumberTypeRadios = document
				.getElementsByName('jobPartNumberType' + pNum + cLev);
		for (var i = 0, length = jobPartNumberTypeRadios.length; i < length; i++) {
			jobPartNumberTypeRadios[i].disabled = false;
			if (jobPartNumberTypeRadios[i].options[jobPartNumberTypeRadios[i].selectedIndex].value != null
					&& jobPartNumberTypeRadios[i].options[jobPartNumberTypeRadios[i].selectedIndex].value.length > 0) {
				jobPartNumberType = jobPartNumberTypeRadios[i].options[jobPartNumberTypeRadios[i].selectedIndex].value;
			}
		}

		// REMOVE to detail list
		// detail =
		// cNote+"|"+jTitle+"|"+pNum+"|"+cLev+"|"+partName+"|"+drawingClassDescription+"|"+designControl+"|"+planningJobNumber+"|"+owningUser+"|"+engineer+"|"+manager+"|"+reasonForRelease+"|"+manualProE+"|"+facility+"|"+noticeType+"||";
		detail = cNote + "|" + jTitle + "|" + pNum + "|" + cLev + "|"
				+ partName + "|" + drawingClassDescription + "|"
				+ designControl + "|" + planningJobNumber + "|" + owningUser
				+ "|" + engineer + "|" + manager + "|" + reasonForRelease + "|"
				+ manualProE + "|" + facility + "|" + noticeType + "|"
				+ partType + "|" + jobPartNumberType + "||";

		// alert(detail);

		var index = detailList.indexOf(detail);
		detailList.splice(index, 1);
	}
}

function generateDQTSPackage() {
	var drawingClassDescription = new String("*");
	var owningUser = new String("*");
	var engineer = new String("*");
	var manager = new String("*");
	var reasonForRelease = new String("*");
	var facility = new String("*");
	var noticeType = new String("*");

	var drawingClassDescriptionRadios = document
			.getElementsByName('drawingClassDescription');
	for (var i = 0, length = drawingClassDescriptionRadios.length; i < length; i++) {
		if (drawingClassDescriptionRadios[i].checked) {
			drawingClassDescription = drawingClassDescriptionRadios[i].value;
		}
	}

	var owningUserRadios = document.getElementsByName('owningUser');
	for (var i = 0, length = owningUserRadios.length; i < length; i++) {
		if (owningUserRadios[i].checked && owningUserRadios[i].value.length > 0) {
			owningUser = owningUserRadios[i].value;
		}
	}

	var engineerRadios = document.getElementsByName('engineer');
	for (var i = 0, length = engineerRadios.length; i < length; i++) {
		if (engineerRadios[i].checked && engineerRadios[i].value.length > 0) {
			engineer = engineerRadios[i].value;
		}
	}

	var managerRadios = document.getElementsByName('manager');
	for (var i = 0, length = managerRadios.length; i < length; i++) {
		if (managerRadios[i].checked && managerRadios[i].value.length > 0) {
			manager = managerRadios[i].value;
		}
	}

	var reasonForReleaseRadios = document.getElementsByName('reasonForRelease');
	for (var i = 0, length = reasonForReleaseRadios.length; i < length; i++) {
		if (reasonForReleaseRadios[i].checked
				&& reasonForReleaseRadios[i].value.length > 0) {
			reasonForRelease = reasonForReleaseRadios[i].value;
		}
	}

	var facilityRadios = document.getElementsByName('facility');
	for (var i = 0, length = facilityRadios.length; i < length; i++) {
		if (facilityRadios[i].checked && facilityRadios[i].value.length > 0) {
			facility = facilityRadios[i].value;
		}
	}

	var noticeTypeRadios = document.getElementsByName('noticeType');
	for (var i = 0, length = noticeTypeRadios.length; i < length; i++) {
		if (noticeTypeRadios[i].checked && noticeTypeRadios[i].value.length > 0) {
			noticeType = noticeTypeRadios[i].value;
		}
	}

	var headerDetail = drawingClassDescription + "|" + owningUser + "|"
			+ engineer + "|" + manager + "|" + reasonForRelease + "|"
			+ facility + "|" + noticeType + "||";

	// alert('generateDQTSPackage');//for testing

	// alert(headerDetail);

	// method = admin.package.generatePackage.action
	// window.open('/dqts/admin/package/create.do?crumb=reset&method=Generate+Package&detailList='+detailList+'&x='+Math.random(),
	// 'maincontent');
	window.open(
			'/dqts/admin/package/create.do?crumb=reset&method=Generate+Package&detailList='
					+ detailList + '&headerList=' + headerDetail + '&x='
					+ Math.random(), 'maincontent');
}
var functionalErrorTotal = 0;
var informationalErrorTotal = 0;
var readabilityErrorTotal = 0;
function totalFunctionalErrors() {

	var total = 0;

	// FMM
	if (document.dqtsForm.elements('fMM1A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('fMM1A[0]').value)) {
		total += Number(document.dqtsForm.elements('fMM1A[0]').value);
	}
	if (document.dqtsForm.elements('fMM2A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('fMM2A[0]').value)) {
		total += Number(document.dqtsForm.elements('fMM2A[0]').value);
	}
	if (document.dqtsForm.elements('fMM3A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('fMM3A[0]').value)) {
		total += Number(document.dqtsForm.elements('fMM3A[0]').value);
	}
	if (document.dqtsForm.elements('fMM4A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('fMM4A[0]').value)) {
		total += Number(document.dqtsForm.elements('fMM4A[0]').value);
	}
	if (document.dqtsForm.elements('fMM5A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('fMM5A[0]').value)) {
		total += Number(document.dqtsForm.elements('fMM5A[0]').value);
	}

	// TB
	if (document.dqtsForm.elements('tB1A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('tB1A[0]').value)) {
		total += Number(document.dqtsForm.elements('tB1A[0]').value);
	}
	if (document.dqtsForm.elements('tB2A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('tB2A[0]').value)) {
		total += Number(document.dqtsForm.elements('tB2A[0]').value);
	}
	if (document.dqtsForm.elements('tB3A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('tB3A[0]').value)) {
		total += Number(document.dqtsForm.elements('tB3A[0]').value);
	}

	// S
	if (document.dqtsForm.elements('s1A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s1A[0]').value)) {
		total += Number(document.dqtsForm.elements('s1A[0]').value);
	}
	if (document.dqtsForm.elements('s2A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s2A[0]').value)) {
		total += Number(document.dqtsForm.elements('s2A[0]').value);
	}
	if (document.dqtsForm.elements('s3A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s3A[0]').value)) {
		total += Number(document.dqtsForm.elements('s3A[0]').value);
	}
	if (document.dqtsForm.elements('s4A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s4A[0]').value)) {
		total += Number(document.dqtsForm.elements('s4A[0]').value);
	}
	if (document.dqtsForm.elements('s5A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s5A[0]').value)) {
		total += Number(document.dqtsForm.elements('s5A[0]').value);
	}
	if (document.dqtsForm.elements('s6A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s6A[0]').value)) {
		total += Number(document.dqtsForm.elements('s6A[0]').value);
	}
	if (document.dqtsForm.elements('s7A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s7A[0]').value)) {
		total += Number(document.dqtsForm.elements('s7A[0]').value);
	}
	if (document.dqtsForm.elements('s8A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s8A[0]').value)) {
		total += Number(document.dqtsForm.elements('s8A[0]').value);
	}
	if (document.dqtsForm.elements('s9A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s9A[0]').value)) {
		total += Number(document.dqtsForm.elements('s9A[0]').value);
	}
	if (document.dqtsForm.elements('s10A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s10A[0]').value)) {
		total += Number(document.dqtsForm.elements('s10A[0]').value);
	}
	if (document.dqtsForm.elements('s11A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s11A[0]').value)) {
		total += Number(document.dqtsForm.elements('s11A[0]').value);
	}
	if (document.dqtsForm.elements('s12A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s12A[0]').value)) {
		total += Number(document.dqtsForm.elements('s12A[0]').value);
	}
	if (document.dqtsForm.elements('s13A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s13A[0]').value)) {
		total += Number(document.dqtsForm.elements('s13A[0]').value);
	}

	// PC
	if (document.dqtsForm.elements('pC1A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('pC1A[0]').value)) {
		total += Number(document.dqtsForm.elements('pC1A[0]').value);
	}
	if (document.dqtsForm.elements('pC2A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('pC2A[0]').value)) {
		total += Number(document.dqtsForm.elements('pC2A[0]').value);
	}
	if (document.dqtsForm.elements('pC3A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('pC3A[0]').value)) {
		total += Number(document.dqtsForm.elements('pC3A[0]').value);
	}
	if (document.dqtsForm.elements('pC4A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('pC4A[0]').value)) {
		total += Number(document.dqtsForm.elements('pC4A[0]').value);
	}
	if (document.dqtsForm.elements('pC5A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('pC5A[0]').value)) {
		total += Number(document.dqtsForm.elements('pC5A[0]').value);
	}
	if (document.dqtsForm.elements('pC6A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('pC6A[0]').value)) {
		total += Number(document.dqtsForm.elements('pC6A[0]').value);
	}
	if (document.dqtsForm.elements('pC7A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('pC7A[0]').value)) {
		total += Number(document.dqtsForm.elements('pC7A[0]').value);
	}

	// DL
	if (document.dqtsForm.elements('dL1A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dL1A[0]').value)) {
		total += Number(document.dqtsForm.elements('dL1A[0]').value);
	}
	if (document.dqtsForm.elements('dL2A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dL2A[0]').value)) {
		total += Number(document.dqtsForm.elements('dL2A[0]').value);
	}
	if (document.dqtsForm.elements('dL3A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dL3A[0]').value)) {
		total += Number(document.dqtsForm.elements('dL3A[0]').value);
	}
	if (document.dqtsForm.elements('dL4A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dL4A[0]').value)) {
		total += Number(document.dqtsForm.elements('dL4A[0]').value);
	}
	if (document.dqtsForm.elements('dL5A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dL5A[0]').value)) {
		total += Number(document.dqtsForm.elements('dL5A[0]').value);
	}

	// DD
	if (document.dqtsForm.elements('dD1A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dD1A[0]').value)) {
		total += Number(document.dqtsForm.elements('dD1A[0]').value);
	}
	if (document.dqtsForm.elements('dD2A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dD2A[0]').value)) {
		total += Number(document.dqtsForm.elements('dD2A[0]').value);
	}
	if (document.dqtsForm.elements('dD3A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dD3A[0]').value)) {
		total += Number(document.dqtsForm.elements('dD3A[0]').value);
	}
	if (document.dqtsForm.elements('dD4A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dD4A[0]').value)) {
		total += Number(document.dqtsForm.elements('dD4A[0]').value);
	}
	if (document.dqtsForm.elements('dD5A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dD5A[0]').value)) {
		total += Number(document.dqtsForm.elements('dD5A[0]').value);
	}
	if (document.dqtsForm.elements('dD6A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dD6A[0]').value)) {
		total += Number(document.dqtsForm.elements('dD6A[0]').value);
	}
	if (document.dqtsForm.elements('dD7A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dD7A[0]').value)) {
		total += Number(document.dqtsForm.elements('dD7A[0]').value);
	}
	if (document.dqtsForm.elements('dD8A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dD8A[0]').value)) {
		total += Number(document.dqtsForm.elements('dD8A[0]').value);
	}

	// EDSN
	if (document.dqtsForm.elements('eDSN1A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN1A[0]').value)) {
		total += Number(document.dqtsForm.elements('eDSN1A[0]').value);
	}
	if (document.dqtsForm.elements('eDSN2A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN2A[0]').value)) {
		total += Number(document.dqtsForm.elements('eDSN2A[0]').value);
	}
	if (document.dqtsForm.elements('eDSN3A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN3A[0]').value)) {
		total += Number(document.dqtsForm.elements('eDSN3A[0]').value);
	}
	if (document.dqtsForm.elements('eDSN4A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN4A[0]').value)) {
		total += Number(document.dqtsForm.elements('eDSN4A[0]').value);
	}
	if (document.dqtsForm.elements('eDSN5A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN5A[0]').value)) {
		total += Number(document.dqtsForm.elements('eDSN5A[0]').value);
	}
	if (document.dqtsForm.elements('eDSN6A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN6A[0]').value)) {
		total += Number(document.dqtsForm.elements('eDSN6A[0]').value);
	}
	if (document.dqtsForm.elements('eDSN7A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN7A[0]').value)) {
		total += Number(document.dqtsForm.elements('eDSN7A[0]').value);
	}
	if (document.dqtsForm.elements('eDSN8A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN8A[0]').value)) {
		total += Number(document.dqtsForm.elements('eDSN8A[0]').value);
	}
	if (document.dqtsForm.elements('eDSN9A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN9A[0]').value)) {
		total += Number(document.dqtsForm.elements('eDSN9A[0]').value);
	}
	if (document.dqtsForm.elements('eDSN10A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN10A[0]').value)) {
		total += Number(document.dqtsForm.elements('eDSN10A[0]').value);
	}
	if (document.dqtsForm.elements('eDSN11A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN11A[0]').value)) {
		total += Number(document.dqtsForm.elements('eDSN11A[0]').value);
	}
	if (document.dqtsForm.elements('eDSN12A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN12A[0]').value)) {
		total += Number(document.dqtsForm.elements('eDSN12A[0]').value);
	}
	if (document.dqtsForm.elements('eDSN13A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN13A[0]').value)) {
		total += Number(document.dqtsForm.elements('eDSN13A[0]').value);
	}
	if (document.dqtsForm.elements('eDSN14A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN14A[0]').value)) {
		total += Number(document.dqtsForm.elements('eDSN14A[0]').value);
	}
	if (document.dqtsForm.elements('eDSN15A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN15A[0]').value)) {
		total += Number(document.dqtsForm.elements('eDSN15A[0]').value);
	}
	if (document.dqtsForm.elements('eDSN16A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN16A[0]').value)) {
		total += Number(document.dqtsForm.elements('eDSN16A[0]').value);
	}
	if (document.dqtsForm.elements('eDSN17A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN17A[0]').value)) {
		total += Number(document.dqtsForm.elements('eDSN17A[0]').value);
	}
	if (document.dqtsForm.elements('eDSN18A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN18A[0]').value)) {
		total += Number(document.dqtsForm.elements('eDSN18A[0]').value);
	}
	if (document.dqtsForm.elements('eDSN19A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN19A[0]').value)) {
		total += Number(document.dqtsForm.elements('eDSN19A[0]').value);
	}
	if (document.dqtsForm.elements('eDSN20A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN20A[0]').value)) {
		total += Number(document.dqtsForm.elements('eDSN20A[0]').value);
	}
	if (document.dqtsForm.elements('eDSN21A[0]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN21A[0]').value)) {
		total += Number(document.dqtsForm.elements('eDSN21A[0]').value);
	}

	// alert("END functionalErrorTotal: "+ total);//FOR TESTING

	functionalErrorTotal = total;
	// alert(total);
	document.dqtsForm.elements('totalFunctionalErrors').value = total;

	// alert("FINAL functionalErrorTotal: "+ functionalErrorTotal);//FOR TESTING

	return total;
}

function totalInformationalErrors() {

	var total = 0;

	// FMM
	if (document.dqtsForm.elements('fMM1A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('fMM1A[1]').value)) {
		total += Number(document.dqtsForm.elements('fMM1A[1]').value);
	}
	if (document.dqtsForm.elements('fMM2A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('fMM2A[1]').value)) {
		total += Number(document.dqtsForm.elements('fMM2A[1]').value);
	}
	if (document.dqtsForm.elements('fMM3A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('fMM3A[1]').value)) {
		total += Number(document.dqtsForm.elements('fMM3A[1]').value);
	}
	if (document.dqtsForm.elements('fMM4A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('fMM4A[1]').value)) {
		total += Number(document.dqtsForm.elements('fMM4A[1]').value);
	}
	if (document.dqtsForm.elements('fMM5A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('fMM5A[1]').value)) {
		total += Number(document.dqtsForm.elements('fMM5A[1]').value);
	}

	// TB
	if (document.dqtsForm.elements('tB1A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('tB1A[1]').value)) {
		total += Number(document.dqtsForm.elements('tB1A[1]').value);
	}
	if (document.dqtsForm.elements('tB2A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('tB2A[1]').value)) {
		total += Number(document.dqtsForm.elements('tB2A[1]').value);
	}
	if (document.dqtsForm.elements('tB3A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('tB3A[1]').value)) {
		total += Number(document.dqtsForm.elements('tB3A[1]').value);
	}

	// S
	if (document.dqtsForm.elements('s1A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s1A[1]').value)) {
		total += Number(document.dqtsForm.elements('s1A[1]').value);
	}
	if (document.dqtsForm.elements('s2A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s2A[1]').value)) {
		total += Number(document.dqtsForm.elements('s2A[1]').value);
	}
	if (document.dqtsForm.elements('s3A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s3A[1]').value)) {
		total += Number(document.dqtsForm.elements('s3A[1]').value);
	}
	if (document.dqtsForm.elements('s4A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s4A[1]').value)) {
		total += Number(document.dqtsForm.elements('s4A[1]').value);
	}
	if (document.dqtsForm.elements('s5A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s5A[1]').value)) {
		total += Number(document.dqtsForm.elements('s5A[1]').value);
	}
	if (document.dqtsForm.elements('s6A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s6A[1]').value)) {
		total += Number(document.dqtsForm.elements('s6A[1]').value);
	}
	if (document.dqtsForm.elements('s7A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s7A[1]').value)) {
		total += Number(document.dqtsForm.elements('s7A[1]').value);
	}
	if (document.dqtsForm.elements('s8A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s8A[1]').value)) {
		total += Number(document.dqtsForm.elements('s8A[1]').value);
	}
	if (document.dqtsForm.elements('s9A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s9A[1]').value)) {
		total += Number(document.dqtsForm.elements('s9A[1]').value);
	}
	if (document.dqtsForm.elements('s10A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s10A[1]').value)) {
		total += Number(document.dqtsForm.elements('s10A[1]').value);
	}
	if (document.dqtsForm.elements('s11A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s11A[1]').value)) {
		total += Number(document.dqtsForm.elements('s11A[1]').value);
	}
	if (document.dqtsForm.elements('s12A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s12A[1]').value)) {
		total += Number(document.dqtsForm.elements('s12A[1]').value);
	}
	if (document.dqtsForm.elements('s13A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s13A[1]').value)) {
		total += Number(document.dqtsForm.elements('s13A[1]').value);
	}

	// PC
	if (document.dqtsForm.elements('pC1A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('pC1A[1]').value)) {
		total += Number(document.dqtsForm.elements('pC1A[1]').value);
	}
	if (document.dqtsForm.elements('pC2A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('pC2A[1]').value)) {
		total += Number(document.dqtsForm.elements('pC2A[1]').value);
	}
	if (document.dqtsForm.elements('pC3A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('pC3A[1]').value)) {
		total += Number(document.dqtsForm.elements('pC3A[1]').value);
	}
	if (document.dqtsForm.elements('pC4A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('pC4A[1]').value)) {
		total += Number(document.dqtsForm.elements('pC4A[1]').value);
	}
	if (document.dqtsForm.elements('pC5A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('pC5A[1]').value)) {
		total += Number(document.dqtsForm.elements('pC5A[1]').value);
	}
	if (document.dqtsForm.elements('pC6A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('pC6A[1]').value)) {
		total += Number(document.dqtsForm.elements('pC6A[1]').value);
	}
	if (document.dqtsForm.elements('pC7A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('pC7A[1]').value)) {
		total += Number(document.dqtsForm.elements('pC7A[1]').value);
	}

	// DL
	if (document.dqtsForm.elements('dL1A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dL1A[1]').value)) {
		total += Number(document.dqtsForm.elements('dL1A[1]').value);
	}
	if (document.dqtsForm.elements('dL2A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dL2A[1]').value)) {
		total += Number(document.dqtsForm.elements('dL2A[1]').value);
	}
	if (document.dqtsForm.elements('dL3A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dL3A[1]').value)) {
		total += Number(document.dqtsForm.elements('dL3A[1]').value);
	}
	if (document.dqtsForm.elements('dL4A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dL4A[1]').value)) {
		total += Number(document.dqtsForm.elements('dL4A[1]').value);
	}
	if (document.dqtsForm.elements('dL5A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dL5A[1]').value)) {
		total += Number(document.dqtsForm.elements('dL5A[1]').value);
	}

	// DD
	if (document.dqtsForm.elements('dD1A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dD1A[1]').value)) {
		total += Number(document.dqtsForm.elements('dD1A[1]').value);
	}
	if (document.dqtsForm.elements('dD2A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dD2A[1]').value)) {
		total += Number(document.dqtsForm.elements('dD2A[1]').value);
	}
	if (document.dqtsForm.elements('dD3A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dD3A[1]').value)) {
		total += Number(document.dqtsForm.elements('dD3A[1]').value);
	}
	if (document.dqtsForm.elements('dD4A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dD4A[1]').value)) {
		total += Number(document.dqtsForm.elements('dD4A[1]').value);
	}
	if (document.dqtsForm.elements('dD5A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dD5A[1]').value)) {
		total += Number(document.dqtsForm.elements('dD5A[1]').value);
	}
	if (document.dqtsForm.elements('dD6A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dD6A[1]').value)) {
		total += Number(document.dqtsForm.elements('dD6A[1]').value);
	}
	if (document.dqtsForm.elements('dD7A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dD7A[1]').value)) {
		total += Number(document.dqtsForm.elements('dD7A[1]').value);
	}
	if (document.dqtsForm.elements('dD8A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dD8A[1]').value)) {
		total += Number(document.dqtsForm.elements('dD8A[1]').value);
	}

	// EDSN
	if (document.dqtsForm.elements('eDSN1A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN1A[1]').value)) {
		total += Number(document.dqtsForm.elements('eDSN1A[1]').value);
	}
	if (document.dqtsForm.elements('eDSN2A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN2A[1]').value)) {
		total += Number(document.dqtsForm.elements('eDSN2A[1]').value);
	}
	if (document.dqtsForm.elements('eDSN3A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN3A[1]').value)) {
		total += Number(document.dqtsForm.elements('eDSN3A[1]').value);
	}
	if (document.dqtsForm.elements('eDSN4A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN4A[1]').value)) {
		total += Number(document.dqtsForm.elements('eDSN4A[1]').value);
	}
	if (document.dqtsForm.elements('eDSN5A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN5A[1]').value)) {
		total += Number(document.dqtsForm.elements('eDSN5A[1]').value);
	}
	if (document.dqtsForm.elements('eDSN6A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN6A[1]').value)) {
		total += Number(document.dqtsForm.elements('eDSN6A[1]').value);
	}
	if (document.dqtsForm.elements('eDSN7A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN7A[1]').value)) {
		total += Number(document.dqtsForm.elements('eDSN7A[1]').value);
	}
	if (document.dqtsForm.elements('eDSN8A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN8A[1]').value)) {
		total += Number(document.dqtsForm.elements('eDSN8A[1]').value);
	}
	if (document.dqtsForm.elements('eDSN9A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN9A[1]').value)) {
		total += Number(document.dqtsForm.elements('eDSN9A[1]').value);
	}
	if (document.dqtsForm.elements('eDSN10A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN10A[1]').value)) {
		total += Number(document.dqtsForm.elements('eDSN10A[1]').value);
	}
	if (document.dqtsForm.elements('eDSN11A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN11A[1]').value)) {
		total += Number(document.dqtsForm.elements('eDSN11A[1]').value);
	}
	if (document.dqtsForm.elements('eDSN12A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN12A[1]').value)) {
		total += Number(document.dqtsForm.elements('eDSN12A[1]').value);
	}
	if (document.dqtsForm.elements('eDSN13A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN13A[1]').value)) {
		total += Number(document.dqtsForm.elements('eDSN13A[1]').value);
	}
	if (document.dqtsForm.elements('eDSN14A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN14A[1]').value)) {
		total += Number(document.dqtsForm.elements('eDSN14A[1]').value);
	}
	if (document.dqtsForm.elements('eDSN15A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN15A[1]').value)) {
		total += Number(document.dqtsForm.elements('eDSN15A[1]').value);
	}
	if (document.dqtsForm.elements('eDSN16A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN16A[1]').value)) {
		total += Number(document.dqtsForm.elements('eDSN16A[1]').value);
	}
	if (document.dqtsForm.elements('eDSN17A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN17A[1]').value)) {
		total += Number(document.dqtsForm.elements('eDSN17A[1]').value);
	}
	if (document.dqtsForm.elements('eDSN18A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN18A[1]').value)) {
		total += Number(document.dqtsForm.elements('eDSN18A[1]').value);
	}
	if (document.dqtsForm.elements('eDSN19A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN19A[1]').value)) {
		total += Number(document.dqtsForm.elements('eDSN19A[1]').value);
	}
	if (document.dqtsForm.elements('eDSN20A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN20A[1]').value)) {
		total += Number(document.dqtsForm.elements('eDSN20A[1]').value);
	}
	if (document.dqtsForm.elements('eDSN21A[1]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN21A[1]').value)) {
		total += Number(document.dqtsForm.elements('eDSN21A[1]').value);
	}

	// alert("END informationalErrorTotal: "+ total);//FOR TESTING

	informationalErrorTotal = total;
	// alert(total);
	document.dqtsForm.elements('totalInformationalErrors').value = total;

	// alert("FINAL informationalErrorTotal: "+ informationalErrorTotal);//FOR
	// TESTING

	return total;
}

function totalReadabilityErrors() {

	var total = 0;

	// FMM
	if (document.dqtsForm.elements('fMM1A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('fMM1A[2]').value)) {
		total += Number(document.dqtsForm.elements('fMM1A[2]').value);
	}
	if (document.dqtsForm.elements('fMM2A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('fMM2A[2]').value)) {
		total += Number(document.dqtsForm.elements('fMM2A[2]').value);
	}
	if (document.dqtsForm.elements('fMM3A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('fMM3A[2]').value)) {
		total += Number(document.dqtsForm.elements('fMM3A[2]').value);
	}
	if (document.dqtsForm.elements('fMM4A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('fMM4A[2]').value)) {
		total += Number(document.dqtsForm.elements('fMM4A[2]').value);
	}
	if (document.dqtsForm.elements('fMM5A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('fMM5A[2]').value)) {
		total += Number(document.dqtsForm.elements('fMM5A[2]').value);
	}

	// TB
	if (document.dqtsForm.elements('tB1A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('tB1A[2]').value)) {
		total += Number(document.dqtsForm.elements('tB1A[2]').value);
	}
	if (document.dqtsForm.elements('tB2A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('tB2A[2]').value)) {
		total += Number(document.dqtsForm.elements('tB2A[2]').value);
	}
	if (document.dqtsForm.elements('tB3A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('tB3A[2]').value)) {
		total += Number(document.dqtsForm.elements('tB3A[2]').value);
	}

	// S
	if (document.dqtsForm.elements('s1A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s1A[2]').value)) {
		total += Number(document.dqtsForm.elements('s1A[2]').value);
	}
	if (document.dqtsForm.elements('s2A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s2A[2]').value)) {
		total += Number(document.dqtsForm.elements('s2A[2]').value);
	}
	if (document.dqtsForm.elements('s3A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s3A[2]').value)) {
		total += Number(document.dqtsForm.elements('s3A[2]').value);
	}
	if (document.dqtsForm.elements('s4A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s4A[2]').value)) {
		total += Number(document.dqtsForm.elements('s4A[2]').value);
	}
	if (document.dqtsForm.elements('s5A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s5A[2]').value)) {
		total += Number(document.dqtsForm.elements('s5A[2]').value);
	}
	if (document.dqtsForm.elements('s6A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s6A[2]').value)) {
		total += Number(document.dqtsForm.elements('s6A[2]').value);
	}
	if (document.dqtsForm.elements('s7A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s7A[2]').value)) {
		total += Number(document.dqtsForm.elements('s7A[2]').value);
	}
	if (document.dqtsForm.elements('s8A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s8A[2]').value)) {
		total += Number(document.dqtsForm.elements('s8A[2]').value);
	}
	if (document.dqtsForm.elements('s9A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s9A[2]').value)) {
		total += Number(document.dqtsForm.elements('s9A[2]').value);
	}
	if (document.dqtsForm.elements('s10A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s10A[2]').value)) {
		total += Number(document.dqtsForm.elements('s10A[2]').value);
	}
	if (document.dqtsForm.elements('s11A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s11A[2]').value)) {
		total += Number(document.dqtsForm.elements('s11A[2]').value);
	}
	if (document.dqtsForm.elements('s12A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s12A[2]').value)) {
		total += Number(document.dqtsForm.elements('s12A[2]').value);
	}
	if (document.dqtsForm.elements('s13A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('s13A[2]').value)) {
		total += Number(document.dqtsForm.elements('s13A[2]').value);
	}

	// PC
	if (document.dqtsForm.elements('pC1A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('pC1A[2]').value)) {
		total += Number(document.dqtsForm.elements('pC1A[2]').value);
	}
	if (document.dqtsForm.elements('pC2A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('pC2A[2]').value)) {
		total += Number(document.dqtsForm.elements('pC2A[2]').value);
	}
	if (document.dqtsForm.elements('pC3A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('pC3A[2]').value)) {
		total += Number(document.dqtsForm.elements('pC3A[2]').value);
	}
	if (document.dqtsForm.elements('pC4A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('pC4A[2]').value)) {
		total += Number(document.dqtsForm.elements('pC4A[2]').value);
	}
	if (document.dqtsForm.elements('pC5A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('pC5A[2]').value)) {
		total += Number(document.dqtsForm.elements('pC5A[2]').value);
	}
	if (document.dqtsForm.elements('pC6A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('pC6A[2]').value)) {
		total += Number(document.dqtsForm.elements('pC6A[2]').value);
	}
	if (document.dqtsForm.elements('pC7A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('pC7A[2]').value)) {
		total += Number(document.dqtsForm.elements('pC7A[2]').value);
	}

	// DL
	if (document.dqtsForm.elements('dL1A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dL1A[2]').value)) {
		total += Number(document.dqtsForm.elements('dL1A[2]').value);
	}
	if (document.dqtsForm.elements('dL2A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dL2A[2]').value)) {
		total += Number(document.dqtsForm.elements('dL2A[2]').value);
	}
	if (document.dqtsForm.elements('dL3A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dL3A[2]').value)) {
		total += Number(document.dqtsForm.elements('dL3A[2]').value);
	}
	if (document.dqtsForm.elements('dL4A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dL4A[2]').value)) {
		total += Number(document.dqtsForm.elements('dL4A[2]').value);
	}
	if (document.dqtsForm.elements('dL5A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dL5A[2]').value)) {
		total += Number(document.dqtsForm.elements('dL5A[2]').value);
	}

	// DD
	if (document.dqtsForm.elements('dD1A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dD1A[2]').value)) {
		total += Number(document.dqtsForm.elements('dD1A[2]').value);
	}
	if (document.dqtsForm.elements('dD2A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dD2A[2]').value)) {
		total += Number(document.dqtsForm.elements('dD2A[2]').value);
	}
	if (document.dqtsForm.elements('dD3A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dD3A[2]').value)) {
		total += Number(document.dqtsForm.elements('dD3A[2]').value);
	}
	if (document.dqtsForm.elements('dD4A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dD4A[2]').value)) {
		total += Number(document.dqtsForm.elements('dD4A[2]').value);
	}
	if (document.dqtsForm.elements('dD5A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dD5A[2]').value)) {
		total += Number(document.dqtsForm.elements('dD5A[2]').value);
	}
	if (document.dqtsForm.elements('dD6A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dD6A[2]').value)) {
		total += Number(document.dqtsForm.elements('dD6A[2]').value);
	}
	if (document.dqtsForm.elements('dD7A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dD7A[2]').value)) {
		total += Number(document.dqtsForm.elements('dD7A[2]').value);
	}
	if (document.dqtsForm.elements('dD8A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('dD8A[2]').value)) {
		total += Number(document.dqtsForm.elements('dD8A[2]').value);
	}

	// EDSN
	if (document.dqtsForm.elements('eDSN1A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN1A[2]').value)) {
		total += Number(document.dqtsForm.elements('eDSN1A[2]').value);
	}
	if (document.dqtsForm.elements('eDSN2A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN2A[2]').value)) {
		total += Number(document.dqtsForm.elements('eDSN2A[2]').value);
	}
	if (document.dqtsForm.elements('eDSN3A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN3A[2]').value)) {
		total += Number(document.dqtsForm.elements('eDSN3A[2]').value);
	}
	if (document.dqtsForm.elements('eDSN4A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN4A[2]').value)) {
		total += Number(document.dqtsForm.elements('eDSN4A[2]').value);
	}
	if (document.dqtsForm.elements('eDSN5A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN5A[2]').value)) {
		total += Number(document.dqtsForm.elements('eDSN5A[2]').value);
	}
	if (document.dqtsForm.elements('eDSN6A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN6A[2]').value)) {
		total += Number(document.dqtsForm.elements('eDSN6A[2]').value);
	}
	if (document.dqtsForm.elements('eDSN7A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN7A[2]').value)) {
		total += Number(document.dqtsForm.elements('eDSN7A[2]').value);
	}
	if (document.dqtsForm.elements('eDSN8A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN8A[2]').value)) {
		total += Number(document.dqtsForm.elements('eDSN8A[2]').value);
	}
	if (document.dqtsForm.elements('eDSN9A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN9A[2]').value)) {
		total += Number(document.dqtsForm.elements('eDSN9A[2]').value);
	}
	if (document.dqtsForm.elements('eDSN10A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN10A[2]').value)) {
		total += Number(document.dqtsForm.elements('eDSN10A[2]').value);
	}
	if (document.dqtsForm.elements('eDSN11A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN11A[2]').value)) {
		total += Number(document.dqtsForm.elements('eDSN11A[2]').value);
	}
	if (document.dqtsForm.elements('eDSN12A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN12A[2]').value)) {
		total += Number(document.dqtsForm.elements('eDSN12A[2]').value);
	}
	if (document.dqtsForm.elements('eDSN13A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN13A[2]').value)) {
		total += Number(document.dqtsForm.elements('eDSN13A[2]').value);
	}
	if (document.dqtsForm.elements('eDSN14A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN14A[2]').value)) {
		total += Number(document.dqtsForm.elements('eDSN14A[2]').value);
	}
	if (document.dqtsForm.elements('eDSN15A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN15A[2]').value)) {
		total += Number(document.dqtsForm.elements('eDSN15A[2]').value);
	}
	if (document.dqtsForm.elements('eDSN16A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN16A[2]').value)) {
		total += Number(document.dqtsForm.elements('eDSN16A[2]').value);
	}
	if (document.dqtsForm.elements('eDSN17A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN17A[2]').value)) {
		total += Number(document.dqtsForm.elements('eDSN17A[2]').value);
	}
	if (document.dqtsForm.elements('eDSN18A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN18A[2]').value)) {
		total += Number(document.dqtsForm.elements('eDSN18A[2]').value);
	}
	if (document.dqtsForm.elements('eDSN19A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN19A[2]').value)) {
		total += Number(document.dqtsForm.elements('eDSN19A[2]').value);
	}
	if (document.dqtsForm.elements('eDSN20A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN20A[2]').value)) {
		total += Number(document.dqtsForm.elements('eDSN20A[2]').value);
	}
	if (document.dqtsForm.elements('eDSN21A[2]') != null
			&& checkInputNumericDT(document.dqtsForm.elements('eDSN21A[2]').value)) {
		total += Number(document.dqtsForm.elements('eDSN21A[2]').value);
	}

	// alert("END readabilityErrorTotal: "+ total);//FOR TESTING

	readabilityErrorTotal = total;
	// alert(total);
	document.dqtsForm.elements('totalReadabilityErrors').value = total;

	// alert("FINAL readabilityErrorTotal: "+ readabilityErrorTotal);//FOR
	// TESTING

	return total;
}

function calculateTotalErrors() {
	totalFunctionalErrors();
	totalInformationalErrors();
	totalReadabilityErrors();
}

function confirmErrorTotals() {
	if (confirm('Confirm totals: \n Total Fundamental Errors - '
			+ functionalErrorTotal + '\n Total Informational Errors - '
			+ informationalErrorTotal + '\n Total Readability Errors - '
			+ readabilityErrorTotal)) {
		return true;
	}
	return false;
}

function autoPackageEntryPopup() {
	alert("TCRA-EDS data is currently being processed. Data will be available shortly.");
	location.reload();
}

function deleteAeChangeNotice(changeNoticeNumber) {
	if (confirm("Delete change notice " + changeNoticeNumber + "?")) {
		if (checkInputAlphaNumericDT(changeNoticeNumber)) {
			// alert('deleteChangeNotice '+changeNoticeNumber);//for testing
			// method = admin.package.deleteChangeNotice.action
			window
					.open(
							'/dqts/admin/package/aeChangeNoticeAndPartTotalsList.do?crumb=reset&method=Delete+Change+Notice&editFunction=deleteChangeNotice&changeNoticeNumber='
									+ changeNoticeNumber
									+ '&x='
									+ Math.random(), 'maincontent');
		} else {
			alert("Invalid input.");
		}
	}
}

function saveCommentText(text) {
	document.dqtsForm.elements['wrapperComments'].value = text;
}
function saveEmailText(text) {
	document.dqtsForm.elements['wrapperExtraEmails'].value = text;
}

function commentTextCounter(maxLen) {

	if (document.dqtsForm.elements['wrapperComments'].value.length > maxLen) { // if
																				// too
																				// long...trim
																				// it!
		document.dqtsForm.elements['wrapperComments'].value = document.dqtsForm.elements['wrapperComments'].value
				.substring(0, maxLen);
		// otherwise, update 'characters left' counter
	} else {
	}
	document.dqtsForm.elements['remLen1'].value = maxLen
			- document.dqtsForm.elements['wrapperComments'].value.length;
}

function updateComponentTypeWeightage(componentCode, componentTypeCode, weight) {

	if (weight.length > 0 && checkInputNumericDT(weight)) {
		// alert('updateWeightage '+weight);//for testing
		// method = maintenance.componentTypeWeight.save.action
		window
				.open(
						'/dqts/maintenance/componentSearch.do?crumb=reset&method=Save+Component+Type+Weight&component='
								+ componentCode
								+ '&componentType='
								+ componentTypeCode
								+ '&typeWeight='
								+ weight
								+ '&x=' + Math.random(), 'maincontent');
	} else {
		alert("Invalid input.");
	}
}

function updateComponentWeightage(componentCode, weight) {
	if (weight.length > 0
			&& confirm("Change current weight for this component?")) {
		if (checkInputNumericDT(weight)) {
			// alert('updateWeightage '+weight);//for testing
			// method = maintenance.componentWeight.save.action
			window
					.open(
							'/dqts/maintenance/componentSearch.do?crumb=reset&method=Save+Component+Weight&component='
									+ componentCode
									+ '&weight='
									+ weight
									+ '&x=' + Math.random(), 'maincontent');
		} else {
			alert("Invalid input.");
		}
	}
}

function getComponentTypeWeightage(componentCode) {
	if (checkInputAlphaNumericDT(componentCode)) {
		// alert('getComponentTypeWeightage '+componentCode);//for testing
		// method = maintenance.componentSearch.init.action
		window
				.open(
						'/dqts/maintenance/componentSearch.do?crumb=reset&method=Component+Search&component='
								+ componentCode + '&x=' + Math.random(),
						'maincontent');
	} else {
		alert("Invalid input.");
	}
}

function saveCoordinatorWantDate(trackingNumber) {
	var coordinatorWantDate = document.dqtsForm.elements['coordinatorWantDate'].value;

	if (!checkDate(coordinatorWantDate, 'Coordinator Want Date')) {
		return false;
	} else {
		// method = admin.package.edit.save.action
		openModal();
		window
				.open(
						'/dqts/admin/package/editWrapper.do?crumb=reset&method=Save&editFlag=true&editFunction=Save+Coordinator+Want+Date&selectedTrackingNumber='
								+ trackingNumber
								+ '&coordinatorWantDate='
								+ coordinatorWantDate + '&x=' + Math.random(),
						'maincontent');
	}
}

function checkThisDate(date) {

	var currentTime = new Date();
	var month = currentTime.getMonth() + 1;
	var day = currentTime.getDate();
	var year = currentTime.getFullYear();

	if (date != null && date != '') {

		var yyyy = eval(date.substring(6, 10)); // alert(yyyy);
		var mm = eval(date.substring(0, 2)); // alert(mm);
		var dd = eval(date.substring(3, 5)); // alert(dd);

		if (yyyy < year || (dd < day && mm == month)
				|| (mm < month && yyyy == year)) {
			alert("Selected Date must be current or future date.");
			return false;
		}
		if (date.charAt(2) != "/" || date.charAt(5) != "/") {
			alert("Selected Date must be in the format mm/dd/yyyy.");
			return false;
		}
	}

	return true;

}

function saveColCoordinatorWantDate(trackingNumber, partNumber,
		coordinatorWantDate, source) {

	if (coordinatorWantDate == null || coordinatorWantDate.length == 0
			&& confirm("Delete Coordinator Want Date?")) {
		// method = admin.package.edit.fromWorkload.action
		window
				.open(
						'/dqts/admin/package/workload.do?crumb=reset&method=Edit+Package+from+Workload&editFlag=true&editFunction=Save+Coordinator+Want+Date&selectedTrackingNumber='
								+ trackingNumber
								+ '&coordinatorWantDate='
								+ '&x=' + Math.random(), 'maincontent');
	} else if (confirm("Save Coordinator Want Date?")) {
		if (checkThisDate(coordinatorWantDate)) {
			// method = admin.package.edit.fromWorkload.action
			if (source == 'workload') {
				var xmlhttp;
				var params = 'crumb=reset&method=Edit Package from Workload&editFlag=true&editFunction=Save+Coordinator+Want+Date&selectedTrackingNumber='
						+ trackingNumber
						+ '&coordinatorWantDate='
						+ coordinatorWantDate + '&x=' + Math.random();

				// document.getElementById('UpdateMsg').style.display = 'block';
				showUpdatingByTrackingNumber(trackingNumber);

				if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome,
											// Opera, Safari
					xmlhttp = new XMLHttpRequest();
				} else {// code for IE6, IE5
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}

				xmlhttp.onreadystatechange = function() {

					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

						var output = xmlhttp.responseText;

						if (output.indexOf("<form") > 0) {
							var tmp = output.substring(output.indexOf("<form"),
									output.indexOf("</form>")); // div segment

							tmp = tmp.substring(tmp.indexOf(">") + 1);

							document.getElementById("Data").innerHTML = tmp;
							document.getElementById('UpdateMsg').style.display = 'none';

						}
						return false;
					}
				}
				xmlhttp.open("POST",
						'/dqts/admin/package/packageManagementAjaxCall.do',
						true);
				xmlhttp.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xmlhttp.send(params);
			} else {
				window
						.open(
								'/dqts/admin/package/workload.do?crumb=reset&method=Edit+Package+from+Workload&editFlag=true&editFunction=Save+Coordinator+Want+Date&selectedTrackingNumber='
										+ trackingNumber
										+ '&coordinatorWantDate='
										+ coordinatorWantDate
										+ '&x='
										+ Math.random(), 'maincontent');
			}
		}
	} else {
		// cwdLinkBlock${eachWrapperDetail.trackingNumber}${eachWrapperDetail.partNumber}
		var link = document.getElementById('cwdLinkBlock' + trackingNumber
				+ partNumber);

		// editCwdBlock${eachWrapperDetail.trackingNumber}${eachWrapperDetail.partNumber}
		var txtBox = document.getElementById('editCwdBlock' + trackingNumber
				+ partNumber);

		if (link.style.display == 'block')
			link.style.display = 'none';
		else
			link.style.display = 'block';

		if (txtBox.style.display == 'block')
			txtBox.style.display = 'none';
		else
			txtBox.style.display = 'block';

		return false;
	}
}
function flagWrapperAsHotJob(trackingNumber, coordinatorWantDate, source,
		hotJobFlag) {
	var verbiage;
	if (hotJobFlag == 'Y') {
		verbiage = "Flag ";
	} else {
		verbiage = "UnFlag ";
	}

	// if(confirm("Flag "+trackingNumber+" as Hot Job?")){
	if (confirm(verbiage + trackingNumber + " as Hot Job?")) {

		if (checkInputAlphaNumericDT(trackingNumber)) {

			if (coordinatorWantDate != null && coordinatorWantDate.length > 0) {
				// alert('flagAsHotJob '+
				// trackingNumber+'&nbsp;'+partNumber);//for testing
				// method = admin.package.wrapperDetail.hotJobFlag.action
				// Hot Job w/Date (01)

				if (source == 'workload') {

					showUpdatingByTrackingNumber(trackingNumber);
					var xmlhttp;

					var params = 'crumb=reset&method=Flag As Hot Job&source=workload&selectedTrackingNumber='
							+ trackingNumber
							+ '&hotJobFlag='
							+ hotJobFlag
							+ '&x=' + Math.random();

					if (window.XMLHttpRequest) {// code for IE7+, Firefox,
												// Chrome, Opera, Safari
						xmlhttp = new XMLHttpRequest();
					} else {// code for IE6, IE5
						xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
					}

					xmlhttp.onreadystatechange = function() {

						if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

							var output = xmlhttp.responseText;

							if (output.indexOf("<form") > 0) {
								var tmp = output.substring(output
										.indexOf("<form"), output
										.indexOf("</form>")); // div segment

								tmp = tmp.substring(tmp.indexOf(">") + 1);

								document.getElementById("Data").innerHTML = tmp;
								document.getElementById('UpdateMsg').style.display = 'none';

							}
							return false;
						}
					}
					xmlhttp.open("POST",
							'/dqts/admin/package/packageManagementAjaxCall.do',
							true);
					xmlhttp.setRequestHeader("Content-type",
							"application/x-www-form-urlencoded");
					xmlhttp.send(params);
				} else {
					window.open(
							'/dqts/admin/package/workload.do?crumb=reset&method=Flag+As+Hot+Job&&source='
									+ source + '&selectedTrackingNumber='
									+ trackingNumber + '&hotJobFlag='
									+ hotJobFlag + '&x=' + Math.random(),
							'maincontent');
				}
			} else {
				alert("Please Enter: Coordinator Want Date");
			}
		} else {
			alert("Invalid input.");
		}
	} else {
		return false;
	}
}

function flagAsHotJob(trackingNumber, partNumber, coordinatorWantDate, source) {
	// if(confirm("Flag "+trackingNumber+"-"+partNumber+" as Hot Job?")){
	if (confirm("Flag " + trackingNumber + " as Hot Job?")) {
		if (checkInputAlphaNumericDT(trackingNumber)
				&& checkInputAlphaNumericDT(partNumber)) {

			if (coordinatorWantDate != null && coordinatorWantDate.length > 0) {
				// alert('flagAsHotJob '+
				// trackingNumber+'&nbsp;'+partNumber);//for testing
				// method = admin.package.wrapperDetail.hotJobFlag.action
				// Hot Job w/Date (01)
				if (source == 'workload') {
					showUpdating(trackingNumber, partNumber);
					var xmlhttp;
					var params = 'crumb=reset&method=Flag As Hot Job&hotJobFlag=01&source=workload&selectedTrackingNumber='
							+ trackingNumber
							+ '&selectedPartNumber='
							+ partNumber + '&x=' + Math.random();

					if (window.XMLHttpRequest) {// code for IE7+, Firefox,
												// Chrome, Opera, Safari
						xmlhttp = new XMLHttpRequest();
					} else {// code for IE6, IE5
						xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
					}

					xmlhttp.onreadystatechange = function() {

						if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

							var output = xmlhttp.responseText;

							if (output.indexOf("<form") > 0) {
								var tmp = output.substring(output
										.indexOf("<form"), output
										.indexOf("</form>")); // div segment

								tmp = tmp.substring(tmp.indexOf(">") + 1);

								document.getElementById("Data").innerHTML = tmp;
								document.getElementById('UpdateMsg').style.display = 'none';

							}
							return false;
						}
					}
					xmlhttp.open("POST",
							'/dqts/admin/package/packageManagementAjaxCall.do',
							true);
					xmlhttp.setRequestHeader("Content-type",
							"application/x-www-form-urlencoded");
					xmlhttp.send(params);
				} else {
					window
							.open(
									'/dqts/admin/package/workload.do?crumb=reset&method=Flag+As+Hot+Job&hotJobFlag=01&source=workload&selectedTrackingNumber='
											+ trackingNumber
											+ '&selectedPartNumber='
											+ partNumber
											+ '&x='
											+ Math.random(), 'maincontent');
				}
			} else {
				// alert('flagAsHotJob '+
				// trackingNumber+'&nbsp;'+partNumber);//for testing
				// method = admin.package.wrapperDetail.hotJobFlag.action
				// Hot Job w/o Date (02)

				if (source == 'workload') {
					showUpdating(trackingNumber, partNumber);
					var xmlhttp;
					var params = 'crumb=reset&method=Flag As Hot Job&hotJobFlag=02&source=workload&selectedTrackingNumber='
							+ trackingNumber
							+ '&selectedPartNumber='
							+ partNumber + '&x=' + Math.random();

					if (window.XMLHttpRequest) {// code for IE7+, Firefox,
												// Chrome, Opera, Safari
						xmlhttp = new XMLHttpRequest();
					} else {// code for IE6, IE5
						xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
					}

					xmlhttp.onreadystatechange = function() {

						if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

							var output = xmlhttp.responseText;

							if (output.indexOf("<form") > 0) {
								var tmp = output.substring(output
										.indexOf("<form"), output
										.indexOf("</form>")); // div segment

								tmp = tmp.substring(tmp.indexOf(">") + 1);

								document.getElementById("Data").innerHTML = tmp;
								document.getElementById('UpdateMsg').style.display = 'none';

							}
							return false;
						}
					}
					xmlhttp.open("POST",
							'/dqts/admin/package/packageManagementAjaxCall.do',
							true);
					xmlhttp.setRequestHeader("Content-type",
							"application/x-www-form-urlencoded");
					xmlhttp.send(params);
				} else {
					window
							.open(
									'/dqts/admin/package/workload.do?crumb=reset&method=Flag+As+Hot+Job&hotJobFlag=02&source=workload&selectedTrackingNumber='
											+ trackingNumber
											+ '&selectedPartNumber='
											+ partNumber
											+ '&x='
											+ Math.random(), 'maincontent');
				}
			}
		} else {
			alert("Invalid input.");
		}
	} else {
		return false;
	}
}

function unflagAsHotJob(trackingNumber, partNumber, source) {
	if (confirm("Unflag " + trackingNumber + "-" + partNumber + " as Hot Job?")) {
		if (checkInputAlphaNumericDT(trackingNumber)
				&& checkInputAlphaNumericDT(partNumber)) {
			// alert('unflagAsHotJob '+
			// trackingNumber+'&nbsp;'+partNumber);//for testing
			// method = admin.package.wrapperDetail.hotJobFlag.action

			if (source == 'workload') {
				showUpdating(trackingNumber, partNumber);
				var xmlhttp;
				var params = 'crumb=reset&method=Flag As Hot Job&hotJobFlag=&source=workload&selectedTrackingNumber='
						+ trackingNumber
						+ '&selectedPartNumber='
						+ partNumber
						+ '&x=' + Math.random();

				if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome,
											// Opera, Safari
					xmlhttp = new XMLHttpRequest();
				} else {// code for IE6, IE5
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}

				xmlhttp.onreadystatechange = function() {

					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

						var output = xmlhttp.responseText;

						if (output.indexOf("<form") > 0) {
							var tmp = output.substring(output.indexOf("<form"),
									output.indexOf("</form>")); // div segment

							tmp = tmp.substring(tmp.indexOf(">") + 1);

							document.getElementById("Data").innerHTML = tmp;
							document.getElementById('UpdateMsg').style.display = 'none';

						}
						return false;
					}
				}
				xmlhttp.open("POST",
						'/dqts/admin/package/packageManagementAjaxCall.do',
						true);
				xmlhttp.setRequestHeader("Content-type",
						"application/x-www-form-urlencoded");
				xmlhttp.send(params);
			} else {
				window
						.open(
								'/dqts/admin/package/workload.do?crumb=reset&method=Flag+As+Hot+Job&hotJobFlag=&source=workload&selectedTrackingNumber='
										+ trackingNumber
										+ '&selectedPartNumber='
										+ partNumber
										+ '&x=' + Math.random(), 'maincontent');
			}
		} else {
			alert("Invalid input.");
		}
	} else {
		return false;
	}
}

function executeHotJobUpdate() {
	var xmlhttp;
	var params = 'method=Update Hot Jobs&x=' + Math.random();

	document.getElementById('executeHotJobLinkActive').style.display = 'none';
	document.getElementById('executeHotJobLinkIdle').style.display = 'block';

	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			// if(xmlhttp.responseText.indexOf("success") >0){
			if (xmlhttp.responseText.indexOf("error") < 0) {
				document.getElementById('executeHotJobLinkActive').style.display = 'block';
				document.getElementById('executeHotJobLinkIdle').style.display = 'none';
				document.getElementById('executeHotJobLinkError').style.display = 'none';
			} else {
				document.getElementById('executeHotJobLinkActive').style.display = 'none';
				document.getElementById('executeHotJobLinkIdle').style.display = 'none';
				document.getElementById('executeHotJobLinkError').style.display = 'block';
			}
			return false;
		}
	}

	xmlhttp.open("POST", '/dqts/admin/package/packageManagementAjaxCall.do',
			true);
	xmlhttp.setRequestHeader("Content-type",
			"application/x-www-form-urlencoded");
	xmlhttp.send(params);
}

function showUpdating(trackingNumber, partNumber) {
	if (document.getElementById('Update' + trackingNumber + partNumber) != null) {
		document.getElementById('Update' + trackingNumber + partNumber).style.display = 'block';
	}

	if (document.getElementById('Action' + trackingNumber + partNumber) != null) {
		document.getElementById('Action' + trackingNumber + partNumber).style.display = 'none';
	}

	if (document.getElementById('CWDUpdate' + trackingNumber + partNumber) != null) {
		document.getElementById('CWDUpdate' + trackingNumber + partNumber).style.display = 'block';
	}

	if (document.getElementById('CWD' + trackingNumber + partNumber) != null) {
		document.getElementById('CWD' + trackingNumber + partNumber).style.display = 'none';
	}

	if (document.getElementById('HotJobUpdate' + trackingNumber + partNumber) != null) {
		document.getElementById('HotJobUpdate' + trackingNumber + partNumber).style.display = 'block';
	}

	if (document.getElementById('HotJob' + trackingNumber + partNumber) != null) {
		document.getElementById('HotJob' + trackingNumber + partNumber).style.display = 'none';
	}

	return;
}
function showUpdatingByTrackingNumber(trackingNumber) {
	$('.Update' + trackingNumber).show();
	$('.Action' + trackingNumber).hide();
	return;
}
// var initMarkupUpload = false;
// function uploadMarkup(trackingNumber,partNumber,fileName,source){
function uploadMarkup(trackingNumber, partNumber, changeNoticeNumber,
		checkerOrMentor, fileName, source, markupType) {
	var fileExtension = "";
	var isFileNameValid = false;
//	var roundName = document.getElementById('roundName').value;
	fileName = fileName.toUpperCase();

	if (fileName != null && fileName.length > 0) {
		fileExtension = fileName.substring(fileName.lastIndexOf("."));
	}

	if (fileExtension.length > 0
			&& (fileExtension.lastIndexOf(".XLS") > -1
					|| fileExtension.lastIndexOf(".PDF") > -1
					|| fileExtension.lastIndexOf(".JPG") > -1 || fileExtension.lastIndexOf(".DOC") > -1)) {
		return true;
	} else {
		// document.getElementById('uploadSubmitBlock'+trackingNumber+partNumber).style.display
		// = 'none';
		alert("**INVALID FILE TYPE OR INVALID FILE NAMING CONVENTION** \n\n Acceptable file types are .xls, .pdf, .doc, .docx, .jpg \n\n Acceptable file naming convention is 'TrackingNumber_ChangeNotice_IterationNumber_CWSID.filetype'");
		return false;
	}
}

function uploadMarkupEC(trackingNumber, partNumber, changeNoticeNumber,
		checkerOrMentor, fileName, source) {
	var fileExtension = "";
	var isFileNameValid = false;

	fileName = fileName.toUpperCase();

	if (fileName != null && fileName.length > 0) {
		fileExtension = fileName.substring(fileName.lastIndexOf("."));
	}

//	if (fileName.indexOf("\\" + trackingNumber.toUpperCase() + "_"
//			+ changeNoticeNumber.toUpperCase() + "_") > 0
//			&& fileName.indexOf("_" + checkerOrMentor.toUpperCase() + ".") > 0) {
//		isFileNameValid = true;
//	}

	if (fileExtension.length > 0
			&& isFileNameValid
			&& (fileExtension.lastIndexOf(".XLS") > -1
					|| fileExtension.lastIndexOf(".PDF") > -1
					|| fileExtension.lastIndexOf(".JPG") > -1 || fileExtension
					.lastIndexOf(".DOC") > -1)) {

		return true;
	} else {
		alert("**INVALID FILE TYPE OR INVALID FILE NAMING CONVENTION** \n\n Acceptable file types are .xls, .pdf, .doc, .docx, .jpg ");
		return false;
	}

}

function downloadMarkup(trackingNumber, role, fileName) {
	// alert('downloadMarkup '+
	// trackingNumber+'&nbsp;'+changeNoticeNumber+'&nbsp;'+checkerOrMentor+'&nbsp;'+fileName);//for
	// testing
	// method = admin.package.wrapperDetail.downloadMarkup.action
	window
			.open(
					'/dqts/admin/package/uploadMarkup.do?crumb=reset&method=Download+Markup&selectedTrackingNumber='
							+ trackingNumber
							+ '&markupFilename='
							+ fileName
							+ '&selectedRole=' + role, '_blank');
}

function forwardToUploadMarkup(changeNoticeNumber, trackingNumber, role,
		source, cwsid, partNumber, engineeringChangeLevel, checkingMentorCupid, markUpType) {

	// method = admin.package.wrapperDetail.init.uploadMarkup.action
	
	// alert(checkingMentorCupid);
	if (role == '06') {
		window
				.open(
						'/dqts/admin/package/uploadMarkup.do?crumb=reset&method=Initialize+Upload+Markup&selectedTrackingNumber='
								+ trackingNumber
								+ '&selectedRole='
								+ role
								+ '&changeNoticeNumber='
								+ changeNoticeNumber
								+ '&selectedPartNumber='
								+ partNumber
								+ '&selectedEngineeringChangeLevel='
								+ engineeringChangeLevel
								+ '&checkingMentor='
								+ checkingMentorCupid
								+ '&assignedCheckerCwsId='
								+ cwsid
								+ '&source='
								+ source
								+ '&markUpType=' 
								+ markUpType
								+'&x=' + Math.random(), '_blank',
						"menubar=0,resizable=1,width=650,height=300");
	} else if (role == '07') {
		window
				.open(
						'/dqts/admin/package/uploadMarkup.do?crumb=reset&method=Initialize+Upload+Markup&selectedTrackingNumber='
								+ trackingNumber
								+ '&selectedRole='
								+ role
								+ '&changeNoticeNumber='
								+ changeNoticeNumber
								+ '&selectedPartNumber='
								+ partNumber
								+ '&selectedEngineeringChangeLevel='
								+ engineeringChangeLevel
								+ '&checkingMentorCwsId='
								+ cwsid
								+ '&checkingMentor='
								+ checkingMentorCupid
								+ '&source=' + source + '&x=' + Math.random(),
						'_blank', "menubar=0,resizable=1,width=650,height=300");
	}
}

function forwardToMarkupSearch() {
	// alert('forwardToMarkupSearch');//for testing
	// method = admin.package.wrapperDetail.init.markupSearch.action
	window
			.open(
					'/dqts/admin/package/markupSearch.do?crumb=reset&method=Initialize+Markup+Search'
							+ '&x=' + Math.random(), 'maincontent');
}
function isMarkupSearchFormComplete() {
	if ((document.dqtsForm.elements['inputMarkupTrackingNumberList'] == null || document.dqtsForm.elements['inputMarkupTrackingNumberList'].value.length == 0)
			&& (document.dqtsForm.elements['changeNoticeNumber'] == null || document.dqtsForm.elements['changeNoticeNumber'].value.length == 0)
			&& (document.dqtsForm.elements['partNumber'] == null || document.dqtsForm.elements['partNumber'].value.length == 0)
			&& (document.dqtsForm.elements['edsName'] == null || document.dqtsForm.elements['edsName'].value.length == 0)) {
		alert("Please select/enter at least 1 search criteria.");
		return false;
	} else {
		openModal();
		return true;
	}
}

function getPartNumbersAndECLs(trackingNumber) {
	if (checkInputAlphaNumericDT(trackingNumber)) {
		// alert('getPartNumbersAndECLs '+trackingNumber);//for testing
		// method = maintenance.updatePartNoAndECL.init.action
		window
				.open(
						'/dqts/maintenance/updatePartNoAndECL.do?crumb=reset&method=Part+Number+ECL+Update&trackingNumber='
								+ trackingNumber + '&x=' + Math.random(),
						'maincontent');
	} else {
		alert("Invalid input.");
	}
}

function updatePartNumber(trackingNumber, partNumber, newPartNumber,
		engineeringChangeLevel, source) {
	if (newPartNumber.length > 0 && newPartNumber.length <= 10
			&& confirm("Change " + partNumber + " to " + newPartNumber + "?")) {
		if (checkInputAlphaNumericDT(newPartNumber)) {
			// alert('updatePartNumber '+trackingNumber);//for testing
			// method = maintenance.partNumber.save.action
			window
					.open(
							'/dqts/maintenance/updatePartNoAndECL.do?crumb=reset&method=Update+Part+Number&trackingNumber='
									+ trackingNumber
									+ '&partNumber='
									+ partNumber
									+ '&newPartNumber='
									+ newPartNumber
									+ '&engineeringChangeLevel='
									+ engineeringChangeLevel
									+ '&x='
									+ Math.random(), 'maincontent');
		} else {
			alert("Invalid input.");
		}
	} else if (newPartNumber.length > 10) {
		alert("Part Number cannot be greater than 10 characters");
	}
}

function updateEngineeringChangeLevel(trackingNumber, partNumber,
		newEngineeringChangeLevel, engineeringChangeLevel, source) {
	if (newEngineeringChangeLevel.length > 0
			&& newEngineeringChangeLevel.length <= 5
			&& confirm("Change " + partNumber + "/" + engineeringChangeLevel
					+ " to " + partNumber + "/" + newEngineeringChangeLevel
					+ "?")) {
		if (checkInputAlphaNumericDT(newEngineeringChangeLevel)) {
			// alert('updateEngineeringChangeLevel '+trackingNumber);//for
			// testing
			// method = maintenance.engineeringChangeLevel.save.action
			window
					.open(
							'/dqts/maintenance/updatePartNoAndECL.do?crumb=reset&method=Update+Engineering+Change+Level&trackingNumber='
									+ trackingNumber
									+ '&partNumber='
									+ partNumber
									+ '&engineeringChangeLevel='
									+ engineeringChangeLevel
									+ '&newEngineeringChangeLevel='
									+ newEngineeringChangeLevel
									+ '&x='
									+ Math.random(), 'maincontent');
		} else {
			alert("Invalid input.");
		}
	} else if (newEngineeringChangeLevel.length > 5) {
		alert("Engineering Change Level cannot be greater than 5 characters");
	}
}

function getPackageStatus(trackingNumber) {
	if (checkInputAlphaNumericDT(trackingNumber)) {
		// alert('getPackageStatus '+trackingNumber);//for testing
		// method = maintenance.updatePkgAndPartNoStat.init.action
		window
				.open(
						'/dqts/maintenance/updatePkgAndPartNoStat.do?crumb=reset&method=Package+Part+Number+Status+Update'
								+ '&trackingNumber='
								+ trackingNumber
								+ '&x='
								+ Math.random(), 'maincontent');
	} else {
		alert("Invalid input.");
	}
}

function updatePackageStatus(trackingNumber, newPackageStatus) {
	if (newPackageStatus.length == 2 && confirm("Change Package Status?")) {
		if (checkInputNumericDT(newPackageStatus)) {
			// alert('updatePackageStatus '+trackingNumber);//for testing
			// method = maintenance.packageStatus.save.action
			window
					.open(
							'/dqts/maintenance/updatePkgAndPartNoStat.do?crumb=reset&method=Update+Package+Status&trackingNumber='
									+ trackingNumber
									+ '&packageStatus='
									+ newPackageStatus + '&x=' + Math.random(),
							'maincontent');
		} else {
			alert("Invalid input.");
		}
	}
}

function updatePartNumberStatus(trackingNumber, partNumber,
		engineeringChangeLevel, newPartNumberStatus) {
	if (newPartNumberStatus.length == 2
			&& confirm("Change Part Number Status?")) {
		if (checkInputNumericDT(newPartNumberStatus)) {
			// alert('updatePartNumberStatus '+trackingNumber);//for testing
			// method = maintenance.partNumberStatus.save.action
			window
					.open(
							'/dqts/maintenance/updatePkgAndPartNoStat.do?crumb=reset&method=Update+Part+Number+Status&trackingNumber='
									+ trackingNumber
									+ '&partNumber='
									+ partNumber
									+ '&engineeringChangeLevel='
									+ engineeringChangeLevel
									+ '&partNumberStatus='
									+ newPartNumberStatus
									+ '&x='
									+ Math.random(), 'maincontent');
		} else {
			alert("Invalid input.");
		}
	}
}

function openModal() {
	document.getElementById('modal').style.display = 'block';
	document.getElementById('fade').style.display = 'block';
}

function closeModal() {
	document.getElementById('modal').style.display = 'none';
	document.getElementById('fade').style.display = 'none';
}

function retrieveWrapperComments(tn) {
	var xmlhttp;
	var params = 'method=Retrieve Wrapper Comments&trackingNumber=' + tn
			+ '&x=' + Math.random();

	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			var output = xmlhttp.responseText;

			if (output.length > 0 && output.indexOf("<table") > 0) {
				document.getElementById("commentBlock1").innerHTML = output;
				// document.getElementById('commentBlock1ShowLink').style.display
				// = 'none';
			} else {
				document.getElementById("commentBlock1").innerHTML = "No comments available";
			}
			return false;

		}
	}

	xmlhttp.open("POST", '/dqts/admin/package/packageManagementAjaxCall.do',
			true);
	xmlhttp.setRequestHeader("Content-type",
			"application/x-www-form-urlencoded");
	xmlhttp.send(params);
}

function retrieveWrapperMarkupFiles(tn) {
	var xmlhttp;
	var params = 'method=Retrieve Wrapper Markup Files&trackingNumber=' + tn
			+ '&x=' + Math.random();

	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			var output = xmlhttp.responseText;

			if (output.length > 0 && output.indexOf("<table") > 0) {
				document.getElementById("markupFiles1").innerHTML = output;
				// document.getElementById('markupFiles1ShowLink').style.display
				// = 'none';
			} else {
				document.getElementById("markupFiles1").innerHTML = "No comments available";
			}
			return false;

		}
	}

	xmlhttp.open("POST", '/dqts/admin/package/packageManagementAjaxCall.do',
			true);
	xmlhttp.setRequestHeader("Content-type",
			"application/x-www-form-urlencoded");
	xmlhttp.send(params);
}

function retrieveWrapperHistory(tn) {
	var xmlhttp;
	var params = 'method=Retrieve Wrapper History&trackingNumber=' + tn + '&x='
			+ Math.random();

	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

			var output = xmlhttp.responseText;

			if (output.length > 0 && output.indexOf("<table") > 0) {
				document.getElementById("historyBlock1").innerHTML = output;
				// document.getElementById('historyBlock1ShowLink').style.display
				// = 'none';
			} else {
				document.getElementById("historyBlock1").innerHTML = "No comments available";
			}
			return false;

		}
	}

	xmlhttp.open("POST", '/dqts/admin/package/packageManagementAjaxCall.do',
			true);
	xmlhttp.setRequestHeader("Content-type",
			"application/x-www-form-urlencoded");
	xmlhttp.send(params);
}

function isEDSNoticeChanged(tn, pn, ecl, rf) {

	if (pn.length > 0 && ecl.length > 0) {

		var xmlhttp;
		var params = 'method=Is EDS Notice Changed&partNumber=' + pn
				+ '&engineeringChangeLevel=' + ecl + '&releaseFacility=' + rf
				+ '&x=' + Math.random();

		if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera,
									// Safari
			xmlhttp = new XMLHttpRequest();
		} else {// code for IE6, IE5
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}

		xmlhttp.onreadystatechange = function() {

			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

				var output = xmlhttp.responseText;

				if (output.length > 0) {
					document.getElementById("isEDSNoticeChanged" + tn + pn
							+ ecl).innerHTML = output;
				}
				return false;

			}
		}

		xmlhttp.open("POST",
				'/dqts/admin/package/packageManagementAjaxCall.do', true);
		xmlhttp.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		xmlhttp.send(params);
	} else {
		return false;
	}

}

function isNoticeInEDS(tn, pn, ecl, rf) {

	if (pn.length > 0 && ecl.length > 0) {

		var xmlhttp;
		var params = 'method=Is Notice In EDS&trackingNumber=' + tn
				+ '&partNumber=' + pn + '&engineeringChangeLevel=' + ecl
				+ '&releaseFacility=' + rf + '&x=' + Math.random();

		if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera,
									// Safari
			xmlhttp = new XMLHttpRequest();
		} else {// code for IE6, IE5
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}

		xmlhttp.onreadystatechange = function() {

			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

				var output = xmlhttp.responseText;

				if (output.length > 0) {
					document.getElementById("isNoticeInEDS" + tn + pn + ecl).innerHTML = output;
				}
				return false;

			}
		}

		xmlhttp.open("POST",
				'/dqts/admin/package/packageManagementAjaxCall.do', true);
		xmlhttp.setRequestHeader("Content-type",
				"application/x-www-form-urlencoded");
		xmlhttp.send(params);
	} else {
		return false;
	}
}
