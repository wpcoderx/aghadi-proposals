import sanitize from "sanitize-html";

export function cleanInput(input){
    return sanitize(input?.trim() || '');
}