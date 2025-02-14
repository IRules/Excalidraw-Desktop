// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
use std::fs;


#[tauri::command]
fn save_chart(elements_json: &str) {
    let path = "chart.json";
    fs::write
    (
        path,
        elements_json
    ).expect("Unable to write file");
}

#[tauri::command]
fn load_chart() -> String {
    let path = "chart.json";

    if !std::path::Path::new(path).exists() {
        fs::write
        (
            path,
            "[]"
        ).expect("Unable to write file");
    }

    let contents = fs::read_to_string(path)
        .expect("Something went wrong reading the file");
    return contents;
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![save_chart, load_chart])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
