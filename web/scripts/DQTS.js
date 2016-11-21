(function(global, $) {
    
    var DQTS = function() {
        return new DQTS.init();
    }
    
    var supportedRoles = ['01','02','03','04','05','06', '07','08'];
    
    /*var greetings = {
        en: 'Hello',
        es: 'Hola'
    };*/

    var randomVal = Math.random();
    
    
    DQTS.prototype = {

        forwardToAutoPackageEntry: function() {
            // method = admin.package.autoPackageEntryInit.action
            window.open(
                    '/dqts/admin/package/aeChangeNoticeAndPartTotalsList.do?crumb=reset&method=Initialize+Auto+Package+Entry'
                    + '&x=' + randomVal, 'maincontent');
        },

        forwardToCreate: function() {
            // method = admin.package.create.action
            window.open(
                '/dqts/admin/package/create.do?crumb=reset&method=Create+Package'
                + '&x=' + randomVal, 'maincontent');
        },

        forwardToSearch: function() {
            // method = admin.package.search.action
            window.open(
                '/dqts/admin/package/search.do?crumb=reset&method=Search+Review+Package'
                + '&x=' + randomVal, 'maincontent');
        },

        forwardToRetrieveAuditParts: function() {
            // method = admin.package.corpAudit.partSearch.init.action
            window.open(
                    '/dqts/admin/package/corpAuditPartSearch.do?crumb=reset&method=Initialize+Audit+Parts+Retrieval'
                    + '&x=' + randomVal, 'maincontent');
        },

        forwardToResourceAllocation: function() {
            // method = admin.package.retrieve.resourceAllocation.action
            window.open(
                    '/dqts/admin/package/resourceAllocation.do?crumb=reset&method=Resource+Allocation'
                    + '&x=' + randomVal, 'maincontent');
        },

        forwardToDailyCheckerLoad: function() {
            // method = admin.package.retrieve.dailyCheckerLoad.action
            window.open(
                '/dqts/admin/package/dailyCheckerLoad.do?crumb=reset&method=Daily+Checker+Load'
                + '&x=' + randomVal, 'maincontent');
        },

        forwardToMonthToDateDashboard: function() {
            // method = admin.package.monthToDateDBSearch.action
            window.open(
                    '/dqts/admin/package/monthToDateDBSearch.do?crumb=reset&method=Month+to+Date+Dashboard'
                    + '&x=' + randomVal, 'maincontent');
        },

        forwardToFacilityTotalsDashboard: function() {
            // method = admin.package.retrieve.facilityTotalsDashboard.action
            window.open(
                    '/dqts/admin/package/facilityTotalsDashboard.do?crumb=reset&method=Facility+Totals+Dashboard'
                    + '&x=' + randomVal, 'maincontent');
        },

        forwardToAssignNew: function() {
            // method = admin.package.assignmentList.retrieve.action
            window.open(
                    '/dqts/admin/package/assignmentList.do?crumb=reset&method=Assign+Wrapper+Detail'
                    + '&x=' + randomVal, 'maincontent');
        },

        forwardToReassignExisting: function() {
            // method = admin.package.reassignmentList.retrieve.action
            window.open(
                    '/dqts/admin/package/reassignmentList.do?crumb=reset&method=Reassign+Wrapper+Detail'
                    + '&x=' + randomVal, 'maincontent');
        },

        forwardToReview: function (userRole) {
            // method = admin.package.reviewManagement.retrieveWorkload.action
            window.open(
                '/dqts/admin/package/workload.do?crumb=reset&method=Review+Management&role='
                + userRole + '&x=' + randomVal, 'maincontent');
        },

        forwardToEditWrapper: function(userRole) {
            // method = admin.package.retrieve.list.action
                window.open(
                        '/dqts/admin/package/list.do?crumb=reset&method=Retrieve+Package+List&editFlag=true&role='
                        + userRole + '&x=' + randomVal, 'maincontent');

        },

        forwardToEditWrapperDetail: function(userRole) {
                // method = admin.package.wrapperDetail.list.action
                window.open(
                        '/dqts/admin/package/wrapperDetailList.do?crumb=reset&method=Retrieve+Wrapper+Detail+List&editFlag=true&role='
                        + userRole + '&x=' + randomVal, 'maincontent');

        },

        forwardToErrorSummaryReport: function() {
            // method = reports.errorSummaryReport.action
            window.open(
                '/dqts/reports/errorSummaryReport.do?crumb=reset&method=Error+Summary+Report'
                + '&x=' + randomVal, 'maincontent');
        },

        forwardToErrorSubtypeReport: function() {
            // method = reports.drawingChangeNoticeSummaryReport.action
            window.open(
                    '/dqts/reports/drawingChangeNoticeSummaryReport.do?crumb=reset&method=Error+Subtype+Report'
                    + '&x=' + randomVal, 'maincontent');
        },

        forwardToYTDFIRMonthlyChart: function() {
        // method = reports.mentorCheckerComparisonReport.action
        window.open(
                '/dqts/reports/mentorCheckerComparisonReport.do?crumb=reset&method=Supplier+YTD+FIR+Report'
                + '&x=' + randomVal, 'maincontent');
        },

        forwardToAssignmentReport: function() {
            // method = reports.assignmentReport.retrieve.action
            if (confirm("ALERT: Executing this report may result in system performance degradation due to the potentially large amount of data returned.")) {
                window.open(
                        '/dqts/reports/assignmentReport.do?crumb=reset&method=Retrieve+Assignment+Report'
                        + '&x=' + randomVal, 'maincontent');
            } else {
                return false;
            }
        },

        forwardToReassignmentReport: function() {
            // method = reports.reassignmentReport.retrieve.action

            if (confirm("ALERT: Executing this report may result in system performance degradation due to the potentially large amount of data returned.")) {
                window.open(
                        '/dqts/reports/reassignmentReport.do?crumb=reset&method=Retrieve+Reassignment+Report'
                        + '&x=' + randomVal, 'maincontent');
            } else {
                return false;
            }
        },

        forwardToAssignmentSearch: function() {
            // method = admin.package.assignmentSearch.action
            window.open(
                '/dqts/admin/package/assignmentSearch.do?crumb=reset&method=Assignment+Search'
                + '&x=' + randomVal, 'maincontent');
        },

        forwardToReassignmentSearch: function() {
            // method = admin.package.reassignmentSearch.action
            window.open(
                    '/dqts/admin/package/reassignmentSearch.do?crumb=reset&method=Reassignment+Search'
                    + '&x=' + randomVal, 'maincontent');
        },

        forwardToHistorySearch: function() {
            // method = admin.package.historySearch.action
            window.open(
                '/dqts/admin/package/historySearch.do?crumb=reset&method=History+Search'
                + '&x=' + randomVal, 'maincontent');
        },

        forwardToComponentWeightage: function() {
            // method = maintenance.componentSearch.init.action
            window.open(
                '/dqts/maintenance/componentSearch.do?crumb=reset&method=Component+Search'
                + '&x=' + randomVal, 'maincontent');
        },

        forwardToUpdatePartNoECL: function() {
            // method = maintenance.partNoECLSearch.init.action
            window.open(
                    '/dqts/maintenance/updatePartNoAndECL.do?crumb=reset&method=Part+Number+ECL+Update'
                    + '&x=' + randomVal, 'maincontent');
        },

        forwardToUpdatePkgAndPartNoStat: function() {
        // method = maintenance.updatePkgAndPartNoStat.init.action
            window.open(
                    '/dqts/maintenance/updatePkgAndPartNoStat.do?crumb=reset&method=Package+Part+Number+Status+Update'
                    + '&x=' + randomVal, 'maincontent');
        },

        forwardToUpdateHistory: function() {
            // method = maintenance.updateHistory.init.action = History Update
            window.open(
                '/dqts/maintenance/updateHistory.do?crumb=reset&method=History+Update'
                + '&x=' + randomVal, 'maincontent');
        },

        changeRole: function (userRole) {
            // method = user.roleSelect.action
            window.open('/dqts/servlet/DQTSControllerServlet?selectedRole=' + userRole
                + '&x=' + randomVal, '_top');

        },

        checkDate: function (date,fieldId) {

            var currentTime = new Date();
            var month = currentTime.getMonth() + 1;
            var day = currentTime.getDate();
            var year = currentTime.getFullYear();

            if (date != null && date != '') {

                var yyyy = eval(date.substring(6, 10)); // alert(yyyy);
                var mm = eval(date.substring(0, 2)); // alert(mm);
                var dd = eval(date.substring(3, 5)); // alert(dd);

                if (yyyy < year || (dd < day && mm == month)) {
                    //document.getElementById(fieldId).style.color = "red";
                    //document.getElementById(fieldId).style.backgroundColor = "yellow";
                    $('#'+fieldId).css({'color': 'red', 'backgroundColor': 'yellow'});
                    alert(fieldId + " must be current or future date.");
                    return false;
                } else {
                    //document.getElementById(fieldId).style.color = "black";
                    //document.getElementById(fieldId).style.backgroundColor = "white";
                    $('#'+fieldId).css({'color': 'black', 'backgroundColor': 'white'});
                    return true;
                }

            }

            return true;

        },




        
        /*fullName: function() {
            return this.firstName + ' ' + this.lastName;   
        },*/
        
        /*validate: function() {
             if (supportedRoles.indexOf(this.userRole)  === -1) {
                throw "Invalid user";
             }
        }*/
        
        
                            
        /*setRole: function(role) {
            this.userRole = role;
                    
            this.validate();
            
            return this;
        }*/
        
    };
    
    DQTS.init = function() {
        
        var self = this;
        //self.trackingNumber = trackingNumber || '';
        //self.partNumber = partNumber || '';
        
    }
    
    DQTS.init.prototype = DQTS.prototype;
    
    global.DQTS = global.DQTS$ = DQTS;
    
}(window, jQuery));