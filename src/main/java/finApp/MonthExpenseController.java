package finApp;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MonthExpenseController {
    @RequestMapping(value = "/")
    public String index() {
        return "index.html";
    }
}
