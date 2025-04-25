import sanitize from "sanitize-html";

export function cleanInput(input){
    return sanitizeHtml(input?.trim() || '');
}