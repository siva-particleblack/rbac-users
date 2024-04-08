import * as i0 from '@angular/core';
import { Injectable, Component, Directive, Input, NgModule, Pipe, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import * as i2 from '@angular/forms';
import { Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i1 from '@angular/router';
import { NavigationStart } from '@angular/router';
import 'rxjs/add/operator/map';
import * as i13 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i6 from 'primeng/card';
import { CardModule } from 'primeng/card';
import * as i7 from 'primeng/dropdown';
import { DropdownModule } from 'primeng/dropdown';
import * as i8 from 'primeng/accordion';
import { AccordionModule } from 'primeng/accordion';
import * as i9 from 'primeng/multiselect';
import { MultiSelectModule } from 'primeng/multiselect';
import * as i10 from 'primeng/checkbox';
import { CheckboxModule } from 'primeng/checkbox';
import * as i12 from 'primeng/inputtext';
import { InputTextModule } from 'primeng/inputtext';
import * as i14 from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import * as i15 from 'primeng/tooltip';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KnobModule } from 'primeng/knob';
import { MessageModule } from 'primeng/message';
import { OrderListModule } from 'primeng/orderlist';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { SpeedDialModule } from 'primeng/speeddial';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { TreeSelectModule } from 'primeng/treeselect';
import { HttpClient } from '@angular/common/http';

class RbacUsersService {
    constructor() { }
}
RbacUsersService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacUsersService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
RbacUsersService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacUsersService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacUsersService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class RoleConfig {
}
RoleConfig.EndPoint = {
    role: {
        getAllUserRole: '/access-control/role',
        createRole: '/access-control/role/create',
        getLandingPage: '/platform/menu/application',
        addPolicyGroup: '/access-control/role',
        getAllOrgRole: '/access-control/role/organization/{orgid}',
        dossier: '/dossier'
    }
};
class UserConfig {
}
UserConfig.EndPoint = {
    User: {
        getAllUserList: '/org/user',
        getAllUserActiveInactive: '/org/user?includeInactiveUsers=true',
        getUserConfig: '/org/user/getUserPreference/USER_THEME_PREFERENCES/{id}',
        activateUser: '/org/user/activate',
        createUser: '/org/user/create',
        userRole: '/org/user/role',
        managementgroup: '/org/team/managementgroup',
        getAllUserOrgList: '/org/user/organization/',
        saveUserConfig: '/org/user/saveUserPreference'
    },
    Provider: {
        getProviderList: '/ref/provider',
        searchProviderList: '/ref/provider/search',
        addProviderUser: '/ref/provider/create/account'
    }
};
class AttachmentConfig {
}
AttachmentConfig.EndPoint = {
    Attachments: {
        GetAttachmentReferral: '/ref/attachment/referral',
        GetCategoryLookup: '/platform/master/lookup/lookupbycategoryname',
        UploadKey: '/common/files/upload-key',
        DownloadKey: '/common/files/download-key',
        PostAttachment: '/ref/attachment/create',
        PutAttachment: '/ref/attachment'
    }
};
class PolicyGroupConfig {
}
PolicyGroupConfig.EndPoint = {
    policyGroup: {
        getOrgPolicyGroups: '/platform/page-designer/policyGroup/organization/{organizationid}'
    }
};
class RBACINFO {
    constructor() {
        this.apiHost = '';
        this.tokenKey = '';
    }
}
class Environment {
}

class Store {
    constructor(initialState) {
        this._state$ = new BehaviorSubject(initialState);
        this.state$ = this._state$.asObservable();
    }
    get state() {
        return this._state$.getValue();
    }
    setState(nextState) {
        this._state$.next(nextState);
    }
}

class PermissionStore extends Store {
    constructor() {
        super({});
    }
    setStore(data) {
        if (data) {
            this.setState(Object.assign(Object.assign({}, this.state), data));
        }
    }
    getStore(type = 'P') {
        if (type === 'P')
            return of(this.state);
        else
            return of(this.state);
    }
    flat(array) {
        let result = [];
        if (array) {
            array.forEach(item => {
                result.push(item);
                if (item && Array.isArray(item)) {
                    result = result.concat(this.flat(item));
                }
            });
        }
        return result;
    }
}
PermissionStore.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionStore, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PermissionStore.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionStore });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionStore, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class DataStoreService {
    constructor() {
        this.currentStoreSubject = new BehaviorSubject({});
        this.currentStore = this.currentStoreSubject.asObservable();
        // test code
    }
    setData(key, value) {
        const currentStore = this.getCurrentStore();
        currentStore[key] = value;
        this.currentStoreSubject.next(currentStore);
    }
    setObject(value) {
        this.currentStoreSubject.next(value);
    }
    getData(key) {
        const currentStore = this.getCurrentStore();
        return currentStore[key];
    }
    clearStore() {
        const currentStore = this.getCurrentStore();
        Object.keys(currentStore).forEach((key) => {
            delete currentStore[key];
        });
        this.currentStoreSubject.next(currentStore);
    }
    getCurrentStore() {
        return this.currentStoreSubject.value;
    }
}
DataStoreService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataStoreService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
DataStoreService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataStoreService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataStoreService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class AppConstants {
}
AppConstants.errorMessage = 'Something went wrong!';
AppConstants.regexEmail = '^[a-zA-Z0-9_]+(?:[.+][a-zA-Z0-9_]+)*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$';

class UserOrgService {
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    getAllUserList(key) {
        return this.httpService.get(`${UserConfig.EndPoint.User.getAllUserList}/${key}`);
    }
    getAllUserOrgList(orgid) {
        return this.httpService.get(UserConfig.EndPoint.User.getAllUserOrgList + orgid);
    }
    saveUser(data) {
        return this.httpService.post(UserConfig.EndPoint.User.createUser, data);
    }
    updateUser(data, userid) {
        return this.httpService.put(`${UserConfig.EndPoint.User.getAllUserList}/${userid}`, data);
    }
    deleteUser(id) {
        return this.httpService.delete(`${UserConfig.EndPoint.User.getAllUserList}/${id}`);
    }
    activateUser(data) {
        return this.httpService.post(UserConfig.EndPoint.User.activateUser, data);
    }
    addProviderUser(data) {
        return this.httpService.post(UserConfig.EndPoint.Provider.addProviderUser, data);
    }
    addUserRole(data) {
        return this.httpService.post(UserConfig.EndPoint.User.userRole, data);
    }
    uploadKey(objparams) {
        return this.httpService.post(AttachmentConfig.EndPoint.Attachments.UploadKey, objparams);
    }
    getOrgPolicyGroupList(orgid) {
        return this.httpService.get(PolicyGroupConfig.EndPoint.policyGroup.getOrgPolicyGroups.replace('{organizationid}', String(orgid)));
    }
    getAllUserRole(id) {
        return this.httpService.get(RoleConfig.EndPoint.role.getAllOrgRole.replace('{orgid}', String(id)));
    }
    getRoleById(roleid) {
        return this.httpService.get(`${RoleConfig.EndPoint.role.getAllUserRole}/${roleid}`);
    }
}
UserOrgService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserOrgService, deps: [{ token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
UserOrgService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserOrgService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UserOrgService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

class AlertService {
    constructor(router) {
        this.router = router;
        this.subject = new Subject();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    this.clear();
                }
            }
        });
    }
    getAlert() {
        return this.subject.asObservable();
    }
    success(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Success, message, keepAfterRouteChange);
    }
    error(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Error, message, keepAfterRouteChange);
    }
    info(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Info, message, keepAfterRouteChange);
    }
    warn(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Warning, message, keepAfterRouteChange);
    }
    alert(type, message, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: type, message: message });
    }
    clear() {
        // clear alerts
        this.subject.next({});
    }
}
AlertService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
AlertService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));
class Alert {
}
class UserGroupDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
class UserRolePageDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
class UserRoleDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
class UserDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
class AccessManagementConfig {
}
AccessManagementConfig.EndPoint = {
    Organization: {
        getOrganizationList: '/org/organization/all',
        getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
    }
};

