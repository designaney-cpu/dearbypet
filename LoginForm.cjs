"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoginForm;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var inputClass = "h-[56px] w-full min-w-0 rounded-[8px] border border-[#dbdadd] bg-white px-4 text-[18px] leading-[27px] text-[#5c4b42] outline-none transition-colors focus:border-[#8574ac] focus:ring-2 focus:ring-[#8574ac]/20 motion-reduce:transition-none";
function LoginForm(_a) {
    var signupHref = _a.signupHref;
    var id = (0, react_1.useId)();
    var _b = (0, react_1.useState)(""), notice = _b[0], setNotice = _b[1];
    function handleSubmit(event) {
        event.preventDefault();
        // UI 확인용: 인증 API 연결 전에는 입력 정보를 전송하거나 저장하지 않습니다.
        setNotice("로그인 기능을 준비 중입니다.");
    }
    return ((0, jsx_runtime_1.jsx)("section", { "aria-labelledby": "".concat(id, "-title"), className: "w-full bg-white px-6 py-16 lg:py-20", children: (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, className: "font-pretendard mx-auto flex w-full max-w-[524px] flex-col gap-[60px] text-[#5c4b42]", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center gap-[10px] text-center [filter:drop-shadow(0px_2px_3px_rgba(20,18,16,0.05))_drop-shadow(0px_8px_10px_rgba(20,18,16,0.08))]", children: [(0, jsx_runtime_1.jsx)("img", { src: "/images/login/login-symbol.svg", alt: "Dear By Pet", width: 180, height: 79.4176, className: "block h-[79.4176px] w-[180px] object-contain" }), (0, jsx_runtime_1.jsx)("h1", { id: "".concat(id, "-title"), className: "font-cormorant text-[33px] font-normal italic leading-[49px] tracking-[0.1px] text-[#412826]", children: "Login" }), (0, jsx_runtime_1.jsx)("p", { className: "text-[18px] leading-[27px] tracking-[-0.5px]", children: "\uB85C\uADF8\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4." })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-[13px] pt-[3.5px]", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-[5px]", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "".concat(id, "-username"), className: "text-[18px] font-bold leading-[27px] tracking-[-0.5px]", children: "\uC544\uC774\uB514" }), (0, jsx_runtime_1.jsx)("input", { id: "".concat(id, "-username"), name: "username", type: "text", autoComplete: "username", autoCapitalize: "none", spellCheck: false, required: true, className: inputClass })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-[5px]", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "".concat(id, "-password"), className: "text-[18px] font-bold leading-[27px] tracking-[-0.5px]", children: "\uBE44\uBC00\uBC88\uD638" }), (0, jsx_runtime_1.jsx)("input", { id: "".concat(id, "-password"), name: "password", type: "password", autoComplete: "current-password", required: true, className: inputClass })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center gap-6", children: [(0, jsx_runtime_1.jsx)("button", { type: "submit", className: "h-[56px] w-full cursor-pointer rounded-[8px] border border-[#1e1928]/16 bg-[#412826] text-[18px] leading-[21px] text-white transition-colors duration-200 hover:bg-[#7A5C50] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8574ac] motion-reduce:transition-none", children: "\uB85C\uADF8\uC778" }), (0, jsx_runtime_1.jsx)("a", { href: signupHref !== null && signupHref !== void 0 ? signupHref : "#", onClick: function (event) {
                                if (!signupHref) {
                                    event.preventDefault();
                                    setNotice("회원가입 기능을 준비 중입니다.");
                                }
                            }, className: "rounded-sm text-[18px] leading-[27px] tracking-[-0.5px] underline underline-offset-4 hover:text-[#7A5C50] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8574ac]", children: "\uD68C\uC6D0\uAC00\uC785" }), (0, jsx_runtime_1.jsx)("p", { role: "status", "aria-live": "polite", className: notice ? "text-center text-[14px] leading-6" : "sr-only", children: notice })] })] }) }));
}
