use std::collections::HashMap;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    console_error_panic_hook::set_once();
    alert(&format!("Hello, {}!", name));
}

#[wasm_bindgen]
pub fn fibonacci(n: i32) -> i64 {
    let mut cache: HashMap<i32, i64> = HashMap::new();

    if let Some(&result) = cache.get(&n) {
        return result;
    }

    let result = if n == 0 {
        0
    } else if n == 1 {
        1
    } else {
        let mut a = 0;
        let mut b = 1;
        let mut c = 0;

        for _ in 2..=n {
            c = a + b;
            a = b;
            b = c;
        }

        c
    };

    cache.insert(n, result);
    result
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_fibonacci() {
        assert_eq!(fibonacci(0), 0);
        assert_eq!(fibonacci(1), 1);
        assert_eq!(fibonacci(2), 1);
        assert_eq!(fibonacci(3), 2);
        assert_eq!(fibonacci(48), 4807526976);
    }
}