const DISPLAY_IN_SECONDS = 8;
class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    ngOnInit() {
        this.alertService.getAlert().subscribe((alert) => {
            if (!alert) {
                // clear alerts when an empty alert is received
                this.alerts = [];
                return;
            }
            // add alert to array
            this.alerts.push(alert);
            // remove alert after 5 seconds
            setTimeout(() => this.removeAlert(alert), DISPLAY_IN_SECONDS * 1000);
        });
    }
    removeAlert(alert) {
        this.alerts = this.alerts.filter(x => x !== alert);
    }
    cssClass(alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case AlertType.Success:
                return 'alert alert-success';
            case AlertType.Error:
                return 'alert alert-danger';
            case AlertType.Info:
                return 'alert alert-info';
            case AlertType.Warning:
                return 'alert alert-warning';
        }
    }
}
AlertComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertComponent, deps: [{ token: AlertService }], target: i0.ɵɵFactoryTarget.Component });
AlertComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AlertComponent, selector: "app-alert", ngImport: i0, template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"], directives: [{ type: i13.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{
                    // moduleId: module.id,
                    selector: 'app-alert',
                    templateUrl: 'alert.component.html',
                    styleUrls: ['./alert.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: AlertService }]; } });

class PermissionDirective {
    constructor(renderer, elementRef, dataStore) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.dataStore = dataStore;
    }
    ngAfterViewInit() {
        const permissions = this.dataStore.state;
        if (permissions) {
            if (!permissions[this.fieldKey]) {
                const template = this.elementRef.nativeElement;
                if (template.tagName === 'A') {
                    if (template) {
                        const r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
                        r.innerHTML = template.innerHTML;
                        r.href = 'javascript:void(0);';
                        r['disabled'] = true;
                        r.className = template.className;
                        this.elementRef.nativeElement.parentNode.replaceChild(r, template);
                    }
                }
                else if (template.tagName === 'P-MULTISELECT' ||
                    template.tagName === 'P-DROPDOWN' ||
                    template.tagName === 'P-CHECKBOX' ||
                    template.tagName === 'P-TREESELECT' ||
                    template.tagName === 'P-RADIOBUTTON' ||
                    template.tagName === 'P-CALENDAR') {
                    if (template) {
                        const r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
                        r.innerHTML = template.innerHTML;
                        r.className = template.className;
                        r.className += ' p-disabled';
                        this.elementRef.nativeElement.parentNode.replaceChild(r, template);
                    }
                }
                else {
                    this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', 'true');
                    const childInputNodes = this.elementRef.nativeElement.querySelectorAll('input, select, textarea, button, a, ng-select, div, lable');
                    childInputNodes.forEach((elem) => {
                        this.renderer.setAttribute(elem, 'disabled', 'true');
                    });
                }
            }
        }
    }
}
PermissionDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: PermissionStore }], target: i0.ɵɵFactoryTarget.Directive });
PermissionDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: PermissionDirective, selector: "[fieldKey]", inputs: { fieldKey: "fieldKey" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[fieldKey]'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: PermissionStore }]; }, propDecorators: { fieldKey: [{
                type: Input
            }] } });

