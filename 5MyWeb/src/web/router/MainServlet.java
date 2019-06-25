package web.router;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class MainServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public MainServlet() {
        super();

    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doProcess(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doProcess(request, response);
	}

	// http://localhost:8080/MyWeb/main?sign=login&name=hby
	protected void doProcess(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html; charset=utf-8");
		PrintWriter out = response.getWriter();
		String sign = request.getParameter("sign");
		if(sign.equals("login")) {
			String name = request.getParameter("name");
			HttpSession session = request.getSession();
			// 첫번째 인자가 jsp file body tag에서 ${첫번째 인자}와 같이 mapping됨
			session.setAttribute("name", name); 
			RequestDispatcher disp = request.getRequestDispatcher("login_ok.jsp");
			disp.forward(request, response);
		}
	}
	
}
