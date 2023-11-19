package personal.personal;

import org.junit.jupiter.api.Test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.JavascriptExecutor;

import static org.junit.jupiter.api.Assertions.*;

import personal.links.Links;

public class PersonalTest {
    Links links = new Links();
    WebDriver driver = new ChromeDriver();

    @Test
    public void testBlubbyDodgeLink() {
        try {
            driver.get(links.localUrl);

            WebElement blubbyDodgeLink = driver.findElement(By.linkText("Blubby Dodge"));

            JavascriptExecutor executor = (JavascriptExecutor) driver;
            executor.executeScript("arguments[0].click()", blubbyDodgeLink);

            // Clicking did not work. Even when adding explicit and implicit waits.
            // blubbydodgeLink.click();

            assertTrue(driver.getCurrentUrl().endsWith("#/blubbydodge"));
        } finally {
            driver.close();
        }
    }
}
