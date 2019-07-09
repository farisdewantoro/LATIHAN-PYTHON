from server import server_app

app = server_app()


if __name__ == '__main__':
    app.run(debug=True)
