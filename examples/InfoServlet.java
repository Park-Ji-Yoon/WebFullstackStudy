package examples;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/Info")
public class InfoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public InfoServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		out.println("<html>");
		out.println("<head><title>form</title></head>");
		out.println("<body>");
		
		String uri = request.getRequestURI();
		StringBuffer url = request.getRequestURL();
		String contextPath = request.getContextPath();
		String remodeAddr = request.getRemoteAddr();
		
		out.println("uri : " + uri + "<br>"); // /firstweb/info
		out.println("url : " + url + "<br>"); // http~~
		out.println("contextPath : " + contextPath + "<br>"); // /firstweb
		out.println("remodeAddr : " + remodeAddr + "<br>"); // 0:0:0:0:0:0:0:1
		
		out.println("</body>");
		out.println("</html>");
	}

}
