package personal.personal;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import org.junit.jupiter.params.provider.ValueSource;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.JavascriptExecutor;

import personal.links.Links;

public class PersonalTest {
    Links links = new Links();
    WebDriver driver = new ChromeDriver();

    String backLinkText = "< Back";

    String testLinkUrl = links.localUrl;

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
            driver.get(testLinkUrl);

            WebElement link = driver.findElement(By.linkText(linkText));

            JavascriptExecutor executor = (JavascriptExecutor) driver;
            executor.executeScript("arguments[0].click()", link);

            // Clicking did not work. Even when adding explicit and implicit waits.
            // link.click();

            WebElement backButton = driver.findElement(By.linkText(backLinkText));

            assertTrue(driver.getCurrentUrl().endsWith(expectedPath));
            assertTrue(backButton.isDisplayed());
            assertTrue(driver.findElements(By.linkText(linkText)).isEmpty());
        } finally {
            driver.close();
        }
    }

    @ParameterizedTest
    @ValueSource(strings = {
            "Blubby Dodge",
            "CaloTrak",
            "Very Berry"
    })
    public void testPersonalProjectPagesGoBackToIndex(String linkText) {
        try {
            driver.get(testLinkUrl);

            WebElement link = driver.findElement(By.linkText(linkText));

            JavascriptExecutor executor = (JavascriptExecutor) driver;
            executor.executeScript("arguments[0].click()", link);

            // Clicking did not work. Even when adding explicit and implicit waits.
            // link.click();

            WebElement backButton = driver.findElement(By.linkText(backLinkText));
            backButton.click();

            assertTrue(driver.getCurrentUrl().endsWith(testLinkUrl));
            assertTrue(driver.findElement(By.linkText(linkText)).isDisplayed());
            assertTrue(driver.findElements(By.linkText(backLinkText)).isEmpty());
        } finally {
            driver.close();
        }
    }
}
