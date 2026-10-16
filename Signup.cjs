"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Signup;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var inputClass = "h-[56px] w-full min-w-0 rounded-[8px] border border-[#dbdadd] bg-white px-4 text-[18px] leading-[27px] text-[#5c4b42] outline-none transition-colors focus:border-[#8574ac] focus:ring-2 focus:ring-[#8574ac]/20 motion-reduce:transition-none";
var labelClass = "text-[18px] font-bold leading-[27px] tracking-[-0.5px]";
function SignupField(_a) {
    var label = _a.label, id = _a.id, props = __rest(_a, ["label", "id"]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex min-w-0 flex-col gap-[5px]", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: id, className: labelClass, children: label }), (0, jsx_runtime_1.jsx)("input", __assign({}, props, { id: id, className: inputClass }))] }));
}
function Signup() {
    var id = (0, react_1.useId)();
    var _a = (0, react_1.useState)(""), notice = _a[0], setNotice = _a[1];
    function handleSubmit(event) {
        event.preventDefault();
        // 화면 확인용입니다. 백엔드 연결 전에는 정보를 전송하거나 저장하지 않습니다.
        setNotice("회원가입 기능을 준비 중입니다.");
    }
    return ((0, jsx_runtime_1.jsx)("section", { "aria-labelledby": "".concat(id, "-title"), className: "w-full bg-white px-6 py-16 lg:py-20", children: (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, onChange: function () { return setNotice(""); }, className: "font-pretendard mx-auto flex w-full max-w-[724px] flex-col gap-[60px] text-[#5c4b42]", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center gap-[10px] text-center [filter:drop-shadow(0px_2px_3px_rgba(20,18,16,0.05))_drop-shadow(0px_8px_10px_rgba(20,18,16,0.08))]", children: [(0, jsx_runtime_1.jsx)("img", { src: "/images/signup/signup-symbol.svg", alt: "Dear By Pet", width: 180, height: 79.4176, className: "block shrink-0" }), (0, jsx_runtime_1.jsx)("h1", { id: "".concat(id, "-title"), className: "font-cormorant text-[33px] font-normal italic leading-[49px] tracking-[0.1px] text-[#412826]", children: "Sign up" }), (0, jsx_runtime_1.jsx)("p", { className: "text-[18px] leading-[27px] tracking-[-0.5px]", children: "\uD68C\uC6D0\uAC00\uC785" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-[13px] pt-[3.5px]", children: [(0, jsx_runtime_1.jsxs)("div", { className: "grid gap-[13px] sm:grid-cols-2", children: [(0, jsx_runtime_1.jsx)(SignupField, { id: "".concat(id, "-username"), label: "\uC544\uC774\uB514", name: "username", type: "text", autoComplete: "username", autoCapitalize: "none", spellCheck: false, required: true }), (0, jsx_runtime_1.jsx)(SignupField, { id: "".concat(id, "-password"), label: "\uBE44\uBC00\uBC88\uD638", name: "password", type: "password", autoComplete: "new-password", required: true })] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid gap-[13px] sm:grid-cols-2", children: [(0, jsx_runtime_1.jsx)(SignupField, { id: "".concat(id, "-name"), label: "\uC774\uB984", name: "name", type: "text", autoComplete: "name", required: true }), (0, jsx_runtime_1.jsx)(SignupField, { id: "".concat(id, "-phone"), label: "\uC5F0\uB77D\uCC98", name: "phone", type: "tel", autoComplete: "tel", required: true })] }), (0, jsx_runtime_1.jsx)(SignupField, { id: "".concat(id, "-email"), label: "\uC774\uBA54\uC77C", name: "email", type: "email", autoComplete: "email", autoCapitalize: "none", spellCheck: false, required: true }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-[5px]", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "".concat(id, "-member-type"), className: labelClass, children: "\uD68C\uC6D0 \uC720\uD615" }), (0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsxs)("select", { id: "".concat(id, "-member-type"), name: "memberType", defaultValue: "expert", required: true, className: "h-[59px] w-full cursor-pointer appearance-none rounded-[8px] border border-[#dbdadd] bg-white pl-6 pr-14 text-[18px] leading-[27px] tracking-[-0.5px] text-[#412826] outline-none focus:border-[#8574ac] focus:ring-2 focus:ring-[#8574ac]/20", children: [(0, jsx_runtime_1.jsx)("option", { value: "general", children: "\uC77C\uBC18\uD68C\uC6D0" }), (0, jsx_runtime_1.jsx)("option", { value: "expert", children: "\uC804\uBB38\uAC00" })] }), (0, jsx_runtime_1.jsx)("img", { src: "/images/signup/select-arrow.svg", alt: "", width: 14, height: 8, className: "pointer-events-none absolute right-[23px] top-1/2 block -translate-y-1/2" })] })] }), (0, jsx_runtime_1.jsxs)("label", { className: "flex cursor-pointer items-center gap-3", children: [(0, jsx_runtime_1.jsxs)("span", { className: "relative block h-[25px] w-[26px] shrink-0", children: [(0, jsx_runtime_1.jsx)("input", { name: "termsConsent", type: "checkbox", value: "agreed", required: true, className: "peer absolute inset-0 z-10 m-0 h-full w-full cursor-pointer opacity-0" }), (0, jsx_runtime_1.jsx)("span", { className: "pointer-events-none absolute inset-0 rounded-full border-2 border-[#dbdadd] bg-white peer-checked:invisible peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-[#8574ac]" }), (0, jsx_runtime_1.jsx)("img", { src: "/images/signup/consent-selected.svg", alt: "", width: 26, height: 25, className: "pointer-events-none absolute inset-0 hidden rounded-full peer-checked:block peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-[#8574ac]" })] }), (0, jsx_runtime_1.jsx)("span", { className: "text-[16px] font-semibold leading-[27px] tracking-[-0.5px] sm:text-[18px]", children: "\uD68C\uC6D0\uAC00\uC785 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4." })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center gap-4", children: [(0, jsx_runtime_1.jsx)("button", { type: "submit", className: "h-[56px] w-full cursor-pointer rounded-[8px] border border-[#1e1928]/16 bg-[#412826] text-[18px] leading-[21px] text-white transition-colors duration-200 hover:bg-[#7A5C50] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8574ac] motion-reduce:transition-none", children: "\uD68C\uC6D0\uAC00\uC785" }), (0, jsx_runtime_1.jsx)("p", { role: "status", className: notice ? "text-center text-[14px] leading-6" : "sr-only", children: notice })] })] }) }));
}
