package finApp;

public class Month{

    private int id;
    private String month;

    public int getId() {
        return id;
    }

    public Month(int id, String month) {
        this.id = id;
        this.month = month;
    }

    public void setId(int id) {
        this.id = id;

    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }
}