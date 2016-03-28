class Api::V1::AnnotationsController < ApiController

  def create
    @annotation = Annotation.create(annotation_params)
    if @annotation.save
      render json: @annotation
    else
      return head(422)
    end
  end

  def update

    @annotation = Annotation.find(params[:id])
    @annotation.update_attributes(annotation_params)
    if @annotation.save
      render json: @annotation
    else
      return head(422)
    end
  end
private

  def annotation_params
    params.require(:annotation).permit(:location_id, :text, :image_url, :category,
                                       :height, :width, :x, :y, :shape)
  end

end
