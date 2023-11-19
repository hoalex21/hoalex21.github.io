package personal.personal;

import org.junit.jupiter.api.Test;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.ValueSource;
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

    @ParameterizedTest
    @CsvSource({
            "Blubby Dodge, #/blubbydodge",
            "CaloTrak, #/calotrak",
            "Very Berry, #/veryberry"
    })
    public void testPersonalProjectsLinkToRespectiveProjectPage(
            String linkText,
            String expectedPath
    ) {
        try {
            driver.get(links.localUrl);

            WebElement link = driver.findElement(By.linkText(linkText));

            JavascriptExecutor executor = (JavascriptExecutor) driver;
            executor.executeScript("arguments[0].click()", link);

            // Clicking did not work. Even when adding explicit and implicit waits.
            // link.click();

            assertTrue(driver.getCurrentUrl().endsWith(expectedPath));
        } finally {
            driver.close();
        }
    }
}
