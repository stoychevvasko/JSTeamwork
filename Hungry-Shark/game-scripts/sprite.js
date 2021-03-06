function sprite(options) {
    var that = {},
        frameIndex = 0,
        tickCount = 0,
        ticksPerFrame = options.ticksPerFrame || 0,
        numberOfFrames = options.numberOfFrames || 1;

    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.x = options.x;
    that.y = options.y;
    that.image = options.image;

    that.update = function () {
        tickCount += 1;

        if (tickCount > ticksPerFrame) {
            tickCount = 0;

            // If the current frame index is in range
            if (frameIndex < numberOfFrames - 1) {
                // Go to the next frame
                frameIndex += 1;
            } else {
                frameIndex = 0;
            }
        }
    };

    that.render = function (x, y) {
        // Draw the animation
        that.context.drawImage(
            that.image,
                frameIndex * that.width / numberOfFrames,
            0,
                that.width / numberOfFrames,
            that.height,
            x,
            y,
                that.width / numberOfFrames,
            that.height);
    };

    return that;
}

function drawScreen(context, source) {
    var image = new Image();

    image.onload = function () {
        context.drawImage(image, 0, 0, context.canvas.width, context.canvas.height);
    };

    image.src = source;
}