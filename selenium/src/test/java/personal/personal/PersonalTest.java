package personal.personal;

import org.junit.jupiter.api.Test;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class PersonalTest {
    WebDriver driver = new ChromeDriver();

    @Test
    public void testOpenCloseChrome() {
        try {
            driver.get("localhost:3000");
        } finally {
            driver.close();
        }
    }
}
