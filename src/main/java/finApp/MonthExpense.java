package finApp;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.annotation.Id;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

public class MonthExpense {
    @Id
    public String id;
    public String date;
    public String category;
    public Double totalExpense;

    public String getDate() {
        return date;
    }

    public MonthExpense(String date, String category, Double totalExpense) {
        this.date = date;
        this.category = category;
        this.totalExpense = totalExpense;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Double getTotalExpense() {
        return totalExpense;
    }

    public void setTotalExpense(Double totalExpense) {
        this.totalExpense = totalExpense;
    }
}