class UsersComponent {
    constructor(userService, fb, alertService, _storeservice) {
        this.userService = userService;
        this.fb = fb;
        this.alertService = alertService;
        this._storeservice = _storeservice;
        this.RBACORG = new RBACINFO();
        this.userList = [];
        this.providerList = [];
        this.filteredUserList = [];
        this.selectedRoles = [];
        this.selectedTeams = [];
        this.userSearch$ = new Subject();
        this.currentDate = new Date();
        this.modelFirstName = '';
        this.modelMiddleName = '';
        this.modelLastName = '';
        this.rolePolicyGroups = [];
        this.userPolicyGroups = [];
        this.validationErrors = {};
        this.formSubmit = false;
        this.providerAccount = false;
        this.checked = true;
        this.sendCredentials = true;
        this.imageInformation = '';
        this.initializeForm();
    }
    ngOnInit() {
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.inputValidationMethod = res['INPUTVALIDATIONMETHOD'];
                this.httpService = res['HTTPSERVICE'];
            }
        });
        if (this.RBACORG['orgID']) {
            this.orgId = parseInt(this.RBACORG['orgID']);
            if (this.orgId) {
                this.getUserList();
                this.getRolesList();
                this.getPolicyGroupList();
            }
        }
    }
    initializeForm() {
        this.userForm = this.fb.group({
            firstname: ['', Validators.required],
            middlename: [''],
            lastname: ['', Validators.required],
            username: [''],
            // dob: [''],
            email: ['', [Validators.required, Validators.pattern(AppConstants.regexEmail)]],
            userroles: ['', Validators.required],
            userteams: [''],
            userpolicygroups: [''],
            organizationid: [''],
            emailtocurrentuser: false,
            isenabled: [true],
            providerId: [''],
            providerAccount: false,
            thumbnail: [''],
            islocked: [false]
        });
    }
    get formValidate() {
        return this.userForm.controls;
    }
    onInput(event, fieldtype, label, required) {
        const error = this.inputValidationMethod(event, fieldtype, label, required);
        if (error && typeof error === 'string') {
            this.validationErrors[label] = error;
        }
        else {
            delete this.validationErrors[label];
        }
    }
    getUserList(_key) {
        this.userService.getAllUserOrgList(this.orgId).subscribe((res) => {
            this.filteredUserList = [];
            this.userList = res.data;
            this.filteredUserList = this.userList;
        }, (_error) => this.alertService.error(AppConstants.errorMessage));
    }
    getRolesList() {
        this.userService.getAllUserRole(this.orgId).subscribe((res) => {
            this.userRoles = res['data'];
        }, (_error) => this.alertService.error(AppConstants.errorMessage));
    }
    clearSearch(event) {
        const inputElement = document.querySelector('.form-control');
        if (inputElement) {
            inputElement.value = '';
            this.filteredUserList = this.userList;
        }
    }
    getPolicyGroupList(_managementGroupId) {
        this.userService.getOrgPolicyGroupList(this.orgId).subscribe((res) => {
            this.policyGroupList = res['data'].sort((a, b) => a.name.localeCompare(b.name));
        }, (err) => console.log(err));
    }
    addUser() {
        const userData = this.userForm.getRawValue();
        delete userData.thumbnail;
        this.formSubmit = true;
        if (this.userForm.valid) {
            const rolePolicyGroupsIds = this.rolePolicyGroups.map(item => item.id);
            const filteredUserPolicyGroups = userData.userpolicygroups.filter(item => !rolePolicyGroupsIds.includes(item.id)).map(item => item.id);
            userData.organizationid = this.orgId;
            userData.id = 1;
            userData.userteams = userData.userteams || [];
            userData.userroles = [userData.userroles] || [];
            userData.userpolicygroups = filteredUserPolicyGroups;
            userData.emailtocurrentuser = userData.emailtocurrentuser || false;
            userData.username = userData.username || "";
            // userData.dob = new DatePipe('en-US').transform(userData.dob, 'YYYY-MM-dd');
            if (!this.userid) {
                this.userWithOutId(userData);
            }
            else {
                this.userWithID(userData);
            }
        }
    }
    userWithOutId(userData) {
        this.userService.saveUser(userData).subscribe((res) => {
            if (this.providerAccount && this.userForm.controls['providerId'].valid) {
                this.addProviderUser(userData.providerId, res['data']);
            }
            this.cancel(true);
            this.getUserList();
            this.alertService.success('User created successfully');
        }, (error) => {
            if (error.error.message) {
                this.alertService.error(error.error.message);
            }
            else {
                this.alertService.error('Failed to create user');
            }
        });
    }
    userWithID(userData) {
        if (this.uploadedFile) {
            userData.additionalinfo = {
                photo: this.imageData,
                thumbnail: this.imageData
            };
        }
        this.userService.updateUser(userData, this.userid).subscribe(() => {
            this.cancel(false);
            this.getUserList();
            this.userForm.controls['username'].disable();
            this.userForm.controls['email'].disable();
            this.alertService.success('User updated successfully');
        }, (err) => {
            if (err.error.message) {
                this.alertService.error(err.error.message);
            }
            else {
                this.alertService.error('Failed to create user');
            }
        });
    }
    mapUserToRole(userId, roleId) {
        const request = {
            userId: userId,
            roleId: roleId
        };
        this.userService.addUserRole(request).subscribe(() => console.log('User mapped to role Successfully'));
    }
    onClickAddUser() {
        this.userForm.controls['email'].enable();
        this.initializeForm();
        this.userForm.reset();
        this.formSubmit = false;
        this.sendCredentials = true;
        this.userid = '';
        this.userPolicyGroups = [];
        this.rolePolicyGroups = [];
        this.policyGroupList.map((p) => p.disabled = false);
        this.validationErrors = {};
        this.policyGroupsLength = 0;
    }
    cancel(changeFlag) {
        if (!this.userid) {
            this.userForm.reset();
            this.userForm.patchValue({
                isenabled: true,
                islocked: false
            });
            this.validationErrors = {};
            this.policyGroupsLength = 0;
        }
        this.providerAccount = false;
        this.formSubmit = false;
        this.userForm.controls['email'].enable();
        this.userForm.controls['username'].enable();
        if (changeFlag) {
            this.policyGroupList.map((p) => p.disabled = false);
        }
        this.userPolicyGroups = [];
        this.rolePolicyGroups = [];
        this.validationErrors = {};
    }
    searchUser(event) {
        const value = event.target.value.toLowerCase();
        this.filteredUserList = this.userList.filter(a => { var _a; return (_a = a === null || a === void 0 ? void 0 : a.firstname) === null || _a === void 0 ? void 0 : _a.toLowerCase().startsWith(value); });
    }
    getUserInfo(user) {
        this.userPolicyGroups = [];
        this.validationErrors = {};
        this.formSubmit = false;
        this.sendCredentials = false;
        this.userid = user.id;
        this.userService.getAllUserList(this.userid).subscribe((res) => {
            var _a, _b, _c, _d, _e, _f;
            // this.imageInformation = res.data.additionalinfo?.thumbnail?.fileName?.split('/')[2] || '';
            this.userForm.patchValue({
                firstname: res.data.firstname,
                middlename: res.data.middlename,
                lastname: res.data.lastname,
                username: res.data.username,
                // dob: new Date(res.data.dob),
                email: res.data.email,
                organizationid: res.data.organizationid,
                thumbnail: ((_b = (_a = res.data.additionalinfo) === null || _a === void 0 ? void 0 : _a.thumbnail) === null || _b === void 0 ? void 0 : _b.url) || '',
                isenabled: (_c = res === null || res === void 0 ? void 0 : res.data) === null || _c === void 0 ? void 0 : _c.isenabled,
                islocked: (_d = res === null || res === void 0 ? void 0 : res.data) === null || _d === void 0 ? void 0 : _d.islocked,
                userroles: ((_f = (_e = res === null || res === void 0 ? void 0 : res.data) === null || _e === void 0 ? void 0 : _e.userroles[0]) === null || _f === void 0 ? void 0 : _f.id) || 0,
                userteams: res.data.userteams
                    ? res.data.userteams
                        .filter((item) => item)
                        .map((item) => {
                        return item['id'];
                    })
                    : [],
            });
            const list = this.policyGroupList;
            const UPGs = res.data.policygroups;
            UPGs.forEach(upg => {
                const existingPolicy = list.find(f => f.id === upg.id);
                if (existingPolicy)
                    this.userPolicyGroups.push(existingPolicy);
            });
            this.getRolePolicyGroups(this.userForm.value.userroles);
            this.userForm.controls['email'].disable();
            this.userForm.controls['username'].disable();
            // });
        });
    }
    removeValue(e, item) {
        e.stopPropagation();
        const selectedPGs = this.userForm.value.userpolicygroups;
        const filteredPgs = selectedPGs.filter((s) => s.id !== Number(item.id));
        this.userForm.patchValue({
            userpolicygroups: filteredPgs
        });
        this.policyGroupsLength = this.userForm.value.userpolicygroups.length;
    }
    getRolePolicyGroups(roleId) {
        this.policyGroupList.forEach(pg => pg['disabled'] = false);
        if (!roleId) {
            this.rolePolicyGroups = [];
            this.userForm.patchValue({
                userpolicygroups: [],
            });
            return;
        }
        this.userService.getRoleById(roleId).subscribe((res) => {
            if (res) {
                this.rolePolicyGroups = res['data'].policyGroups.sort((a, b) => a.policygroupname.localeCompare(b.policygroupname));
                const PGS = res['data'].policyGroups
                    .filter((item) => item)
                    .map((item) => {
                    return item;
                }) || [];
                const arr = [];
                const list = this.policyGroupList;
                PGS.map((pg) => {
                    const pgExists = list.filter((f) => f.id === pg.id);
                    if (pgExists.length) {
                        arr.push(pgExists[0]);
                    }
                });
                this.userForm.patchValue({
                    userpolicygroups: arr
                });
                const rolePGs = this.userForm.value.userpolicygroups.map((r) => r.id);
                const includedIndexes = [];
                const excludedIndexes = [];
                this.policyGroupList.forEach((pg, index) => {
                    if (rolePGs.includes(pg.id)) {
                        includedIndexes.push(index);
                    }
                    else {
                        excludedIndexes.push(index);
                    }
                });
                const reorderedList = includedIndexes.map(index => this.policyGroupList[index]).concat(excludedIndexes.map(index => this.policyGroupList[index]));
                console.log(reorderedList, "reorder");
                reorderedList.forEach(pg => {
                    if (rolePGs.includes(pg.id)) {
                        pg['disabled'] = true;
                    }
                });
                this.policyGroupList = reorderedList;
                this.userPolicyGroups = this.userPolicyGroups.sort((a, b) => a.policygroupname.localeCompare(b.policygroupname));
                const allPolicyGroups = this.userForm.value.userpolicygroups.concat(this.userPolicyGroups);
                this.userForm.patchValue({ userpolicygroups: allPolicyGroups });
                this.policyGroupsLength = this.userForm.value.userpolicygroups.length;
            }
        }, (_err) => this.alertService.error('Failed to Fetch Policy Groups'));
    }
    delete(event, id) {
        event.stopPropagation();
        this.deletedId = id;
        $('#Deleteuser').modal('show');
    }
    deleteUser() {
        this.userService.deleteUser(this.deletedId).subscribe(() => {
            this.cancel(true);
            this.alertService.success('User deleted successfully');
            $('#Deleteuser').modal('hide');
            this.getUserList();
        }, (_err) => this.alertService.error('Failed to delete User'));
    }
    cancelUser() {
        this.sendCredentials = true;
        this.formSubmit = false;
        this.userForm.reset();
        this.userForm.patchValue({
            isenabled: true,
            islocked: false
        });
        this.userForm.controls['email'].enable();
        this.userForm.controls['username'].enable();
        this.userid = '';
        this.policyGroupList.map((p) => p.disabled = false);
        this.userPolicyGroups = [];
        this.rolePolicyGroups = [];
        this.validationErrors = {};
        this.policyGroupsLength = 0;
    }
    activateUser() {
        const userData = this.userForm.getRawValue();
        const body = {
            email: userData.email,
            code: userData.otp
        };
        this.userService.activateUser(body).subscribe((_res) => {
            this.alertService.success('User Activated Successfully');
        }, (_err) => {
            this.alertService.error('User Activation Failed');
        });
    }
    selectProvider(selected) {
        this.providerAccount = selected;
    }
    addProviderUser(providerId, userid) {
        const data = {
            providerId: providerId,
            accountId: userid.toString()
        };
        this.userService.addProviderUser(data).subscribe(() => {
            console.log('Provider User added Successfully');
        }, (_err) => console.log('failed to add Provider user'));
    }
    handleFileInput(fileValue) {
        const target = fileValue.target;
        const file = target.files[0];
        this.uploadedFile = fileValue.target.files[0].name;
        this.imageData = {
            contentType: fileValue.target.files[0].type,
            fileName: `user-profileimage/${this.userid}/${this.uploadedFile.replaceAll(' ', '')}`
        };
        this.imageInformation = '';
        if (this.validateImage(fileValue.target.files)) {
            this.userService.uploadKey(this.imageData).subscribe((res) => {
                this.urlPath = res.data;
                const uploadAttachment = document.getElementById('file');
                const uploadAttachmentDetails = uploadAttachment.files[0];
                this.httpService.putUpload(this.urlPath, uploadAttachmentDetails, uploadAttachmentDetails.type).subscribe((_resp) => {
                    this.alertService.success('Profile Image uploaded successfully');
                    const reader = new FileReader();
                    reader.onload = () => {
                        this.userForm.patchValue({ thumbnail: reader.result });
                    };
                    reader.readAsDataURL(file);
                    this.attachType = fileValue.target.files[0].type;
                }, (error) => {
                    if (error.status == 0) {
                        this.alertService.error(AppConstants.errorMessage);
                        this.uploadedFile = '';
                        this.urlPath = '';
                    }
                });
            }, (_error) => {
                this.alertService.error(AppConstants.errorMessage);
            });
        }
    }
    onClickRemoveProfile() {
        $('#DeleteProfile').modal('show');
    }
    removeThumbnail() {
        this.cancel(true);
        this.alertService.success('Profile image deleted successfully.');
        $('#DeleteProfile').modal('hide');
        this.userForm.controls['thumbnail'].reset();
        this.imageInformation = '';
        this.imageData = '';
        this.uploadedFile = '';
    }
    validateImage(file) {
        const fileSize = Number(file[0].size) / 1024;
        const filetype = file[0].type.replace('image/', '');
        if (filetype === 'jpg' || filetype === 'jpeg' || filetype === 'png' || filetype === 'gif') {
            if (fileSize < 100) {
                return true;
            }
            else {
                this.imageInformation = 'Image size exceeds 100 KB';
                this.alertService.warn('File is bigger than 100 KB');
                return false;
            }
        }
        else {
            this.imageInformation = '';
            this.alertService.warn(`${filetype} format is not supported`);
            return false;
        }
    }
    stopPropagation(event) {
        event.stopPropagation();
    }
    // onModelFirst(value: string): void {
    //   this.modelFirstName = value && value.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    // }
    // onModelMiddle(value: string): void {
    //   this.modelMiddleName = value && value.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    // }
    // onModelLast(value: string): void {
    //   this.modelLastName = value && value.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    // }
    selectPolicyGroup() {
        this.policyGroupsLength = this.userForm.value.userpolicygroups.length;
    }
    onPageNameInput(event, name) {
        const input = event.target;
        const startPosition = input.selectionStart;
        const endPosition = input.selectionEnd;
        const pagenameControl = this.userForm.get(name);
        if (pagenameControl.value) {
            const newValue = pagenameControl.value
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            pagenameControl.patchValue(newValue, { emitEvent: false });
            // Restore cursor position
            input.setSelectionRange(startPosition, endPosition);
        }
    }
}
UsersComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UsersComponent, deps: [{ token: UserOrgService }, { token: i2.FormBuilder }, { token: AlertService }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
UsersComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: UsersComponent, selector: "users", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION" }, ngImport: i0, template: "<app-alert></app-alert>\r\n<div class=\"permission\">\r\n  <div class=\"row\" [formGroup]=\"userForm\">\r\n    <div class=\"col-lg-4 col-md-6 col-12\">\r\n      <div class=\"clearfix\"></div>\r\n      <div class=\"tab-content py-2 px-0 px-sm-0\">\r\n        <div class=\"tab-pane fade show active\">\r\n          <div class=\"form-group bgiconsearch d-flex align-items-center\">\r\n            <span class=\"p-input-icon-right w-100\">\r\n              <i class=\"pi pi-times-circle\" (click)=\"clearSearch($event)\"></i>\r\n              <input class=\"form-control\" fieldKey=\"SETTINGS_USR_SEARCH_BY_NAME\" placeholder=\"Search by User name\"\r\n                type=\"text\" (keyup)=\"searchUser($event)\" pInputText />\r\n            </span>\r\n            <button type=\"button\" class=\"btn btn-primary btncommon ml-2\" (click)=\"onClickAddUser()\">Add</button>\r\n            <!-- Modified line -->\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <div class=\"useracess\">\r\n            <div class=\"d-flex align-items-center justify-content-center h-100 w-100 ng-star-inserted\"\r\n              *ngIf=\"!filteredUserList.length\">\r\n              <p>No Record Found</p>\r\n            </div>\r\n            <ng-container *ngFor=\"let item of filteredUserList\">\r\n              <div class=\"row userdata align-items-center\" (click)=\"getUserInfo(item)\"\r\n                [ngClass]=\"{ active: item.id === userid }\">\r\n                <div class=\"col-12\">\r\n                  <img *ngIf=\"!item?.additionalinfo?.thumbnail?.url\" src=\"assets/images/user-empty.png\" alt=\"user\"\r\n                    class=\"userempty mr-2\" />\r\n                  <img *ngIf=\"item?.additionalinfo?.thumbnail?.url\" [src]=\"item?.additionalinfo?.thumbnail?.url\"\r\n                    alt=\"user\" class=\"userempty mr-2\" />\r\n\r\n                  <div class=\"overflow_txt userInforight\">\r\n                    <span class=\"nameuser\">{{ item.firstname + ' ' + item.lastname }}</span>\r\n                    <br />\r\n                    <span class=\"emailuser\">{{ item.email }}</span> <br />\r\n                  </div>\r\n\r\n                  <div class=\"lock-icon\">\r\n                    <span class=\"right-icons\" *ngIf=\"item?.islocked\">\r\n                      <em class=\"fa fa-lock mr-2\" aria-hidden=\"true\" (click)=\"stopPropagation($event)\"></em>\r\n                    </span>\r\n                    <span class=\"right-icons\">\r\n                      <em class=\"fa fa-trash\" (click)=\"delete($event, item.id)\" aria-hidden=\"true\"\r\n                        *showField=\"'SETTINGS_USR_DELETE_USER'\"></em>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-8 col-md-6 col-12 user-right setting-tab mt-2\">\r\n      <p-card class=\"rbac-card h-100\" [style]=\"{ width: '100%' }\">\r\n        <div class=\"strip_head toggleleft\">\r\n          <span class=\"report_head font-weight-bold\">Personal Details</span>\r\n        </div>\r\n        <div class=\"p-fluid p-formgrid row\">\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label for=\"fname\" class=\"referral-form-labels\">First Name\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <input id=\"fname\" type=\"text\" placeholder=\"Enter First Name\" formControlName=\"firstname\"\r\n              fieldKey=\"SETTINGS_USR_FIRST_NAME\" aria-describedby=\"fname\" pInputText [(ngModel)]=\"modelFirstName\"\r\n              (keyup)=\"onPageNameInput($event, 'firstname')\"\r\n              (input)=\"onInput($event, 'username', 'First Name', true)\"/>\r\n              <div *ngIf=\"validationErrors['First Name']\" class=\"p-error block mt-1\">{{validationErrors['First Name']}}</div>\r\n            <div *ngIf=\"!validationErrors['First Name'] && formValidate['firstname'].errors && formSubmit\">\r\n              <div *ngIf=\"formValidate['firstname'].invalid\" class=\"p-error block mt-1\">First Name is required </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label for=\"mname\" class=\"referral-form-labels\">Middle Name </label>\r\n            <input id=\"mname\" type=\"text\" placeholder=\"Enter Middle Name\" formControlName=\"middlename\"\r\n              fieldKey=\"SETTINGS_USR_MIDDLE_NAME\" aria-describedby=\"mname\" pInputText [(ngModel)]=\"modelMiddleName\"\r\n              (keyup)=\"onPageNameInput($event, 'middlename')\" (input)=\"onInput($event, 'username', 'Middle Name', false)\" />\r\n            <div *ngIf=\"validationErrors['Middle Name']\" class=\"p-error block mt-1\">{{validationErrors['Middle Name']}}\r\n            </div>\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label for=\"lName\" class=\"referral-form-labels\">Last Name\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <input id=\"lName\" type=\"text\" formControlName=\"lastname\" placeholder=\"Enter Last Name\"\r\n              fieldKey=\"SETTINGS_USR_LAST_NAME\" pInputText [(ngModel)]=\"modelLastName\"\r\n              (keyup)=\"onPageNameInput($event, 'middlename')\" aria-describedby=\"lName\"\r\n              (input)=\"onInput($event, 'username', 'Last Name', true)\"/>\r\n              <div *ngIf=\"validationErrors['Last Name']\" class=\"p-error block mt-1\">{{validationErrors['Last Name']}}</div>\r\n            <div *ngIf=\"!validationErrors['Last Name'] && formValidate['lastname'].errors && formSubmit\">\r\n              <div *ngIf=\"formValidate['lastname'].invalid\" class=\"p-error block mt-1\">Last Name is required </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"p-fluid p-formgrid row\">\r\n          <!-- <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label for=\"userName\" class=\"referral-form-labels\">User Name\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <input id=\"userName\" type=\"text\" formControlName=\"username\" placeholder=\"Enter User Name\"\r\n              aria-describedby=\"userName\" fieldKey=\"SETTINGS_USR_USERNAME\" pInputText />\r\n            <div *ngIf=\"formValidate['username'].errors && formSubmit\">\r\n              <small *ngIf=\"formValidate['username'].invalid\" class=\"p-error block\">User Name is required </small>\r\n            </div>\r\n          </div> -->\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label for=\"usersEmailid\" class=\"referral-form-labels\">Email\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <input id=\"usersEmailid\" fieldKey=\"SETTINGS_USR_EMAIL\" formControlName=\"email\" placeholder=\"Enter Email\"\r\n              type=\"text\"\r\n              (input)=\"onInput($event, 'email', 'Email', true)\" pInputText />\r\n              <div *ngIf=\"validationErrors['Email']\" class=\"p-error block mt-1\">{{validationErrors['Email']}}</div>\r\n            <div *ngIf=\"!validationErrors['Email'] && formValidate['email'].errors && formSubmit\">\r\n              <div *ngIf=\"formValidate['email'].errors['required']\" class=\"p-error block mt-1\">Email is required </div>\r\n            </div>\r\n            <!-- <div *ngIf=\"formValidate['email'].errors && formSubmit\">\r\n              <small *ngIf=\"formValidate['email'].errors['pattern']\" class=\"p-error block\">Valid email is required\r\n              </small>\r\n            </div> -->\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <label aria-labelledby=\"role\" for=\"role\" class=\"referral-form-labels\">Role\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <p-dropdown inputId=\"role\" [options]=\"userRoles\" placeholder=\"Select a Role\" formControlName=\"userroles\"\r\n              styleClass=\"w-100\" optionLabel=\"name\" [resetFilterOnHide]=\"true\" [filter]=\"true\" [showClear]=\"true\"\r\n              optionValue=\"id\" ariaFilterLabel=\"null\" fieldKey=\"SETTINGS_USR_ROLE\"\r\n              (onChange)=\"getRolePolicyGroups($event.value)\">\r\n              <ng-template let-item pTemplate=\"selectedItem\">\r\n                <div pTooltip=\"{{item?.name}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{ item?.name }}</div>\r\n              </ng-template>\r\n              <ng-template let-object pTemplate=\"item\">\r\n                {{ object.name }}\r\n              </ng-template>\r\n            </p-dropdown>\r\n            <div *ngIf=\"formValidate['userroles'].errors && formSubmit\">\r\n              <div *ngIf=\"formValidate['userroles'].invalid\" class=\"p-error block mt-1\">Role is required </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-field col-md-12 col-12\">\r\n            <p-accordion class=\"w-full policygroup-accordion\" iconPos=\"endVal\">\r\n              <p-accordionTab>\r\n                <ng-template pTemplate=\"header\">\r\n                  <span class=\"flex align-items-center head-text gap-2 w-full\">\r\n                    <span class=\"font-bold\"><label for=\"pGroup\" class=\"referral-form-labels mb-0\">Additional Policy Groups</label> <span *ngIf=\"policyGroupsLength > 0\" class=\"pg-count ml-2\">{{policyGroupsLength}}</span> </span>\r\n                  </span>\r\n                </ng-template>\r\n                <p-multiSelect [options]=\"policyGroupList\" formControlName=\"userpolicygroups\" [resetFilterOnHide]=\"true\"\r\n                  defaultLabel=\"Select Policy Groups\" optionLabel=\"policygroupname\" inputId=\"pGroup\"\r\n                  ariaFilterLabel=\"null\" fieldKey=\"SETTINGS_USR_POLICY_GROUP\" (onChange)=\"selectPolicyGroup()\" display=\"chip\" styleClass=\"policygroup-v2\">\r\n                  <ng-template let-value pTemplate=\"selectedItems\">\r\n                    <div *ngFor=\"let option of value\">\r\n                      <ng-container>\r\n                        <div #selectedpg class=\"p-multiselect-token\" [ngClass]=\"option.disabled ? 'disabled' : '' \" id=\"{{option.id}}\">\r\n                          <span class=\"policygroupname\">\r\n                            {{ option.policygroupname }}\r\n                          </span>\r\n                          <span class=\"rolepg ml-2 badge badge-primary\" *ngIf=\"option.disabled\">\r\n                            Role\r\n                          </span>\r\n                          <em class=\"pi pi-times-circle ml-2 clear-icon right-sec\" *ngIf=\"!option.disabled\" role=\"button\"\r\n                            (click)=\"removeValue($event, selectedpg)\"></em>\r\n                        </div>\r\n                      </ng-container>\r\n                    </div>\r\n                    <div *ngIf=\"!value || value.length === 0\">Select Policy Groups\r\n                    </div>\r\n                  </ng-template>\r\n                  <ng-template let-pg pTemplate=\"item\">\r\n                    <div class=\"d-flex align-items-center flex-row justify-content-between gap-2 disabled-list w-100\">\r\n                      <div>{{ pg.name }}</div>\r\n                      <span class=\"rolepg ml-2 badge badge-primary\" *ngIf=\"pg.disabled\">Role</span>\r\n                    </div>\r\n                  </ng-template>\r\n                </p-multiSelect>\r\n              </p-accordionTab>\r\n            </p-accordion>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"p-fluid p-formgrid row\">\r\n          <div class=\"p-field col-md-12 col-12 mb-1 d-flex align-items-center\" *ngIf=\"!sendCredentials\">\r\n            <label for=\"file\" class=\"btn btn-primary mt-2 mb-2 profile d-flex align-items-center\">\r\n              <span class=\"material-icon material-symbols-outlined action-btn upload mr-2\">cloud_upload</span>Add\r\n              Image</label>\r\n            <span class=\"material-icon material-symbols-outlined text-muted action-btn mx-2\"\r\n              pTooltip=\"Supported file formats are JPG, PNG, JPEG and GIF\" style=\"cursor: pointer;\">\r\n              Info\r\n            </span>\r\n            <input type=\"file\" (change)=\"handleFileInput($event)\" id=\"file\" aria-hidden=\"true\"\r\n              style=\"visibility: hidden; display: none\" />\r\n            <img *ngIf=\"userForm.controls['thumbnail'].value\" [src]=\"userForm.controls['thumbnail'].value\" alt=\"user\"\r\n              class=\"userempty mr-0\" />\r\n            <label class=\"warning ml-2 mb-md-0\"\r\n              [ngStyle]=\"{ color: imageInformation === 'Image size exceeds 100 KB' ? '#fc0303' : '#007cc3'}\">{{\r\n              imageInformation }}</label> <em class=\"pi pi-trash ml-2\" pTooltip=\"Remove Image\"\r\n              *ngIf=\"userForm.controls['thumbnail'].value && imageInformation !== 'Image size exceeds 100 KB'\"\r\n              (click)=\"onClickRemoveProfile()\" style=\"cursor: pointer;\"></em>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"p-fluid p-formgrid row\">\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <div class=\"p-field-checkbox send-credentials\" *ngIf=\"sendCredentials\">\r\n              <p-checkbox class=\"p-m-1 p-m-lg-2\" inputId=\"binary\" [binary]=\"true\"\r\n                fieldKey=\"SETTINGS_USR_EMAIL_TO_CURRENT_USER\" formControlName=\"emailtocurrentuser\">\r\n              </p-checkbox>\r\n              <label for=\"binary\">Send Credentials to Current Logged in User</label>\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n        <div class=\"p-fluid p-formgrid row\">\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <div class=\"p-field-checkbox send-credentials\" *ngIf=\"!sendCredentials\">\r\n              <p-checkbox class=\"p-m-1 p-m-lg-2\" inputId=\"isenabled\" [binary]=\"true\" formControlName=\"isenabled\">\r\n              </p-checkbox>\r\n              <label for=\"isenabled\">Active</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\">\r\n            <div class=\"p-field-checkbox send-credentials\" *ngIf=\"!sendCredentials\">\r\n              <p-checkbox class=\"p-m-1 p-m-lg-2\" inputId=\"islocked\" [binary]=\"true\" formControlName=\"islocked\">\r\n              </p-checkbox>\r\n              <label for=\"islocked\">Locked</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"p-fluid p-formgrid row\">\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\"></div>\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12\"></div>\r\n          <div class=\"p-field col-lg-4 col-sm-4 col-md-12 col-12 mb-0\">\r\n            <button fieldKey=\"SETTINGS_USR_ADD_UPDATE\" class=\"pull-right mr-2 mb-2 btn btn-primary btncommon\"\r\n              (click)=\"addUser()\">\r\n              {{ userid ? 'Update User' : 'Add User' }}\r\n            </button>\r\n            <button fieldKey=\"SETTINGS_USR_CANCEL\" class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\"\r\n              (click)=\"cancelUser()\">\r\n              Clear\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </p-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal\" id=\"Deleteuser\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Delete User</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Are you sure want to Delete User?\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"mt-2\">\r\n          <button class=\"pull-right mb-2 btn btn-primary btncommon delete\" data-dismiss=\"modal\" (click)=\"deleteUser()\">\r\n            Delete\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal\" id=\"DeleteProfile\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Delete Profile Image</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        Are you sure you want to delete the Profile Image?\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"mt-2\">\r\n          <button class=\"pull-right mb-2 btn btn-primary btncommon delete\" data-dismiss=\"modal\"\r\n            (click)=\"removeThumbnail()\">\r\n            Delete\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>", styles: [".head-div{padding-top:9px;padding-left:7px}.bgiconsearch{margin-bottom:5px;padding-bottom:0;font-size:var(--font-13)}.useracess{border-radius:2px;padding:5px 0;overflow-y:auto}.pi-trash{color:red;font-size:var(--font-16)}.action-btn.upload{font-size:var(--font-19)}.userempty{max-width:none;border-radius:50%;height:35px;width:35px;display:inline-block;margin-right:15px}.row.userdata{margin:0;border-bottom:solid 1px var(--table-border);padding:5px 0;cursor:pointer}.overflow_txt{overflow:hidden;text-overflow:ellipsis}.overflow_txt.userInforight{display:inline-block;vertical-align:middle;width:calc(100% - 50px)}.lock-icon{position:absolute;right:15px;top:50%;margin-top:-13px}span.nameuser{font-size:var(--font-13);color:var(--label-text);font-weight:600}.userid,span.emailuser{font-size:var(--font-13);color:#767676}.activate{position:absolute;margin-top:-46px;margin-left:44rem}.toggleleft{font-size:var(--font-14);font-weight:600;display:block;margin-top:-12px;padding-bottom:13px}.report_button{margin-left:12px}.rbac-card .profile{color:#fff}.right-icons .fa{margin-top:3px;display:inline-block;z-index:9}.right-icons .fa-lock{font-size:var(--font-18)}.right-icons .fa-trash{font-size:var(--font-18)}@media screen and (max-width: 767px){.useracess{max-height:400px}}@media screen and (min-width: 768px){.useracess{height:calc(100vh - 188px)}}@media screen and (min-width: 990px) and (max-width: 1024px){.useracess .userempty{height:100%;width:100%}}:host ::ng-deep .clear-icon{font-size:13px}:host ::ng-deep .policygroup-accordion .policygroup-v2.p-multiselect .p-multiselect-panel{top:auto!important}\n"], components: [{ type: AlertComponent, selector: "app-alert" }, { type: i6.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { type: i7.Dropdown, selector: "p-dropdown", inputs: ["scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "selectId", "dataKey", "filterBy", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "virtualScroll", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "disabled", "options", "filterValue"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear"] }, { type: i8.Accordion, selector: "p-accordion", inputs: ["multiple", "style", "styleClass", "expandIcon", "collapseIcon", "activeIndex"], outputs: ["onClose", "onOpen", "activeIndexChange"] }, { type: i8.AccordionTab, selector: "p-accordionTab", inputs: ["header", "disabled", "cache", "transitionOptions", "selected"], outputs: ["selectedChange"] }, { type: i9.MultiSelect, selector: "p-multiSelect", inputs: ["style", "styleClass", "panelStyle", "panelStyleClass", "inputId", "disabled", "readonly", "group", "filter", "filterPlaceHolder", "filterLocale", "overlayVisible", "tabindex", "appendTo", "dataKey", "name", "label", "ariaLabelledBy", "displaySelectedLabel", "maxSelectedLabels", "selectionLimit", "selectedItemsLabel", "showToggleAll", "emptyFilterMessage", "emptyMessage", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "showHeader", "autoZIndex", "baseZIndex", "filterBy", "virtualScroll", "itemSize", "showTransitionOptions", "hideTransitionOptions", "ariaFilterLabel", "filterMatchMode", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "display", "autocomplete", "showClear", "scrollHeight", "defaultLabel", "placeholder", "options", "filterValue"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onClear", "onPanelShow", "onPanelHide"] }, { type: i10.Checkbox, selector: "p-checkbox", inputs: ["value", "name", "disabled", "binary", "label", "ariaLabelledBy", "ariaLabel", "tabindex", "inputId", "style", "styleClass", "labelStyleClass", "formControl", "checkboxIcon", "readonly", "required", "trueValue", "falseValue"], outputs: ["onChange"] }], directives: [{ type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }, { type: i12.InputText, selector: "[pInputText]" }, { type: i13.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i13.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i13.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i14.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { type: i15.Tooltip, selector: "[pTooltip]", inputs: ["tooltipPosition", "tooltipEvent", "appendTo", "positionStyle", "tooltipStyleClass", "tooltipZIndex", "escape", "showDelay", "hideDelay", "life", "positionTop", "positionLeft", "pTooltip", "tooltipDisabled", "tooltipOptions"] }, { type: i13.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: UsersComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'users',
                    templateUrl: './users.component.html',
                    styleUrls: ['./users.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: UserOrgService }, { type: i2.FormBuilder }, { type: AlertService }, { type: DataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }] } });

class RbacUsersComponent {
    constructor(permissionStore, _storeservice) {
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
        this.RBACORG = new RBACINFO();
    }
    ngOnInit() {
        this.COMMONSERVICE.subscribe((val) => {
            if (val) {
                this._storeservice.setData('HTTPSERVICE', val.httpService);
            }
        });
        this._storeservice.setData('RBACORG', this.RBACORG);
        this.permissionStore.setStore(this.PERMISSION);
        this._storeservice.setData('INPUTVALIDATIONMETHOD', this.INPUTVALIDATIONMETHOD);
    }
}
RbacUsersComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacUsersComponent, deps: [{ token: PermissionStore }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
RbacUsersComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: RbacUsersComponent, selector: "rbac-users", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", COMMONSERVICE: "COMMONSERVICE", INPUTVALIDATIONMETHOD: "INPUTVALIDATIONMETHOD" }, ngImport: i0, template: `
    <users [RBACORG]="RBACORG" [PERMISSION]="PERMISSION"></users>
  `, isInline: true, components: [{ type: UsersComponent, selector: "users", inputs: ["RBACORG", "PERMISSION"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacUsersComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'rbac-users',
                    template: `
    <users [RBACORG]="RBACORG" [PERMISSION]="PERMISSION"></users>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: PermissionStore }, { type: DataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }], COMMONSERVICE: [{
                type: Input
            }], INPUTVALIDATIONMETHOD: [{
                type: Input
            }] } });

class DirectivesModule {
}
DirectivesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DirectivesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DirectivesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DirectivesModule, declarations: [PermissionDirective], imports: [CommonModule], exports: [PermissionDirective] });
DirectivesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DirectivesModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DirectivesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [PermissionDirective],
                    imports: [CommonModule],
                    exports: [PermissionDirective]
                }]
        }] });

