import expressAsyncHandler from "express-async-handler";

export const crateFile = expressAsyncHandler(async (req, res, next) => {
  console.log(req.file);
  let link = `http://localhost:8000/${req.file.filename}`;
  res.status(200).json({
    success: true,
    result: link,
  });
  // successResponse(res,201,"file created successfully",link)
});

export const crateMultipleFile = expressAsyncHandler(async (req, res, next) => {
  /* value= {
        fieldname: 'file',
        originalname: '455608137_473780642146808_2999710467283107181_n.jpg',
        encoding: '7bit',
        mimetype: 'image/jpeg',
        destination: './public',
        filename: '1724389605356455608137_473780642146808_2999710467283107181_n.jpg',
        path: 'public\\1724389605356455608137_473780642146808_2999710467283107181_n.jpg',
        size: 120744
      },
 */

  let links = req.files.map((value, i) => {
    let link = `localhost:8000/$(value.filename)`;
    return link;
  });
  res.status(201).json({
    success: true,
    message: "file created successfully",
    links,
  });
});
