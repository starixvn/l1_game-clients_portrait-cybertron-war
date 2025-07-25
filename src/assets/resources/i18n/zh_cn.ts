const win = window as any;
export const languages = {
    "Common": {},
    "Classicslot": {},
    "SummerHeat": {}
};

if (!win.languages) {
    win.languages = {};
}

win.languages.zh_cn = languages;