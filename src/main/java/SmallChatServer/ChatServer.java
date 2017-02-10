package SmallChatServer;

import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.net.InetSocketAddress;

/**
 * Created by iGor on 1/14/17.
 */
public class ChatServer {

    public static void main(String[] args) {
        try {
            HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);
            server.createContext("/test", )
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
