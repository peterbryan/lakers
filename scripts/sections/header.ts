$('./body') {
  $(".//div[@id='header']") {
      # Move top menu into #Logo container
      $("./div[@id='logo']") {
      move_here("../../../div[@id='header']", "bottom"){
        $("./ul") {
          # Remove unwanted top menu items from upper menu
          $("./li[position() = 1 or position() > 2 and not(position()=last()-1)]") {
            remove()
          }     
        }
      }

      # Inject header template
      inject_after(read("../sections/header.html"))

      # Fill search template
      $("..//div[@class='mw_search']"){
        # Move search form into container element
        move_here("//div[@id='block-search-0']", "bottom"){
          $("./p") {
            remove()
          }
          $("./form") {
            $("./label") {
              remove()
            }					 
          
            # Change search button background image
            $("./input[@type='image']") {
              wrap("div", class: "mw_search_btn buttons-search")
            }

            $("./input[@type='text']") {
              attribute("value", "Search…")
            } 

          }     
        }
        $$('#edit-search-block-form-1-wrapper input'){
          attributes(value: 'Search...')
          
        }
      }   
    }                       
    # Remove br
    $("./br") {
      remove()
    }

    # Temporarily remove header links
    remove("../div[@id='Menu']")
  }
}