class AlertModule {
}
AlertModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AlertModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertModule, declarations: [AlertComponent], imports: [CommonModule], exports: [AlertComponent] });
AlertModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [AlertComponent],
                    exports: [AlertComponent]
                }]
        }] });

class CapitalizePipe {
    transform(value) {
        if (!value)
            return value;
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
}
CapitalizePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CapitalizePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
CapitalizePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CapitalizePipe, name: "capitalize" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CapitalizePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'capitalize'
                }]
        }] });

class SharedPipesModule {
}
SharedPipesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SharedPipesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SharedPipesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SharedPipesModule, declarations: [CapitalizePipe], imports: [CommonModule], exports: [CapitalizePipe] });
SharedPipesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SharedPipesModule, providers: [CapitalizePipe], imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: SharedPipesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [CapitalizePipe],
                    exports: [CapitalizePipe],
                    providers: [CapitalizePipe]
                }]
        }] });

class PicsRbacUsersModule {
}
PicsRbacUsersModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsRbacUsersModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PicsRbacUsersModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsRbacUsersModule, declarations: [UsersComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        TabMenuModule,
        TabViewModule,
        TreeSelectModule,
        CheckboxModule,
        DropdownModule,
        CardModule,
        ConfirmDialogModule,
        AccordionModule,
        MessageModule,
        TableModule,
        InputTextModule,
        CalendarModule,
        EditorModule,
        FieldsetModule,
        ButtonModule,
        RadioButtonModule,
        InputTextareaModule,
        InputMaskModule,
        StepsModule,
        ToastModule,
        RippleModule,
        AvatarModule,
        BadgeModule,
        MultiSelectModule,
        InputSwitchModule,
        ProgressSpinnerModule,
        SpeedDialModule,
        OrderListModule,
        FileUploadModule,
        DialogModule,
        PasswordModule,
        KnobModule,
        SidebarModule,
        ContextMenuModule,
        ConfirmPopupModule,
        DirectivesModule,
        AlertModule,
        SharedPipesModule], exports: [UsersComponent] });
PicsRbacUsersModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsRbacUsersModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            NgbModule,
            TabMenuModule,
            TabViewModule,
            TreeSelectModule,
            CheckboxModule,
            DropdownModule,
            CardModule,
            ConfirmDialogModule,
            AccordionModule,
            MessageModule,
            TableModule,
            InputTextModule,
            CalendarModule,
            EditorModule,
            FieldsetModule,
            ButtonModule,
            RadioButtonModule,
            InputTextareaModule,
            InputMaskModule,
            StepsModule,
            ToastModule,
            RippleModule,
            AvatarModule,
            BadgeModule,
            MultiSelectModule,
            InputSwitchModule,
            ProgressSpinnerModule,
            SpeedDialModule,
            OrderListModule,
            FileUploadModule,
            DialogModule,
            PasswordModule,
            KnobModule,
            SidebarModule,
            ContextMenuModule,
            ConfirmPopupModule,
            DirectivesModule,
            AlertModule,
            SharedPipesModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PicsRbacUsersModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        UsersComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        NgbModule,
                        TabMenuModule,
                        TabViewModule,
                        TreeSelectModule,
                        CheckboxModule,
                        DropdownModule,
                        CardModule,
                        ConfirmDialogModule,
                        AccordionModule,
                        MessageModule,
                        TableModule,
                        InputTextModule,
                        CalendarModule,
                        EditorModule,
                        FieldsetModule,
                        ButtonModule,
                        RadioButtonModule,
                        InputTextareaModule,
                        InputMaskModule,
                        StepsModule,
                        ToastModule,
                        RippleModule,
                        AvatarModule,
                        BadgeModule,
                        MultiSelectModule,
                        InputSwitchModule,
                        ProgressSpinnerModule,
                        SpeedDialModule,
                        OrderListModule,
                        FileUploadModule,
                        DialogModule,
                        PasswordModule,
                        KnobModule,
                        SidebarModule,
                        ContextMenuModule,
                        ConfirmPopupModule,
                        DirectivesModule,
                        AlertModule,
                        SharedPipesModule,
                    ],
                    exports: [
                        UsersComponent
                    ],
                    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
                }]
        }] });

class RbacUsersModule {
}
RbacUsersModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacUsersModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RbacUsersModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacUsersModule, declarations: [RbacUsersComponent], imports: [PicsRbacUsersModule], exports: [RbacUsersComponent] });
RbacUsersModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacUsersModule, providers: [UserOrgService, HttpClient, AlertService, ConfirmationService, PermissionStore, DataStoreService], imports: [[
            PicsRbacUsersModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacUsersModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        RbacUsersComponent
                    ],
                    imports: [
                        PicsRbacUsersModule
                    ],
                    exports: [
                        RbacUsersComponent
                    ],
                    providers: [UserOrgService, HttpClient, AlertService, ConfirmationService, PermissionStore, DataStoreService]
                }]
        }] });

/*
 * Public API Surface of rbac-users
 */

/**
 * Generated bundle index. Do not edit.
 */

export { RbacUsersComponent, RbacUsersModule, RbacUsersService };
//# sourceMappingURL=pics-core-rbac-users.js.map
