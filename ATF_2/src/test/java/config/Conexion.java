
package config;

import java.sql.Connection;
import java.sql.DriverManager;

public class Conexion {
    Connection con;
    String url="jdbc:mysql://localhost:3309/bd_ventas";
    String user="root";
    String password="12345678";
    public  Connection Conexion(){
        try{
            Class.forName("com.mysql.jdbc.driver");
            con=DriverManager.getConnection(url, user, password);
        } catch (Exception e) {
        }
        return con;
    }
}
