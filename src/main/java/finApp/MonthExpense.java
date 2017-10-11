package finApp;

import org.springframework.data.annotation.Id;

public class MonthExpense {
    @Id
    public String id;
    public int month;
    public int year;

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String category;
    public Double totalExpense;

    public MonthExpense(int month,int year,String category,Double totalExpense) {
        this.month = month;
        this.year = year;
        this.category = category;
        this.totalExpense = totalExpense;
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

    public String getDate() {
        return ""+month+"/" + year;
    }
}
