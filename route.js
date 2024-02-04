const calculator = require('calculator');

module.exports = function (server) {
    server.route({
        method: 'GET',

        path: '/calculator/sum/{num1},{num2}',
        handler: function (request, h) {

            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            return calculator.sum(num1, num2);
        }
    });

    server.route({
        method: 'GET',

        path: '/calculator/sub/{num1},{num2}',
        handler: function (request, h) {

            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            return calculator.subtraction(num1, num2);
        }
    });

    server.route({
        method: 'GET',

        path: '/calculator/multi/{num1},{num2}',
        handler: function (request, h) {

            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            return calculator.multiplication(num1, num2);

        }
    });

    server.route({
        method: 'GET',

        path: '/calculator/div/{num1},{num2}',
        handler: function (request, h) {

            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            return calculator.division(num1, num2);
        }
    });
}