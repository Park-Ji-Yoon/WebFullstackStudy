<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Lifecycle</title>
</head>
<body>
Hello~!
<%
	System.out.println("jspService()");
%>
<%!
	public void jspInit(){
		System.out.println("jspInit()");
	}

	public void jspDestory(){
		System.out.println("jspDestory()!!!");
	}

%>
</body>
</html>